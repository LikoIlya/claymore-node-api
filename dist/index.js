module.exports=function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=0)}([function(e,t,r){e.exports=r(1)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(2);Object.defineProperty(t,"getStats",{enumerable:!0,get:function(){return n.getStats}})},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getStats=void 0;var n=function(){function e(e,t){var r=[],n=!0,o=!1,u=void 0;try{for(var i,a=e[Symbol.iterator]();!(n=(i=a.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,u=e}finally{try{!n&&a.return&&a.return()}finally{if(o)throw u}}return r}return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),o=r(3),u=function(e){return e&&e.__esModule?e:{default:e}}(o),i=JSON.stringify({id:0,jsonrpc:"2.0",method:"miner_getstat1"})+"\n",a=function(e){return e.split(";").map(function(e){return(e/1e3).toFixed(3)})};t.getStats=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5e3;return new Promise(function(o,s){var c=(new u.default.Socket).on("connect",function(){c.write(i),c.setTimeout(r)}).on("timeout",function(){s("Claymore didnt answer within "+r+"ms."),c.destroy()}).on("data",function(e){var t=JSON.parse(e.toString().trim()),r=n(t,7);claymoreVersion=r[0],runningMinutes=r[1],totalHashrateSharesRejected=r[2],cardHashrates=r[3],cardTemperaturesFunSpeeds=r[6];var u=totalHashrateSharesRejected.split(";"),i=n(u,3),s=i[0],c=i[1],f=i[2],l=a(cardHashrates);o({claymoreVersion:claymoreVersion,runningMinutes:Number(runningMinutes),totalHashrate:s,shares:{successful:c,rejected:f},hashRates:l})}).on("error",function(e){s(e.message)});c.connect(t,e)})}},function(e,t){e.exports=require("net")}]);