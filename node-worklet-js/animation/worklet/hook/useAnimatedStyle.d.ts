export declare const useAnimatedStyle: (updater: any, dependencies: any, adapters: any) => {
    mapperId: number;
    viewDescriptors: {
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
    initial: {
        value: any;
        updater: any;
    };
    viewsRef: {
        items: Set<unknown>;
        add: (item: any) => void;
        remove: (item: any) => void;
    };
};
