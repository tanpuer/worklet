export declare const makeUIMutable: {
    (initial: any, syncDataHolder: any): {
        value: any;
        _value: any;
        addListener: (id: any, listener: any) => void;
        removeListener: (id: any) => void;
        _animation: any;
        _isReanimatedSharedValue: boolean;
    };
    _closure: {
        valueSetter: {
            (sv: any, value: any): void;
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
export declare function makeMutable(initial: any, oneWayReadsOnly?: boolean): {
    value: any;
    _value: any;
    modify: (modifier: any) => void;
    addListener: (id: any, listener: any) => void;
    removeListener: (id: any) => void;
    _isReanimatedSharedValue: boolean;
};
export declare function makeRemote(initial?: {}): {};
