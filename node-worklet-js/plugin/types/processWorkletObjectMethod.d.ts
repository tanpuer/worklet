import type { NodePath } from '@babel/core';
import type { ObjectMethod } from '@babel/types';
import type { ReanimatedPluginPass } from './types';
export declare function processWorkletObjectMethod(path: NodePath<ObjectMethod>, state: ReanimatedPluginPass): void;
