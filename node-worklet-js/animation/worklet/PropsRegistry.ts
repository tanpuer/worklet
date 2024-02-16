import { runOnUI } from './threads';

let viewTags: number[] = [];

export function removeFromPropsRegistry(viewTag: number) {
  viewTags.push(viewTag);
  if (viewTags.length === 1) {
    queueMicrotask(flush);
  }
}

function flush() {
  runOnUI(removeFromPropsRegistryOnUI)(viewTags);
  viewTags = [];
}

function removeFromPropsRegistryOnUI(viewTags: number[]) {
  'worklet';
  _removeFromPropsRegistry(viewTags);
}
