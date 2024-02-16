export default class WorkletEventHandler {
    constructor(worklet: any, eventNames?: any[]);
    updateWorklet(newWorklet: any): void;
    registerForEvents(viewTag: any, fallbackEventName: any): void;
    registerForEventByName(eventName: any): void;
    unregisterFromEvents(): void;
}
