export type ShareableRef<T> = {
  __hostObjectShareableJSRef: T;
};

export type ShareableSyncDataHolderRef<T> = {
  __hostObjectShareableJSRefSyncDataHolder: T;
};

// this is the type of `__reanimatedModuleProxy` which is injected using JSI
export interface NativeReanimatedModule {
  installCoreFunctions(
    callGuard: <T extends Array<unknown>, U>(
      fn: (...args: T) => U,
      ...args: T
    ) => void,
    valueUnpacker: <T>(value: T) => T
  ): void;
  makeShareableClone<T>(
    value: T,
    shouldPersistRemote: boolean
  ): ShareableRef<T>;
  makeSynchronizedDataHolder<T>(
    valueRef: ShareableRef<T>
  ): ShareableSyncDataHolderRef<T>;
  getDataSynchronously<T>(ref: ShareableSyncDataHolderRef<T>): T;
  scheduleOnUI<T>(shareable: ShareableRef<T>): void;
  registerEventHandler<T>(
    eventHash: string,
    eventHandler: ShareableRef<T>
  ): number;
  unregisterEventHandler(id: number): void;
  getViewProp<T>(
    viewTag: string,
    propName: string,
    callback?: (result: T) => void
  ): Promise<T>;
  configureProps(uiProps: string[], nativeProps: string[]): void;
}

export class NativeReanimated {
  native = true;
  //@ts-ignore
  private InnerNativeModule: NativeReanimatedModule;

  constructor() {
    //Todo Caf3
    // @ts-ignore
    if (global.__reanimatedModuleProxy === undefined) {
      throw new Error(
        `[Reanimated] The native part of Reanimated doesn't seem to be initialized. This could be caused by\n\
- not rebuilding the app after installing or upgrading Reanimated\n\
- trying to run Reanimated on an unsupported platform\n\
- running in a brownfield app without manually initializing the native library`
      );
    }
    //@ts-ignore
    this.InnerNativeModule = global.__reanimatedModuleProxy;
  }

  installCoreFunctions(
    callGuard: <T extends Array<unknown>, U>(
      fn: (...args: T) => U,
      ...args: T
    ) => void,
    valueUnpacker: <T>(value: T) => T
  ) {
    //@ts-ignore
    return this.InnerNativeModule.installCoreFunctions(
      callGuard,
      valueUnpacker
    );
  }

  makeShareableClone<T>(value: T, shouldPersistRemote: boolean) {
    //@ts-ignore
    return this.InnerNativeModule.makeShareableClone(
      value,
      shouldPersistRemote
    );
  }

  makeSynchronizedDataHolder<T>(valueRef: ShareableRef<T>) {
    //@ts-ignore
    return this.InnerNativeModule.makeSynchronizedDataHolder(valueRef);
  }

  getDataSynchronously<T>(ref: ShareableSyncDataHolderRef<T>) {
    //@ts-ignore
    return this.InnerNativeModule.getDataSynchronously(ref);
  }

  scheduleOnUI<T>(shareable: ShareableRef<T>) {
    //@ts-ignore
    return this.InnerNativeModule.scheduleOnUI(shareable);
  }

  registerEventHandler<T>(eventHash: string, eventHandler: ShareableRef<T>) {
    //@ts-ignore
    return this.InnerNativeModule.registerEventHandler(eventHash, eventHandler);
  }

  unregisterEventHandler(id: number) {
    //@ts-ignore
    return this.InnerNativeModule.unregisterEventHandler(id);
  }

  getViewProp<T>(
    viewTag: string,
    propName: string,
    callback?: (result: T) => void
  ) {
    //@ts-ignore
    return this.InnerNativeModule.getViewProp(viewTag, propName, callback);
  }

  configureProps(uiProps: string[], nativeProps: string[]) {
    //@ts-ignore
    this.InnerNativeModule.configureProps(uiProps, nativeProps);
  }
}
