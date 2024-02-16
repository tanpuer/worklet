import NativeReanimatedModule from './NativeReanimated';
import { makeShareableCloneRecursive } from './shareables';

export { startMapper, stopMapper } from './mappers';
export { runOnJS, runOnUI } from './threads';
export { makeShareable } from './shareables';
export { makeMutable, makeRemote } from './mutables';

export type ReanimatedConsole = Pick<
  Console,
  'debug' | 'log' | 'warn' | 'info' | 'error'
>;

export function getViewProp<T>(viewTag: string, propName: string): Promise<T> {
  if (global._IS_FABRIC) {
    throw new Error(
      '[react-native-reanimated] `getViewProp` is not supported on Fabric yet'
    );
  }

  return new Promise((resolve, reject) => {
    return NativeReanimatedModule.getViewProp(
      viewTag,
      propName,
      (result: T) => {
        if (typeof result === 'string' && result.substr(0, 6) === 'error:') {
          reject(result);
        } else {
          resolve(result);
        }
      }
    );
  });
}

export function registerEventHandler<T>(
  eventHash: string,
  eventHandler: (event: T) => void
): number {
  function handleAndFlushAnimationFrame(eventTimestamp: number, event: T) {
    'worklet';
    global.__frameTimestamp = eventTimestamp;
    eventHandler(event);
    global.__flushAnimationFrame(eventTimestamp);
    global.__frameTimestamp = undefined;
  }
  return NativeReanimatedModule.registerEventHandler(
    eventHash,
    makeShareableCloneRecursive(handleAndFlushAnimationFrame)
  );
}

export function unregisterEventHandler(id: number): void {
  return NativeReanimatedModule.unregisterEventHandler(id);
}

export function configureProps(uiProps: string[], nativeProps: string[]): void {
  NativeReanimatedModule.configureProps(uiProps, nativeProps);
}
