import type { ScrollEvent } from './useAnimatedScrollHandler';
import type { SharedValue } from '../commonTypes';
import { useEvent } from './utils';
import { useSharedValue } from './useSharedValue';

const scrollEventNames = [
  'onScroll',
  'onScrollBeginDrag',
  'onScrollEndDrag',
  'onMomentumScrollBegin',
  'onMomentumScrollEnd',
];

export function useScrollViewOffset(
  tag: number,
  initialRef?: SharedValue<number>
): SharedValue<number> {
  const offsetRef = initialRef !== undefined ? initialRef : useSharedValue(0);

  const event = useEvent<ScrollEvent>((event: ScrollEvent) => {
    'worklet';
    offsetRef.value =
      event.x === 0
        ? event.y
        : event.x;
  }, scrollEventNames);

  // @ts-ignore
  event.registerForEvents(tag);

  //Todo 注意处理unRegisterForEvents
  // useEffect(() => {
  //   const viewTag = findNodeHandle(aref.current);
  //   // @ts-ignore TODO TYPESCRIPT This happens because of
  //   // how we had to type `useEvent` to get rid of .d.ts file.
  //   event.current?.registerForEvents(viewTag as number);
  // }, [aref.current]);

  return offsetRef;
}
