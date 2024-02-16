import type { NodePath } from '@babel/core';
import type { CallExpression } from '@babel/types';
import type { ReanimatedPluginPass } from './types';
export declare function processForCalleesWorklets(path: NodePath<CallExpression>, state: ReanimatedPluginPass): void;
