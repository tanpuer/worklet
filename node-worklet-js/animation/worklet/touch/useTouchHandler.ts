import type {Context, NativeEvent, WorkletFunction} from "../commonTypes";
import type WorkletEventHandler from "../WorkletEventHandler";
import type {DependencyList} from "../hook/commonTypes";
import {useEvent, useHandler} from "../hook/utils";

export interface TouchHandler<TContext extends Context>
    extends WorkletFunction {
    (event: any, context?: TContext): void;
}

export interface TouchEvent extends NativeEvent<TouchEvent> {
    eventName: string;
}

export interface TouchHandlers<TContext extends Context> {
    [key: string]: TouchHandler<TContext> | undefined;

    onTouchStart?: TouchHandler<TContext>;
    onTouchMove?: TouchHandler<TContext>;
    onTouchEnd?: TouchHandler<TContext>;
    onTouchCancel?: TouchHandler<TContext>;
}

type OnTouch = (event: any) => void;

export type useTouchHandler = <
    TContext extends Context = Record<string, never>
>(
    handlers: TouchHandlers<TContext> | TouchHandler<TContext>,
    deps?: DependencyList
) => OnTouch;

export const useTouchHandler = function <TContext extends Context>(
    handlers: TouchHandlers<TContext> | TouchHandler<TContext>,
    dependencies?: DependencyList
): WorkletEventHandler<TouchEvent> {
    const touchHandlers: TouchHandlers<TContext> =
        typeof handlers === "function" ? {onScroll: handlers} : handlers;
    const {context, doDependenciesDiffer} = useHandler<TouchEvent, TContext>(
        touchHandlers,
        dependencies
    );

    const subscribeForEvents = [];
    if (touchHandlers.onTouchStart !== undefined) {
        subscribeForEvents.push("onTouchStart");
    }
    if (touchHandlers.onTouchMove !== undefined) {
        subscribeForEvents.push("onTouchMove");
    }
    if (touchHandlers.onTouchEnd !== undefined) {
        subscribeForEvents.push("onTouchEnd");
    }
    if (touchHandlers.onTouchCancel !== undefined) {
        subscribeForEvents.push("onTouchCancel");
    }

    return useEvent<TouchEvent>(
        (event: TouchEvent) => {
            'worklet';
            const {
                onTouchStart,
                onTouchMove,
                onTouchEnd,
                onTouchCancel
            } = touchHandlers;
            if (onTouchStart && event.eventName.endsWith("touchstart")) {
                onTouchStart(event, context);
            } else if (onTouchMove && event.eventName.endsWith("touchmove")) {
                onTouchMove(event, context);
            } else if (onTouchEnd && event.eventName.endsWith("touchend")) {
                onTouchEnd(event, context);
            } else if (onTouchCancel && event.eventName.endsWith("touchcancel")) {
                onTouchCancel(event, context);
            }
        },
        subscribeForEvents,
        doDependenciesDiffer
    ) as unknown as WorkletEventHandler<TouchEvent>;
}
