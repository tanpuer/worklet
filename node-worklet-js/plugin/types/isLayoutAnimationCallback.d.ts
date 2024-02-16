import type { NodePath } from '@babel/core';
import type { FunctionDeclaration, FunctionExpression, ArrowFunctionExpression } from '@babel/types';
export declare function isLayoutAnimationCallback(path: NodePath<FunctionDeclaration | FunctionExpression | ArrowFunctionExpression>): boolean;
