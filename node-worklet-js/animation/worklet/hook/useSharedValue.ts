import type { SharedValue } from '../commonTypes';
import { makeMutable } from '../mutables';

export function useSharedValue<T>(
  init: T,
  oneWayReadsOnly = false
): SharedValue<T> {

   let current = makeMutable(init, oneWayReadsOnly);

    // cancelAnimation(current);

  /**
   * Todo 组件清理的时候调用cancelAnimation
   */
  // useEffect(() => {
  //   return () => {
  //     // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  //     cancelAnimation(current);
  //   };
  // }, []);

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return current;
}
