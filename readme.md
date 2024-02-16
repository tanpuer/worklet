## worklet_addon

worklet的介绍可参考react-native-reanimated和微信小程序worklet。

### 运行
1. cd node-worklet-js
2. npx babel animation --out-dir dist --extensions ".ts" --copy-files --no-copy-ignored
3. cd node-worklet/nodejs && npm compile && npm install && node-gyp rebuild --debug
5. node index.js

### C++
整体剥离RN代码，移植到其他具有js-ui双线程模型的UI框架中。
1. 使用nvm将nodejs版本切成v16.20.0。
2. 基于nodejs的v8环境运行，在主线程运行js，起一个子线程作为UI线程。
3. 之前已经将react-native-reanimated移植到AgilReact中，采取同样的方案，在渲染线程使用同一个v8
   isolate运行部分js代码，这是实现worklet的原理。
4. 基于worklet封装一些动画/手势模块。
5. 后续剥离jsi，直接调用v8接口完成即可。

### babel插件
   暂时未做修改，如果需要把reanimated属性集成到xml里，则修改插件。

### ts代码
   整体剥离RN和React依赖。
   比如useEffect钩子函数，DidMount/UnMount等声明周期里进行注册/反注册的逻辑得在实际接入ui框架的时候才能确定怎么处理。