import type { AnimatedStyle } from './helperTypes';

export interface HigherOrderAnimation {
  isHigherOrder?: boolean;
}

export interface StyleProps {
  originX?: number;
  originY?: number;
  [key: string]: any;
}

export interface SharedValue<T> {
  value: T;
  addListener: (listenerID: number, listener: (value: T) => void) => void;
  removeListener: (listenerID: number) => void;
  modify: (modifier: (value: T) => T) => void;
}

// The below type is used for HostObjects returned by the JSI API that don't have
// any accessible fields or methods but can carry data that is accessed from the
// c++ side. We add a field to the type to make it possible for typescript to recognize
// which JSI methods accept those types as arguments and to be able to correctly type
// check other methods that may use them. However, this field is not actually defined
// nor should be used for anything else as assigning any data to those objects will
// throw an error.
export type ShareableRef<T> = {
  __hostObjectShareableJSRef: T;
};

export type ShareableSyncDataHolderRef<T> = {
  __hostObjectShareableJSRefSyncDataHolder: T;
};

export type MapperRegistry = {
  start: (
    mapperID: number,
    worklet: () => void,
    inputs: SharedValue<any>[],
    outputs?: SharedValue<any>[]
  ) => void;
  stop: (mapperID: number) => void;
};

export type Context = Record<string, unknown>;

export interface WorkletFunction {
  _closure?: Context;
  __workletHash?: number;
}

export interface BasicWorkletFunction<T> extends WorkletFunction {
  (): T;
}

export interface BasicWorkletFunctionOptional<T> extends WorkletFunction {
  (): Partial<T>;
}

export interface NativeEvent<T> {
  nativeEvent: T;
}
export interface ComplexWorkletFunction<A extends any[], R>
  extends WorkletFunction {
  (...args: A): R;
  __remoteFunction?: (...args: A) => R;
}

export interface NestedObject<T> {
  [key: string]: NestedObjectValues<T>;
}

export type NestedObjectValues<T> =
  | T
  | Array<NestedObjectValues<T>>
  | NestedObject<T>;

export interface AdapterWorkletFunction extends WorkletFunction {
  (value: NestedObject<string | number | AnimationObject>): void;
}

type Animatable = number | string | Array<number>;

export type AnimatableValueObject = { [key: string]: Animatable };

export type AnimatableValue = Animatable | AnimatableValueObject;

export interface AnimationObject {
  [key: string]: any;
  callback?: AnimationCallback;
  current?: AnimatableValue;
  toValue?: AnimationObject['current'];
  startValue?: AnimationObject['current'];
  finished?: boolean;
  strippedCurrent?: number;
  cancelled?: boolean;

  __prefix?: string;
  __suffix?: string;
  onFrame: (animation: any, timestamp: number) => boolean;
  onStart: (
    nextAnimation: any,
    current: any,
    timestamp: number,
    previousAnimation: any
  ) => void;
}

export interface Animation<T extends AnimationObject> extends AnimationObject {
  onFrame: (animation: T, timestamp: number) => boolean;
  onStart: (
    nextAnimation: T,
    current: AnimatableValue,
    timestamp: number,
    previousAnimation: Animation<any> | null | T
  ) => void;
}

export interface NumericAnimation {
  current?: number;
}

export type AnimationCallback = (
  finished?: boolean,
  current?: AnimatableValue
) => void;

export type ShadowNodeWrapper = object;

export interface MeasuredDimensions {
  x: number;
  y: number;
  width: number;
  height: number;
  pageX: number;
  pageY: number;
}

export interface StyleLayoutAnimation extends HigherOrderAnimation {
  current: StyleProps;
  styleAnimations: AnimatedStyle<any>;
  onFrame: (animation: StyleLayoutAnimation, timestamp: number) => boolean;
  onStart: (
      nextAnimation: StyleLayoutAnimation,
      current: AnimatedStyle<any>,
      timestamp: number,
      previousAnimation: StyleLayoutAnimation
  ) => void;
  callback?: AnimationCallback;
}
