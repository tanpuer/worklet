export declare function makeViewDescriptorsSet(): {
    sharableViewDescriptors: {
        value: any;
        _value: any;
        modify: (modifier: any) => void;
        addListener: (id: any, listener: any) => void;
        removeListener: (id: any) => void;
        _isReanimatedSharedValue: boolean;
    };
    add: (item: any) => void;
    remove: (viewTag: any) => void;
};
export declare function makeViewsRefSet(): {
    items: Set<unknown>;
    add: (item: any) => void;
    remove: (item: any) => void;
};
