import type {
  Context,
  NativeEvent,
  NestedObjectValues,
  WorkletFunction,
  AnimationObject,
} from '../commonTypes';
import type { AnimatedStyle } from '../helperTypes';
import { makeRemote } from '../core';
import WorkletEventHandler from '../WorkletEventHandler';
import type { ContextWithDependencies, DependencyList } from './commonTypes';
interface Handler<T, TContext extends Context> extends WorkletFunction {
  (event: T, context: TContext): void;
}

interface Handlers<T, TContext extends Context> {
  [key: string]: Handler<T, TContext> | undefined;
}

interface UseHandlerContext<TContext extends Context> {
  context: TContext;
  doDependenciesDiffer: boolean;
  useWeb: boolean;
}

// TODO TYPESCRIPT This is a temporary type to get rid of .d.ts file.
type useEventType = <T extends object>(
  handler: (e: T) => void,
  eventNames?: string[],
  rebuild?: boolean
) => (e: any) => void;

export const useEvent = function <T extends NativeEvent<T>>(
  handler: (event: T) => void,
  eventNames: string[] = [],
  rebuild = false
): WorkletEventHandler<T> {
  const initRef = new WorkletEventHandler(handler, eventNames);
  if (rebuild) {
    initRef.updateWorklet(handler);
  }

  return initRef;
  // TODO TYPESCRIPT This cast is to get rid of .d.ts file.
} as unknown as useEventType;

// TODO TYPESCRIPT This is a temporary type to get rid of .d.ts file.
type useHandlerType = <T, TContext extends Context = Record<string, never>>(
  handlers: Handlers<T, TContext>,
  deps?: DependencyList
) => { context: TContext; doDependenciesDiffer: boolean; useWeb: boolean };

export const useHandler = function <T, TContext extends Context>(
  handlers: Handlers<T, TContext>,
  dependencies?: DependencyList
): UseHandlerContext<TContext> {
  const initRef = {
    //@ts-ignore
    context: makeRemote<TContext>({} as TContext),
    savedDependencies: [],
  };

  const { context, savedDependencies } = initRef;

  dependencies = buildDependencies(dependencies, handlers);

  const doDependenciesDiffer = !areDependenciesEqual(
    dependencies,
    savedDependencies
  );
  initRef.savedDependencies = dependencies;
  const useWeb = false;

  //@ts-ignore
  return { context, doDependenciesDiffer, useWeb };
  // TODO TYPESCRIPT This temporary cast is to get rid of .d.ts file.
} as useHandlerType;

// builds one big hash from multiple worklets' hashes
export function buildWorkletsHash(
  handlers: Record<string, WorkletFunction> | Array<WorkletFunction>
): string {
  return Object.values(handlers).reduce(
    (acc: string, worklet: WorkletFunction) =>
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      acc + worklet.__workletHash!.toString(),
    ''
  );
}

// builds dependencies array for gesture handlers
function buildDependencies(
  dependencies: DependencyList,
  handlers: Record<string, WorkletFunction | undefined>
): Array<unknown> {
  const handlersList: WorkletFunction[] = Object.values(handlers).filter(
    (handler) => handler !== undefined
  ) as WorkletFunction[];
  if (!dependencies) {
    dependencies = handlersList.map((handler) => {
      return {
        workletHash: handler.__workletHash,
        closure: handler._closure,
      };
    });
  } else {
    dependencies.push(buildWorkletsHash(handlersList));
  }

  return dependencies;
}

// this is supposed to work as useEffect comparison
function areDependenciesEqual(
  nextDeps: DependencyList,
  prevDeps: DependencyList
): boolean {
  function is(x: number, y: number) {
    /* eslint-disable no-self-compare */
    return (x === y && (x !== 0 || 1 / x === 1 / y)) || (x !== x && y !== y);
    /* eslint-enable no-self-compare */
  }
  const objectIs: (nextDeps: unknown, prevDeps: unknown) => boolean =
    typeof Object.is === 'function' ? Object.is : is;

  function areHookInputsEqual(
    nextDeps: DependencyList,
    prevDeps: DependencyList
  ): boolean {
    if (!nextDeps || !prevDeps || prevDeps.length !== nextDeps.length) {
      return false;
    }
    for (let i = 0; i < prevDeps.length; ++i) {
      if (!objectIs(nextDeps[i], prevDeps[i])) {
        return false;
      }
    }
    return true;
  }

  return areHookInputsEqual(nextDeps, prevDeps);
}

export function isAnimated(prop: NestedObjectValues<AnimationObject>): boolean {
  'worklet';
  if (Array.isArray(prop)) {
    return prop.some(isAnimated);
  } else if (typeof prop === 'object' && prop !== null) {
    if (prop.onFrame !== undefined) {
      return true;
    } else {
      return Object.values(prop).some(isAnimated);
    }
  }
  return false;
}

export function shallowEqual(a: any, b: any) {
  'worklet';
  const aKeys = Object.keys(a);
  const bKeys = Object.keys(b);
  if (aKeys.length !== bKeys.length) {
    return false;
  }
  for (let i = 0; i < aKeys.length; i++) {
    if (a[aKeys[i]] !== b[aKeys[i]]) {
      return false;
    }
  }
  return true;
}

export const validateAnimatedStyles = (styles: AnimatedStyle<any>): void => {
  'worklet';
  if (typeof styles !== 'object') {
    throw new Error(
      `useAnimatedStyle has to return an object, found ${typeof styles} instead`
    );
  } else if (Array.isArray(styles)) {
    throw new Error(
      'useAnimatedStyle has to return an object and cannot return static styles combined with dynamic ones. Please do merging where a component receives props.'
    );
  }
};
