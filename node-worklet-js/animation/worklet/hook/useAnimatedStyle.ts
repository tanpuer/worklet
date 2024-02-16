import { startMapper, stopMapper, makeRemote } from '../core';
import updateProps from '../UpdateProps';
import { initialUpdaterRun } from '../animation';
import NativeReanimatedModule from '../NativeReanimated';
import { useSharedValue } from './useSharedValue';
import {
  buildWorkletsHash,
  isAnimated,
  shallowEqual,
  validateAnimatedStyles,
} from './utils';
import type { DependencyList, Descriptor } from './commonTypes';
import type { ViewDescriptorsSet, ViewRefSet } from '../ViewDescriptorsSet';
import { makeViewDescriptorsSet, makeViewsRefSet } from '../ViewDescriptorsSet';
import type {
  AnimationObject,
  AdapterWorkletFunction,
  BasicWorkletFunction,
  BasicWorkletFunctionOptional,
  NestedObjectValues,
  SharedValue,
  StyleProps,
} from '../commonTypes';
import type { AnimatedStyle } from '../helperTypes';

export interface AnimatedStyleResult {
  mapperId: number;
  viewDescriptors: ViewDescriptorsSet;
  initial: AnimatedStyle<any>;
  viewsRef: ViewRefSet<any>;
  animatedStyle?: AnimatedStyle<any>;
}

interface AnimatedState {
  last: AnimatedStyle<any>;
  animations: AnimatedStyle<any>;
  isAnimationRunning: boolean;
  isAnimationCancelled: boolean;
}

interface AnimationRef {
  initial: {
    value: AnimatedStyle<any>;
    updater: () => AnimatedStyle<any>;
  };
  remoteState: AnimatedState;
  viewDescriptors: ViewDescriptorsSet;
}

function prepareAnimation(
  frameTimestamp: number,
  animatedProp: AnimatedStyle<any>,
  lastAnimation: AnimatedStyle<any>,
  lastValue: AnimatedStyle<any>
): void {
  'worklet';
  if (Array.isArray(animatedProp)) {
    animatedProp.forEach((prop, index) => {
      prepareAnimation(
        frameTimestamp,
        prop,
        lastAnimation && lastAnimation[index],
        lastValue && lastValue[index]
      );
    });
    // return animatedProp;
  }
  if (typeof animatedProp === 'object' && animatedProp.onFrame) {
    const animation = animatedProp;

    let value = animation.current;
    if (lastValue !== undefined) {
      if (typeof lastValue === 'object') {
        if (lastValue.value !== undefined) {
          // previously it was a shared value
          value = lastValue.value;
        } else if (lastValue.onFrame !== undefined) {
          if (lastAnimation?.current !== undefined) {
            // it was an animation before, copy its state
            value = lastAnimation.current;
          } else if (lastValue?.current !== undefined) {
            // it was initialized
            value = lastValue.current;
          }
        }
      } else {
        // previously it was a plain value, just set it as starting point
        value = lastValue;
      }
    }

    animation.callStart = (timestamp: number) => {
      animation.onStart(animation, value, timestamp, lastAnimation);
    };
    animation.callStart(frameTimestamp);
    animation.callStart = null;
  } else if (typeof animatedProp === 'object') {
    // it is an object
    Object.keys(animatedProp).forEach((key) =>
      prepareAnimation(
        frameTimestamp,
        animatedProp[key],
        lastAnimation && lastAnimation[key],
        lastValue && lastValue[key]
      )
    );
  }
}

function runAnimations(
  animation: AnimatedStyle<any>,
  timestamp: number,
  key: number | string,
  result: AnimatedStyle<any>,
  animationsActive: SharedValue<boolean>
): boolean {
  'worklet';
  if (!animationsActive.value) {
    return true;
  }
  if (Array.isArray(animation)) {
    result[key] = [];
    let allFinished = true;
    animation.forEach((entry, index) => {
      if (
        !runAnimations(entry, timestamp, index, result[key], animationsActive)
      ) {
        allFinished = false;
      }
    });
    return allFinished;
  } else if (typeof animation === 'object' && animation.onFrame) {
    let finished = true;
    if (!animation.finished) {
      if (animation.callStart) {
        animation.callStart(timestamp);
        animation.callStart = null;
      }
      finished = animation.onFrame(animation, timestamp);
      animation.timestamp = timestamp;
      if (finished) {
        animation.finished = true;
        animation.callback && animation.callback(true /* finished */);
      }
    }
    result[key] = animation.current;
    return finished;
  } else if (typeof animation === 'object') {
    result[key] = {};
    let allFinished = true;
    Object.keys(animation).forEach((k) => {
      if (
        !runAnimations(
          animation[k],
          timestamp,
          k,
          result[key],
          animationsActive
        )
      ) {
        allFinished = false;
      }
    });
    return allFinished;
  } else {
    result[key] = animation;
    return true;
  }
}

function styleUpdater(
  viewDescriptors: SharedValue<Descriptor[]>,
  updater: BasicWorkletFunction<AnimatedStyle<any>>,
  state: AnimatedState,
  maybeViewRef: ViewRefSet<any> | undefined,
  animationsActive: SharedValue<boolean>
): void {
  'worklet';
  const animations = state.animations ?? {};
  const newValues = updater() ?? {};
  const oldValues = state.last;
  const nonAnimatedNewValues: StyleProps = {};

  let hasAnimations = false;
  let frameTimestamp: number | undefined;
  let hasNonAnimatedValues = false;
  for (const key in newValues) {
    const value = newValues[key];
    if (isAnimated(value)) {
      frameTimestamp = global.__frameTimestamp || performance.now();
      prepareAnimation(frameTimestamp, value, animations[key], oldValues[key]);
      animations[key] = value;
      hasAnimations = true;
    } else {
      hasNonAnimatedValues = true;
      nonAnimatedNewValues[key] = value;
      delete animations[key];
    }
  }
  if (hasAnimations) {
    const frame = (timestamp: number) => {
      const { animations, last, isAnimationCancelled } = state;
      if (isAnimationCancelled) {
        state.isAnimationRunning = false;
        return;
      }

      const updates: AnimatedStyle<any> = {};
      let allFinished = true;
      for (const propName in animations) {
        const finished = runAnimations(
          animations[propName],
          timestamp,
          propName,
          updates,
          animationsActive
        );
        if (finished) {
          last[propName] = updates[propName];
          delete animations[propName];
        } else {
          allFinished = false;
        }
      }

      if (updates) {
        updateProps(viewDescriptors, updates, maybeViewRef);
      }

      if (!allFinished) {
        requestAnimationFrame(frame);
      } else {
        state.isAnimationRunning = false;
      }
    };

    state.animations = animations;
    if (!state.isAnimationRunning) {
      state.isAnimationCancelled = false;
      state.isAnimationRunning = true;
      frame(frameTimestamp!);
    }

    if (hasNonAnimatedValues) {
      updateProps(viewDescriptors, nonAnimatedNewValues, maybeViewRef);
    }
  } else {
    state.isAnimationCancelled = true;
    state.animations = [];

    if (!shallowEqual(oldValues, newValues)) {
      updateProps(viewDescriptors, newValues, maybeViewRef);
    }
  }
  state.last = newValues;
}

// check for invalid usage of shared values in returned object
function checkSharedValueUsage(
  prop: NestedObjectValues<AnimationObject>,
  currentKey?: string
): void {
  if (Array.isArray(prop)) {
    // if it's an array (i.ex. transform) validate all its elements
    for (const element of prop) {
      checkSharedValueUsage(element, currentKey);
    }
  } else if (
    typeof prop === 'object' &&
    prop !== null &&
    prop.value === undefined
  ) {
    // if it's a nested object, run validation for all its props
    for (const key of Object.keys(prop)) {
      checkSharedValueUsage(prop[key], key);
    }
  } else if (
    currentKey !== undefined &&
    typeof prop === 'object' &&
    prop !== null &&
    prop.value !== undefined
  ) {
    // if shared value is passed insted of its value, throw an error
    throw new Error(
      `invalid value passed to \`${currentKey}\`, maybe you forgot to use \`.value\`?`
    );
  }
}

type RegisteredStyle<T> = number & { __registeredStyleBrand: T };

// This type is kept for backward compatibility.
export type AnimatedStyleProp<T> =
  | AnimatedStyle<T>
  | RegisteredStyle<AnimatedStyle<T>>;

// TODO TYPESCRIPT This is a temporary type to get rid of .d.ts file.
type useAnimatedStyleType = <
  T extends AnimatedStyleProp<any>
>(
  updater: () => T,
  deps?: DependencyList | null
) => T;

export const useAnimatedStyle = function <T extends AnimatedStyle<any>>(
  // animated style cannot be an array
  updater: BasicWorkletFunction<T extends Array<unknown> ? never : T>,
  dependencies?: DependencyList,
  adapters?: AdapterWorkletFunction | AdapterWorkletFunction[]
): AnimatedStyleResult {
  const viewsRef: ViewRefSet<any> = makeViewsRefSet();
  let inputs = Object.values(updater._closure ?? {});
  const adaptersArray: AdapterWorkletFunction[] = adapters
    ? Array.isArray(adapters)
      ? adapters
      : [adapters]
    : [];
  const adaptersHash = adapters ? buildWorkletsHash(adaptersArray) : null;
  const animationsActive = useSharedValue<boolean>(true);
  // const animatedStyle: AnimatedStyle<any> = {};

  // build dependencies
  if (!dependencies) {
    dependencies = [...inputs, updater.__workletHash];
  } else {
    dependencies.push(updater.__workletHash);
  }
  adaptersHash && dependencies.push(adaptersHash);


  const initialStyle: AnimatedStyle<any> = initialUpdaterRun(updater);
  validateAnimatedStyles(initialStyle);
  let initRef = {
    initial: {
      value: initialStyle,
      updater: updater,
    },
    remoteState: makeRemote<AnimatedState>({
      last: initialStyle,
      animations: {},
      isAnimationCancelled: false,
      isAnimationRunning: false,
    }),
    viewDescriptors: makeViewDescriptorsSet(),
  };


  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const { initial, remoteState, viewDescriptors } = initRef;
  const sharableViewDescriptors = viewDescriptors.sharableViewDescriptors;
  const maybeViewRef = NativeReanimatedModule.native ? undefined : viewsRef;

  dependencies.push(sharableViewDescriptors);

    let fun;
    let updaterFn = updater as BasicWorkletFunctionOptional<T>;
    if (adapters) {
      updaterFn = () => {
        'worklet';
        const newValues = updater();
        adaptersArray.forEach((adapter) => {
          adapter(newValues);
        });
        return newValues;
      };
    }
    fun = () => {
      'worklet';
      styleUpdater(
        sharableViewDescriptors,
        updaterFn,
        remoteState,
        maybeViewRef,
        animationsActive
      );
    };
    const mapperId = startMapper(fun, inputs);
    //todo stopMapper

  // useEffect(() => {
  //   let fun;
  //   let updaterFn = updater as BasicWorkletFunctionOptional<T>;
  //   if (adapters) {
  //     updaterFn = () => {
  //       'worklet';
  //       const newValues = updater();
  //       adaptersArray.forEach((adapter) => {
  //         adapter(newValues);
  //       });
  //       return newValues;
  //     };
  //   }
  //   fun = () => {
  //     'worklet';
  //     styleUpdater(
  //       sharableViewDescriptors,
  //       updaterFn,
  //       remoteState,
  //       maybeViewRef,
  //       animationsActive
  //     );
  //   };
  //   const mapperId = startMapper(fun, inputs);
  //   return () => {
  //     stopMapper(mapperId);
  //   };
  // }, dependencies);

  animationsActive.value = true;

  checkSharedValueUsage(initial.value);

  return { mapperId, viewDescriptors, initial, viewsRef};

  // TODO TYPESCRIPT This temporary cast is to get rid of .d.ts file.
} as useAnimatedStyleType;
