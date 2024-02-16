import { processColor } from './Colors';
import type { ShadowNodeWrapper, SharedValue, StyleProps } from './commonTypes';
import type { AnimatedStyle } from './helperTypes';
import { makeShareable } from './core';
import type { Descriptor } from './hook/commonTypes';
import type { ViewRefSet } from './ViewDescriptorsSet';
import { runOnUIImmediately } from './threads';

// copied from react-native/Libraries/Components/View/ReactNativeStyleAttributes
const colorProps = [
  'backgroundColor',
  'borderBottomColor',
  'borderColor',
  'borderLeftColor',
  'borderRightColor',
  'borderTopColor',
  'borderStartColor',
  'borderEndColor',
  'color',
  'shadowColor',
  'textDecorationColor',
  'tintColor',
  'textShadowColor',
  'overlayColor',
];

export const ColorProperties = makeShareable(colorProps);

let updateProps: (
  viewDescriptor: SharedValue<Descriptor[]>,
  updates: StyleProps | AnimatedStyle<any>,
  maybeViewRef: ViewRefSet<any> | undefined
) => void;


updateProps = (viewDescriptors, updates) => {
  'worklet';
  // for (const key in updates) {
  //   if (ColorProperties.indexOf(key) !== -1) {
  //     updates[key] = processColor(updates[key]);
  //   }
  // }
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  global.UpdatePropsManager!.update(viewDescriptors, updates);
};

export default updateProps;

const createUpdatePropsManager =  () =>
{
  'worklet';
  // Fabric
  const operations: {
    pageId: number;
    tag: number;
    shadowNodeWrapper: ShadowNodeWrapper;
    updates: StyleProps | AnimatedStyle<any>;
  }[] = [];
  return {
    update(
      viewDescriptors: SharedValue<Descriptor[]>,
      updates: StyleProps | AnimatedStyle<any>
    ) {
      viewDescriptors.value.forEach((viewDescriptor) => {
        console.log("updates is ", updates);
        operations.push({
          pageId: viewDescriptor.pageId,
          tag: viewDescriptor.tag,
          shadowNodeWrapper: viewDescriptor.shadowNodeWrapper,
          updates,
        });
        if (operations.length === 1) {
          queueMicrotask(this.flush);
        }
      });
    },
    flush() {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      _updatePropsFabric!(operations);
      operations.length = 0;
    },
  };
}

runOnUIImmediately(() => {
  'worklet';
  global.UpdatePropsManager = createUpdatePropsManager();
})();

export interface UpdatePropsManager {
  update(
    viewDescriptors: SharedValue<Descriptor[]>,
    updates: StyleProps | AnimatedStyle<any>
  ): void;
  flush(): void;
}
