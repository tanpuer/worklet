import "./worklet/worklet_"
import {runOnUI, runOnJS} from "./worklet/threads";

const funcOnjs = (greeting) => {
  console.log(`${greeting} from the JS thread`);
}

runOnUI((greeting) => {
  console.log(`${greeting} from the UI thread`);
  requestAnimationFrame(() => {
    console.log("123");
  })
  runOnJS(funcOnjs)(greeting);
})('Howdy');

import {cancelAnimation, withTiming, withSpring} from './worklet/animation/index'
import {withRepeat} from './worklet/animation/index'
import {Easing} from "./worklet/Easing"
import {useSharedValue} from "./worklet/hook/useSharedValue"
import {useAnimatedStyle} from "./worklet/hook/useAnimatedStyle"
import WorkletEventHandler from "./worklet/WorkletEventHandler"
import {useEvent} from "./worklet/hook/utils";
import {stopMapper} from "./worklet/mappers";
import {useTouchHandler} from "./worklet/touch/useTouchHandler";
import {useAnimatedReaction} from "./worklet/hook/useAnimatedReaction";
import {dispatchCommand, measure} from "./worklet/NativeMethods";
import {interpolateColor} from "./worklet/interpolateColor";

const sv = useSharedValue(100);
const duration = 2000;
const easing = Easing.bezier(0.25, -0.5, 0.25, 1);

sv.value = withRepeat(withTiming(500, {duration, easing}), -1, false, (finished, current) => {
  console.log(`finished = ${finished}, current = ${current}`);
  dispatchCommand("1", 1, "click");
});

const animatedStyle = useAnimatedStyle(() => ({
  width: sv.value,
  height: sv.value,
  backgroundColor: interpolateColor(
      sv.value,
      [100, 500],
      ['#38ACDD', '#FF0000'],
      "RGB"
  ),
  borderRadius: sv.value / 10,
}));
let viewDescriptor = {pageId: "1", tag: 45, name: "view", shadowNodeWrapper: {}}
animatedStyle.viewDescriptors.add(viewDescriptor);

const animatedStyle2 = useAnimatedStyle(() => ({
  fontSize: sv.value / 10,
  value: `${Math.floor(sv.value)}`
}));
let viewDescriptor2 = {pageId: "1", tag: 44, name: "text", shadowNodeWrapper: {}}
animatedStyle2.viewDescriptors.add(viewDescriptor2);


function setText(measuredWidth) {
  console.log(`global.__measuredWidth = ${measuredWidth}`);
  // global.__measuredWidth = measuredWidth;
  global.__measuredWidth && global.__measuredWidth(measuredWidth);
}
useAnimatedReaction(
    () => sv.value,
    () => {
      const measurement = measure("1", 47);
      console.log(`measurement.width is ${measurement.width}`);
      if (measurement !== null) {
        runOnJS(setText)(measurement.width);
      }
    }
);

//Todo 组件卸载还需要清理，RN用useEffect来进行处理的，这是个麻烦的点
// stopMapper(animatedStyle.mapperId);
//cancelAnimation(sv);

let handler = useTouchHandler({
  onTouchMove: (event, ctx) => {
    "worklet";
    console.log("useTouchHandler onTouchMove ", event);
  },
});
handler.registerForEvents(1);
//Todo 在_attachNativeEvents里调用registerForEvents，在_detachNativeEvents里调用unRegisterForEvents


setInterval(() => {
  // console.log("over");
  console.log("sv.value =", sv.value);
  console.log("animatedStyle =", animatedStyle.viewDescriptors.sharableViewDescriptors.value);
}, 30);
