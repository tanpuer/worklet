import { makeShareableCloneRecursive } from './shareables';
export declare const setupMicrotasks: {
    (): void;
    _closure: {};
    __initData: {
        code: string;
        location: string;
        sourceMap: string;
        version: string;
    };
    __workletHash: number;
    __stackDetails: (number | Error)[];
};
export declare const callMicrotasks: () => void;
export declare const runOnUI: {
    (worklet: any): (...args: any[]) => void;
    _closure: {
        __DEV__: boolean;
        IS_NATIVE: boolean;
        makeShareableCloneRecursive: typeof makeShareableCloneRecursive;
        setTimeout: typeof setTimeout;
        NativeReanimatedModule: import("./NativeReanimated/NativeReanimated").NativeReanimated;
        callMicrotasks: () => void;
    };
    __initData: {
        code: string;
        location: string;
        sourceMap: string;
        version: string;
    };
    __workletHash: number;
    __stackDetails: (number | Error)[];
};
export declare const runOnUIImmediately: {
    (worklet: any): (...args: any[]) => void;
    _closure: {
        __DEV__: boolean;
        IS_NATIVE: boolean;
        NativeReanimatedModule: import("./NativeReanimated/NativeReanimated").NativeReanimated;
        makeShareableCloneRecursive: typeof makeShareableCloneRecursive;
    };
    __initData: {
        code: string;
        location: string;
        sourceMap: string;
        version: string;
    };
    __workletHash: number;
    __stackDetails: (number | Error)[];
};
declare function runWorkletOnJS(worklet: any, ...args: any[]): void;
export declare const runOnJS: {
    (fun: any): any;
    _closure: {
        IS_NATIVE: boolean;
        runWorkletOnJS: typeof runWorkletOnJS;
        makeShareableCloneOnUIRecursive: {
            (value: any): any;
            _closure: {
                USE_STUB_IMPLEMENTATION: boolean;
            };
            __initData: {
                code: string;
                location: string;
                sourceMap: string;
                version: string;
            };
            __workletHash: number;
            __stackDetails: (number | Error)[];
        };
    };
    __initData: {
        code: string;
        location: string;
        sourceMap: string;
        version: string;
    };
    __workletHash: number;
    __stackDetails: (number | Error)[];
};
export {};
