import type {Context, NativeEvent, WorkletFunction} from '../commonTypes';
import type WorkletEventHandler from '../WorkletEventHandler';
import type {DependencyList} from './commonTypes';
import {useEvent, useHandler} from "./utils";

export interface NativeScrollEvent {
    x: number,
    y: number
}

export interface ScrollHandler<TContext extends Context>
    extends WorkletFunction {
    (event: NativeScrollEvent, context?: TContext): void;
}

export interface ScrollEvent extends NativeScrollEvent, NativeEvent<ScrollEvent> {
    eventName: string;
}

export interface ScrollHandlers<TContext extends Context> {
    [key: string]: ScrollHandler<TContext> | undefined;

    onScroll?: ScrollHandler<TContext>;
    onBeginDrag?: ScrollHandler<TContext>;
    onEndDrag?: ScrollHandler<TContext>;
    onMomentumBegin?: ScrollHandler<TContext>;
    onMomentumEnd?: ScrollHandler<TContext>;
}

// TODO TYPESCRIPT This is a temporary type to get rid of .d.ts file.
type OnScroll = (event: NativeScrollEvent) => void;

// TODO TYPESCRIPT This is a temporary type to get rid of .d.ts file.
export type useAnimatedScrollHandler = <
    TContext extends Context = Record<string, never>
>(
    handlers: ScrollHandlers<TContext> | ScrollHandler<TContext>,
    deps?: DependencyList
) => OnScroll;

export const useAnimatedScrollHandler = function <TContext extends Context>(
    handlers: ScrollHandlers<TContext> | ScrollHandler<TContext>,
    dependencies?: DependencyList
): WorkletEventHandler<ScrollEvent> {
    // case when handlers is a function
    const scrollHandlers: ScrollHandlers<TContext> =
        typeof handlers === 'function' ? {onScroll: handlers} : handlers;
    const {context, doDependenciesDiffer} = useHandler<ScrollEvent, TContext>(
        scrollHandlers,
        dependencies
    );

    // build event subscription array
    const subscribeForEvents = ['onScroll'];
    if (scrollHandlers.onBeginDrag !== undefined) {
        subscribeForEvents.push('onScrollBeginDrag');
    }
    if (scrollHandlers.onEndDrag !== undefined) {
        subscribeForEvents.push('onScrollEndDrag');
    }
    if (scrollHandlers.onMomentumBegin !== undefined) {
        subscribeForEvents.push('onMomentumScrollBegin');
    }
    if (scrollHandlers.onMomentumEnd !== undefined) {
        subscribeForEvents.push('onMomentumScrollEnd');
    }

    return useEvent<ScrollEvent>(
        (event: ScrollEvent) => {
            'worklet';
            const {
                onScroll,
                onBeginDrag,
                onEndDrag,
                onMomentumBegin,
                onMomentumEnd,
            } = scrollHandlers;
            if (onScroll && event.eventName.endsWith('onScroll')) {
                onScroll(event, context);
            } else if (onBeginDrag && event.eventName.endsWith('onScrollBeginDrag')) {
                onBeginDrag(event, context);
            } else if (onEndDrag && event.eventName.endsWith('onScrollEndDrag')) {
                onEndDrag(event, context);
            } else if (
                onMomentumBegin &&
                event.eventName.endsWith('onMomentumScrollBegin')
            ) {
                onMomentumBegin(event, context);
            } else if (
                onMomentumEnd &&
                event.eventName.endsWith('onMomentumScrollEnd')
            ) {
                onMomentumEnd(event, context);
            }
        },
        subscribeForEvents,
        doDependenciesDiffer
        // TODO TYPESCRIPT This temporary cast is to get rid of .d.ts file.
    ) as any;
    // TODO TYPESCRIPT This temporary cast is to get rid of .d.ts file.
} as unknown as useAnimatedScrollHandler;
