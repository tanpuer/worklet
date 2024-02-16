export declare function useSharedValue(init: any, oneWayReadsOnly?: boolean): {
    value: any;
    _value: any;
    modify: (modifier: any) => void;
    addListener: (id: any, listener: any) => void;
    removeListener: (id: any) => void;
    _isReanimatedSharedValue: boolean;
};
