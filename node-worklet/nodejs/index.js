const fetch = require('node-fetch');
const addon = require("./build/Debug/worklet.node");
let result = addon.init();


console.log("addon init =", result);
console.log(global._WORKLET_RUNTIME);
console.log(global._REANIMATED_VERSION_CPP);
console.log(__reanimatedModuleProxy);
console.log(__reanimatedModuleProxy.makeShareableClone);
console.log(__reanimatedModuleProxy.scheduleOnUI);
console.log(__reanimatedModuleProxy.registerEventHandler);
console.log(__reanimatedModuleProxy.getViewProp);

global.__DEV__ = true;
require("../../node-worklet-js/dist/index");