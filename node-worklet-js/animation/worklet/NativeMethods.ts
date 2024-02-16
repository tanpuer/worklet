import type {MeasuredDimensions} from './commonTypes';

export let measure: (
    pageId: string, viewTag: number
) => MeasuredDimensions | null;
measure = (pageId: string, viewTag: number) => {
    'worklet';
    //@ts-ignore
    if (!_WORKLET) {
        return null;
    }
    if (viewTag === -1) {
        console.warn(
            `[Reanimated] The view with tag ${viewTag} is not a valid argument for measure(). This may be because the view is not currently rendered, which may not be a bug (e.g. an off-screen FlatList item).`
        );
        return null;
    }
    const measured = _measureFabric!({pageId: pageId, viewTag: viewTag});
    if (measured === null) {
        console.warn(
            `[Reanimated] The view with tag ${viewTag} has some undefined, not-yet-computed or meaningless value of \`LayoutMetrics\` type. This may be because the view is not currently rendered, which may not be a bug (e.g. an off-screen FlatList item).`
        );
        return null;
    } else if (measured.x === -1234567) {
        console.warn(
            `[Reanimated] The view with tag ${viewTag} returned an invalid measurement response.`
        );
        return null;
    } else if (isNaN(measured.x)) {
        console.warn(
            `[Reanimated] The view with tag ${viewTag} gets view-flattened on Android. To disable view-flattening, set \`collapsable={false}\` on this component.`
        );
        return null;
    } else {
        return measured;
    }
};

export let dispatchCommand: <T>(
    pageId: string,
    viewTag: number,
    commandName: string,
    args?: Array<unknown>
) => void;
dispatchCommand = (pageId, viewTag, commandName, args = []) => {
    'worklet';
    //@ts-ignore
    if (!_WORKLET) {
        return;
    }
    const shadowNodeWrapper = {pageId: pageId, viewTag: viewTag};
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    _dispatchCommandFabric!(shadowNodeWrapper, commandName, args);
};

export let scrollTo: <T>(
    pageId: string,
    viewTag: number,
    x: number,
    y: number,
    animated: boolean
) => void;

scrollTo = (pageId, viewTag, x, y, animated) => {
    'worklet';
    dispatchCommand(pageId, viewTag, 'scrollTo', [x, y, animated]);
};
