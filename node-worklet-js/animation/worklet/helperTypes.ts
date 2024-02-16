/* eslint-disable @typescript-eslint/no-explicit-any */
/*
This file is a legacy remainder of manual types from react-native-reanimated.d.ts file.
I wasn't able to get rid of all of them from the code.
They should be treated as a temporary solution
until time comes to refactor the code and get necessary types right.
This will not be easy though!
*/

import type {AnimatableValue, SharedValue} from './commonTypes';

export type Adaptable<T> =
    | T
    | ReadonlyArray<T | ReadonlyArray<T>>
    | SharedValue<T>;

export type AdaptTransforms<T> = {
    [P in keyof T]: Adaptable<T[P]>;
};

type TransformsStyle = Pick<any, 'transform'>;

export type TransformStyleTypes = TransformsStyle['transform'] extends | readonly (infer T)[]
    | string
    | undefined
    ? T
    : never;
export type AnimatedTransform = AdaptTransforms<TransformStyleTypes>[];

export type ColorValue = null | string | number;

/**
 * @deprecated Please use `AnimatedStyle` type instead.
 */
export type AnimateStyle<S> = {
    [K in keyof S]: K extends 'transform'
        ? AnimatedTransform
        : S[K] extends ReadonlyArray<any>
            ? ReadonlyArray<AnimateStyle<S[K][0]>>
            : S[K] extends object
                ? AnimateStyle<S[K]>
                : S[K] extends ColorValue | undefined
                    ? S[K] | number
                    : S[K] | SharedValue<AnimatableValue>;
};

export type AnimatedStyle<S> = AnimateStyle<S>;

// provided types can either be their original types (like backgroundColor: pink)
// or inline shared values/derived values
type MaybeSharedValue<S> = {
    [K in keyof S]: S[K] | Readonly<SharedValue<Extract<S[K], AnimatableValue>>>;
};

export type StylesOrDefault<T> = 'style' extends keyof T
    ? MaybeSharedValue<T['style']>
    : Record<string, unknown>;

/*
  Style type properties (properties that extends StyleProp<ViewStyle>)
  can be defined with other property names than "style". For example `contentContainerStyle` in FlatList.
  Type definition for all style type properties should act similarly, hence we
  pick keys with 'Style' substring with the use of this utility type.
*/
type PickStyleProps<T> = Pick<
    T,
    {
        [Key in keyof T]-?: Key extends `${string}Style` ? Key : never;
    }[keyof T]
>;
