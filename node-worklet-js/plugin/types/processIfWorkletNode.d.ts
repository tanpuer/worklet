import type { NodePath } from '@babel/core';
import type { ExplicitWorklet, ReanimatedPluginPass } from './types';
export declare function processIfWorkletNode(fun: NodePath<ExplicitWorklet>, state: ReanimatedPluginPass): void;
