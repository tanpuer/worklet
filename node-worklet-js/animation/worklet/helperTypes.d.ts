import type { AnimatableValue, SharedValue } from './commonTypes';
export type Adaptable<T> = T | ReadonlyArray<T | ReadonlyArray<T>> | SharedValue<T>;
export type AdaptTransforms<T> = {
    [P in keyof T]: Adaptable<T[P]>;
};
type TransformsStyle = Pick<any, 'transform'>;
export type TransformStyleTypes = TransformsStyle['transform'] extends readonly (infer T)[] | string | undefined ? T : never;
export type AnimatedTransform = AdaptTransforms<TransformStyleTypes>[];
export type ColorValue = null | string | number;
export type AnimateStyle<S> = {
    [K in keyof S]: K extends 'transform' ? AnimatedTransform : S[K] extends ReadonlyArray<any> ? ReadonlyArray<AnimateStyle<S[K][0]>> : S[K] extends object ? AnimateStyle<S[K]> : S[K] extends ColorValue | undefined ? S[K] | number : S[K] | SharedValue<AnimatableValue>;
};
export type AnimatedStyle<S> = AnimateStyle<S>;
type MaybeSharedValue<S> = {
    [K in keyof S]: S[K] | Readonly<SharedValue<Extract<S[K], AnimatableValue>>>;
};
export type StylesOrDefault<T> = 'style' extends keyof T ? MaybeSharedValue<T['style']> : Record<string, unknown>;
export {};
