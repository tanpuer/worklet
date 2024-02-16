export { startMapper, stopMapper } from './mappers';
export { runOnJS, runOnUI } from './threads';
export { makeShareable } from './shareables';
export { makeMutable, makeRemote } from './mutables';
export declare const isReanimated3: () => boolean;
export declare const isConfigured: () => boolean;
export declare function getViewProp(viewTag: any, propName: any): Promise<unknown>;
export declare function registerEventHandler(eventHash: any, eventHandler: any): any;
export declare function unregisterEventHandler(id: any): any;
export declare function configureProps(uiProps: any, nativeProps: any): void;
