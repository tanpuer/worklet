//@ts-ignore
import type { Context } from '../commonTypes';

export type DependencyList = Array<unknown> | undefined;

export interface ContextWithDependencies<TContext extends Context> {
  context: TContext;
  savedDependencies: DependencyList;
}

export interface Descriptor {
  pageId: number;
  tag: number;
  name: string;
  shadowNodeWrapper: object;
}

export interface AnimatedRef<T extends number> {
  current: T | null;
  (component?: T):
    | number // Paper
    | object // Fabric
    | HTMLElement; // web
}
