export declare class NativeReanimated {
    native: boolean;
    constructor();
    installCoreFunctions(callGuard: any, valueUnpacker: any): any;
    makeShareableClone(value: any, shouldPersistRemote: any): any;
    makeSynchronizedDataHolder(valueRef: any): any;
    getDataSynchronously(ref: any): any;
    scheduleOnUI(shareable: any): any;
    registerEventHandler(eventHash: any, eventHandler: any): any;
    unregisterEventHandler(id: any): any;
    getViewProp(viewTag: any, propName: any, callback: any): any;
    configureProps(uiProps: any, nativeProps: any): void;
}
