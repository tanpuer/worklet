export declare function registerShareableMapping(shareable: any, shareableRef: any): void;
export declare function makeShareableCloneRecursive(value: any, shouldPersistRemote?: boolean, depth?: number): any;
export declare const makeShareableCloneOnUIRecursive: {
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
export declare function makeShareable(value: any): any;
