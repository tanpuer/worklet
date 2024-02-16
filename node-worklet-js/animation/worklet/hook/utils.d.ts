import WorkletEventHandler from '../WorkletEventHandler';
export declare const useEvent: (handler: any, eventNames?: any[], rebuild?: boolean) => WorkletEventHandler;
export declare const useHandler: (handlers: any, dependencies: any) => {
    context: {};
    doDependenciesDiffer: boolean;
    useWeb: boolean;
};
export declare function buildWorkletsHash(handlers: any): unknown;
export declare const isAnimated: {
    (prop: any): boolean;
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
export declare const shallowEqual: {
    (a: any, b: any): boolean;
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
export declare const validateAnimatedStyles: {
    (styles: any): void;
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
