(window.wpJsonpTemplateSections=window.wpJsonpTemplateSections||[]).push([[11],{135:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"e",(function(){return u})),n.d(e,"d",(function(){return c})),n.d(e,"c",(function(){return s})),n.d(e,"b",(function(){return l}));n(0),n(6);var r=n(5);function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=t[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var a=function(t){if(!t)return 1;if(!t.dataset.imageDimensions)return 1;var e=t.dataset.imageDimensions.split("x");return e[0]&&e[1]?+e[0]/+e[1]:void 0},u=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:20,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20;if(t<=e)return t;var n=window.innerWidth;return n<=r.g.sm?Math.max(e,Math.round(.25*t)):n<=r.g.md?Math.max(e,Math.round(.5*t)):n<=r.g.lg?Math.max(e,Math.round(.75*t)):t},c=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=window.innerWidth,n=Math.max(1,t);return e<=r.g.sm?t>1?2:1:e<=r.g.md?Math.ceil(.5*n):e<=r.g.lg?Math.ceil(.75*n):n},s=function(t){var e={width:0,height:0};if(!t)return e;if(!t.dataset.imageDimensions)return e;var n=o(t.dataset.imageDimensions.split("x"),2),r=n[0],i=n[1];return r&&i?{width:+r,height:+i}:e},l=function(t){var e={x:.5,y:.5};if(!t)return e;if(!t.dataset.imageFocalPoint)return e;var n=o(t.dataset.imageFocalPoint.split(","),2),r=n[0],i=n[1];return r&&i?{x:+r,y:+i}:e}},159:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));n(0);var r=Array.prototype.slice,o=function(){var t=r.call(arguments);return function(){for(var e=r.call(arguments),n=t.length-1;n>=0;n--)e=[t[n].apply(this,e)];return e[0]}},i=[],a={executeCallbacks:function(){i.forEach((function(t){return t()}))},trigger:function(){this.executeCallbacks()},registerCallback:function(t){t&&i.push(t)},removeCallback:function(t){if(t){var e=i.indexOf(t);e>-1&&i.splice(e,1)}},on:function(t){this.registerCallback(t)},off:function(t){this.removeCallback(t)}};window.history&&window.history.pushState&&(history.change=a,history.pushState=o((function(){return history.change.trigger()}),history.pushState),history.replaceState=o((function(){return history.change.trigger()}),history.replaceState),window.addEventListener("popstate",(function(){history.change.trigger()})));var u=function(){return window.history&&window.history.pushState?history:null}},161:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return i}));n(0);function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var o=function(t,e){return Object.keys(e).forEach((function(n){t.style[n]=e[n]})),t},i=function(t){return"object"===r(t)&&null!==t&&1===t.nodeType}},170:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"d",(function(){return a}));var r=function(t,e,n){return t*(1-n)+e*n},o=function(t,e){var n;for(n=1;n<e.length-1&&!(e[n]>=t);++n);return n-1},i=function(t,e,n){var r=o(n,t),i=t[r],a=t[r+1],u=e[r];return(n-i)/(a-i)*(e[r+1]-u)+u},a=function(t,e,n,r){var o=e[t],i=e[t+1],a=n[t],u=n[t+1],c=(r-o)/(i-o);return 1===n.length?a:c*(u-a)+a}},202:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var r=n(2),o=n(170),i=n(38);function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=p(t);if(e){var o=p(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return l(this,n)}}function l(t,e){return!e||"object"!==a(e)&&"function"!=typeof e?f(t):e}function f(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var d=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&c(t,e)}(a,t);var e,n,r,i=s(a);function a(t){var e;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),h(f(e=i.call(this,t)),"tick",(function(){var t=e.props,n=t.ease,r=t.from,i=t.to,a=t.duration,u=t.onUpdate,c=t.onComplete,s=Date.now()-e.lastUpdate;e.lastUpdate+=s,e.time=(e.lastUpdate-e.startTime)/1e3,e.time>a&&(e.time=a),u(Object(o.b)(r,i,n(e.time/a))),e.time>=a?c(i):requestAnimationFrame(e.tick)}));var n=e.props.autoStart;return e.state={isActive:!1},e.startTime=null,e.lastUpdate=null,e.frame=null,n&&e.start(),e}return e=a,(n=[{key:"start",value:function(){this.state.isActive||(this.setState({isActive:!0}),this.startTime=Date.now(),this.lastUpdate=this.startTime,this.frame=requestAnimationFrame(this.tick))}},{key:"destroy",value:function(){cancelAnimationFrame(this.frame)}}])&&u(e.prototype,n),r&&u(e,r),a}(r.a);h(d,"defaultProps",{autoStart:!0,ease:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;return-n*(t/=r)*(t-2)+e},duration:1,from:0,to:0,onUpdate:i.a,onComplete:i.a})},214:function(t,e,n){"use strict";n.d(e,"a",(function(){return y}));n(0);var r=n(2),o=n(36),i=n(38);function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function l(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=h(t);if(e){var o=h(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return f(this,n)}}function f(t,e){return!e||"object"!==a(e)&&"function"!=typeof e?p(t):e}function p(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function h(t){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function d(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var y=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}(a,t);var e,n,r,i=l(a);function a(t){var e;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),d(p(e=i.call(this,t)),"onPress",(function(t){t.stopPropagation(),"number"==typeof t.button&&0!==t.button||e.startSwipe(t,e.normalizeMouseEvent(t))})),d(p(e),"onMove",(function(t){var n=e.props,r=n.axis,o=n.minSwipeLength,i=n.preventScroll;if(i&&(t.preventDefault(),t.stopPropagation()),!t.targetTouches||t.targetTouches[0].identifier===e.state.touchIdentifier){var a=e.getSwipeDirection(e.normalizeMouseEvent(t));i&&("xy"===r?t.preventDefault():"x"===r?a.swipeLengthX>=o&&t.preventDefault():a.swipeLengthY>=o&&t.preventDefault()),e.isSwipeDirectionUnchanged(a)?e.updateSwipe(a,e.normalizeMouseEvent(t)):e.resetSwipe()}})),d(p(e),"onRelease",(function(){var t=e.getSwipeLength(e.state.pos),n=(new Date).getTime()-e.state.swipeStart.getTime();if(t>e.props.minSwipeLength&&n<=e.props.maxTimeThreshold){var r=(e.state.direction.y||"")+(e.state.direction.x||""),o="onSwipe".concat(r),i={type:"swipe".concat(r),timestampStart:e.state.swipeStart,timestampEnd:new Date,start:e.state.start,end:e.state.pos,direction:e.state.direction};e.props.onSwipe&&e.props.onSwipe(i),e.props[o]&&e.props[o](i)}e.endSwipe()})),d(p(e),"getSwipeLength",(function(t){return e.getSwipeLengthX(t)+e.getSwipeLengthY(t)})),d(p(e),"getSwipeLengthX",(function(t){return Math.abs(t.x-e.state.start.x)})),d(p(e),"getSwipeLengthY",(function(t){return Math.abs(t.y-e.state.start.y)})),d(p(e),"isSwipeDirectionUnchanged",(function(t){return!(e.state.direction.x&&e.state.direction.x!==t.x||e.state.direction.y&&e.state.direction.y!==t.y)})),d(p(e),"normalizeMouseEvent",(function(t){var e=Object(o.d)(t);return{x:e.clientX,y:e.clientY}}));var n=e.props.node;return e.state={touchIdentifier:null,direction:{x:null,y:null},pos:{x:null,y:null},start:{x:null,y:null},swipeStart:new Date},e.node=n,e.bindListeners(),e}return e=a,(n=[{key:"bindListeners",value:function(){this.node.addEventListener(o.a.press,this.onPress)}},{key:"unbindListeners",value:function(){this.node.removeEventListener(o.a.press,this.onPress)}},{key:"getSwipeDirection",value:function(t){var e=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){d(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},this.state.direction);return e.swipeLengthY=this.getSwipeLengthY(t),e.swipeLengthX=this.getSwipeLengthX(t),e.swipeLengthY>this.props.moveThreshold&&(e.y=t.y<this.state.start.y?"Up":"Down"),e.swipeLengthX>this.props.moveThreshold&&(e.x=t.x<this.state.start.x?"Left":"Right"),e}},{key:"startSwipe",value:function(t,e){var n=this;this.setState({touchIdentifier:t.targetTouches?t.targetTouches[0].identifier:null,direction:{x:null,y:null},start:e,pos:{x:null,y:null},swipeStart:new Date}),document.addEventListener(o.a.move,this.onMove),o.a.release.forEach((function(t){document.addEventListener(t,n.onRelease)}))}},{key:"endSwipe",value:function(){var t=this;document.removeEventListener(o.a.move,this.onMove),o.a.release.forEach((function(e){document.removeEventListener(e,t.onRelease)}))}},{key:"updateSwipe",value:function(t,e){this.setState({direction:t,pos:e})}},{key:"resetSwipe",value:function(){this.setState({touchIdentifier:null,direction:{x:null,y:null},pos:{x:null,y:null},start:{x:null,y:null},swipeStart:new Date})}},{key:"destroy",value:function(){this.unbindListeners(),this.endSwipe()}}])&&c(e.prototype,n),r&&c(e,r),a}(r.a);d(y,"defaultProps",{node:document.createElement("div"),axis:"xy",maxTimeThreshold:600,minSwipeLength:40,moveThreshold:100,preventScroll:!0,onSwipe:i.a,onSwipeLeft:i.a,onSwipeUpLeft:i.a,onSwipeUp:i.a,onSwipeUpRight:i.a,onSwipeRight:i.a,onSwipeDownRight:i.a,onSwipeDown:i.a,onSwipeDownLeft:i.a})},622:function(t,e,n){"use strict";n.r(e),n.d(e,"GalleryReel",(function(){return J}));n(0);var r=n(2),o=n(214),i=n(21),a=n(202),u=n(135),c=n(170),s=n(35),l=n(161);function f(t){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function p(t){return function(t){if(Array.isArray(t))return h(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return h(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function d(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function y(t,e){return(y=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function b(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=m(t);if(e){var o=m(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return v(this,n)}}function v(t,e){return!e||"object"!==f(e)&&"function"!=typeof e?g(t):e}function g(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function m(t){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function w(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var S=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&y(t,e)}(i,t);var e,n,r,o=b(i);function i(t){var e;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),w(g(e=o.call(this,t)),"createNode",(function(t){var e=document.createElement("div");return e.innerHTML=t,e.firstChild})),w(g(e),"resize",(function(t,n,r,o){var i=e.props,a=i.width,u=i.height,c=i.focalPoint;if(e.width=Math.round(a*(n/u)),e.height=n,o){e.width=t;var s=Math.max(e.width/a,e.height/u),f=a*s,p=u*s,h=.5*t-.5*f-(f-t)*(c.x-.5),d=.5*n-.5*p-(p-n)*(c.y-.5);Object(l.b)(e.ref.wrapper,{width:"".concat(f,"px"),height:"".concat(p,"px"),transform:"matrix(1, 0, 0, 1, ".concat(h,", ").concat(d,")")})}else Object(l.b)(e.ref.wrapper,{width:"100%",height:"100%",transform:"none"});return Object(l.b)(e.node,{width:"".concat(e.width,"px"),height:"".concat(e.height,"px")}),e.worldX=r,e.halfWidth=.5*e.width,e.width}));var n=e.props,r=n.html,a=n.width,u=n.height,c=n.imageWrapperSelector;return e.state={isActive:!1,inViewport:!0},e.offsetY=0,e.width=a,e.height=u,e.worldX=0,e.halfWidth=.5*a,e.pos={x:0},e.node=e.createNode(r),e.ref={image:e.node.querySelector("img")},e.ref.wrapper=c?e.ref.image.closest(c):e.ref.image.parentNode,e.node.style.width="".concat(a,"px"),e.node.style.height="".concat(u,"px"),e.loadImage(),e}return e=i,(n=[{key:"loadImage",value:function(){var t=this.ref,e=t.image,n=t.wrapper;e.onload=function(){n.dataset.loaded=!0},s.a.loadLazy(e,{load:!0})}},{key:"selectInteractiveElements",value:function(t){return t.querySelectorAll("a")}},{key:"position",value:function(t,e,n,r){var o=t+this.worldX;if(o+this.width<0?o+=e:o>n&&(o-=e),o+this.width>0&&o<n)return this.state.inViewport||this.setState({inViewport:!0}),this.node.style.transform="matrix(1, 0, 0, 1, ".concat(o,", 0)"),void p(this.selectInteractiveElements(this.node)).forEach((function(t){t.tabIndex=0}));this.state.inViewport&&(this.setState({inViewport:!1}),this.node.style.transform="matrix(1, 0, 0, 1, -9999, 0)",p(this.selectInteractiveElements(this.node)).forEach((function(t){t.tabIndex=-1})))}},{key:"addSlide",value:function(){this.loadImage(),this.setState({isActive:!0}),this.node.dataset.active=this.state.isActive}},{key:"removeSlide",value:function(){this.setState({isActive:!1}),this.node.dataset.active=this.state.isActive}}])&&d(e.prototype,n),r&&d(e,r),i}(r.a);w(S,"defaultProps",{html:"",width:800,height:600,focalPoint:{x:.5,y:.5}});var O=n(38),j=n(5);function x(t){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function P(t){return function(t){if(Array.isArray(t))return E(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return E(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return E(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function L(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function D(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?L(Object(n),!0).forEach((function(e){M(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):L(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function k(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function R(t,e){return(R=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function A(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=C(t);if(e){var o=C(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return T(this,n)}}function T(t,e){return!e||"object"!==x(e)&&"function"!=typeof e?_(t):e}function _(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function C(t){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function M(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var I=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&R(t,e)}(l,t);var e,n,r,s=A(l);function l(t){var e;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,l),M(_(e=s.call(this,t)),"buildSlidesData",(function(t){return t.map((function(t){var e=t.querySelectorAll("img")[0];return D(D({html:t.outerHTML},Object(u.c)(e)),{},{focalPoint:Object(u.b)(e)})}))})),M(_(e),"onPreviousSlide",(function(t){e.setTargetSlide(e.pos.target-1),t&&t.preventDefault&&t.preventDefault()})),M(_(e),"onNextSlide",(function(t){e.setTargetSlide(e.pos.target+1),t&&t.preventDefault&&t.preventDefault()})),M(_(e),"onResize",(function(){var t=e.props,n=t.region,r=t.maxDuplicationCount,o=n.clientWidth,i=n.clientHeight-e.getGalleryCaptionHeight(),a=e.resizeSlides(o,i);if(a<2*o)for(;a<2*o&&e.slides.length<r;){var u;(u=e.slides).push.apply(u,P(e.addSlides(e.slidesData,n))),a=e.resizeSlides(o,i)}e.setState({totalWidth:a,regionWidth:o,halfRegionWidth:.5*o,regionHeight:i}),e.slidesLen=e.slides.length,e.offsets=e.slides.map((function(t){return t.worldX+t.halfWidth}));var c=e.slides[0],s=e.slides[e.slides.length-1];e.offsets.push(s.worldX+s.width+c.halfWidth),e.update()})),M(_(e),"addSlides",(function(t,n){return t.map((function(t){var r=new S(D(D({},t),{},{imageWrapperSelector:e.props.imageWrapperSelector}));return n.appendChild(r.node),r}))})),M(_(e),"update",(function(){for(var t=e.state,n=t.len,r=t.totalWidth,o=t.regionWidth,i=t.halfRegionWidth,a=t.regionHeight,u=(e.pos.current%n+n)%n,s=i-Object(c.c)(e.indexes,e.offsets,u),l=0;l<e.slidesLen;l+=1)e.slides[l].position(s,r,o,a)}));var n=e.props,r=n.node,i=n.region,a=n.slides,f=n.cover,p=n.slideDuration,h=i.clientWidth,d=i.clientHeight;return e.state={cover:f,totalWidth:0,regionWidth:h,halfRegionWidth:.5*h,regionHeight:d,len:a.length,previousIndex:-1,index:0,slideDuration:p},e.pos={target:0,current:0},e.node=r,i.innerHTML="",e.slidesData=e.buildSlidesData(a,e.props),e.indexes=Array.from(Array(e.state.len+1).keys()),e.slides=e.addSlides(e.slidesData,i),e.slidesLen=e.slides.length,e.slidesData.length?(e.swipe=new o.a({axis:"x",node:i,onSwipeRight:e.onPreviousSlide,onSwipeLeft:e.onNextSlide}),e.bindListeners(),e.props.onSetSlide(e.state.index),e.setTargetSlide(e.state.index),e):T(e)}return e=l,(n=[{key:"bindListeners",value:function(){var t=this.props,e=t.buttonPrevious,n=t.buttonNext;e&&e.addEventListener("click",this.onPreviousSlide),n&&n.addEventListener("click",this.onNextSlide),i.a.on(this.onResize,j.e),this.onResize()}},{key:"unbindListeners",value:function(){var t=this.props,e=t.buttonPrevious,n=t.buttonNext;e&&e.removeEventListener("click",this.onPreviousSlide),n&&n.removeEventListener("click",this.onNextSlide),i.a.off(this.onResize)}},{key:"setTargetSlide",value:function(t){var e=this,n=this.state,r=n.len,o=n.slideDuration,i=(t%r+r)%r,u=n.previousIndex,c=this.slides[i],s=this.slides[u];s&&s.removeSlide(),c.addSlide(),this.setState({index:i,previousIndex:i}),this.props.onSetSlide(i),this.pos.target=t,this.tween&&this.tween.destroy(),this.tween=new a.a({duration:o,from:this.pos.current,to:this.pos.target,onUpdate:function(t){e.pos.current=t,e.update()}})}},{key:"resizeSlides",value:function(t,e){for(var n=this.state.cover,r=0,o=0,i=this.slides.length;o<i;o+=1)r+=this.slides[o].resize(t,e,r,n);return r}},{key:"refresh",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.setState(D({},t)),this.slidesData.length&&this.onResize()}},{key:"isGalleryCaptionOn",value:function(){return!!this.props.isGalleryShowCaptionsOn}},{key:"getGalleryCaptionHeight",value:function(){return this.isGalleryCaptionOn()?125:0}},{key:"destroy",value:function(){this.tween&&this.tween.destroy(),this.tween=null,this.slides=[],this.slidesData=[],this.unbindListeners(),this.swipe&&this.swipe.destroy()}}])&&k(e.prototype,n),r&&k(e,r),l}(r.a);M(I,"defaultProps",{node:document.createElement("div"),region:document.createElement("div"),buttonNext:document.createElement("a"),buttonPrevious:document.createElement("a"),slides:[],cover:!1,slideDuration:.6,maxDuplicationCount:100,onSetSlide:O.a});var W=n(39),U=n(159);function z(t){return(z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function N(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function X(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function q(t,e){return(q=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function H(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=G(t);if(e){var o=G(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return F(this,n)}}function F(t,e){return!e||"object"!==z(e)&&"function"!=typeof e?Y(t):e}function Y(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function G(t){return(G=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function V(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var J=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&q(t,e)}(i,t);var e,n,r,o=H(i);function i(t){var e;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),V(Y(e=o.call(this)),"onSetSlide",(function(t){e.clickLinks.forEach((function(e){parseInt(e.getAttribute("data-target"),10)===t+1?e.classList.add("active"):e.classList.remove("active")}))})),V(Y(e),"onLightboxOpen",(function(t){e.state.isHistoryEnabled&&(t.preventDefault(),history.pushState({},"",t.currentTarget.href))})),V(Y(e),"destroy",(function(){e.unbindListeners(),e.reel.destroy()})),e.betaFeatureFlags=Object(W.a)(window,"Static.SQUARESPACE_CONTEXT.betaFeatureFlags",[]);var n=Object(W.a)(window,"Static.SQUARESPACE_CONTEXT.collection.fullUrl",null);e.history=Object(U.a)();var r=e.props,a=r.listSelector,u=r.slideSelector,c=r.previousSelector,s=r.controlsSelector,l=r.nextSelector,f={};return t.dataset.props&&(f=JSON.parse(t.dataset.props)),e.state=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?N(Object(n),!0).forEach((function(e){V(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({design:"reel",controlsLocation:"side",isCropping:!1,width:"full",viewportHeight:75,isHistoryEnabled:n&&e.history},f),e.node=t,e.clickLinks=e.node.querySelectorAll(".gallery-click-through-link"),e.showCaptions=e.node.dataset.showCaptions,e.reel=new I({node:e.node,region:e.node.querySelector(a),controls:e.node.querySelector(s),slides:Array.from(e.node.querySelectorAll(u)),buttonPrevious:e.node.querySelector(c),buttonNext:e.node.querySelector(l),cover:e.state.isCropping,onSetSlide:e.onSetSlide.bind(Y(e)),imageWrapperSelector:".gallery-reel-item-src",isGalleryShowCaptionsOn:"true"===e.showCaptions}),e.bindListeners(),e}return e=i,(n=[{key:"bindListeners",value:function(){var t=this;this.node.querySelectorAll(this.props.lightboxLinkSelector).forEach((function(e){e.addEventListener("click",t.onLightboxOpen)}))}},{key:"unbindListeners",value:function(){var t=this;this.node.querySelectorAll(this.props.lightboxLinkSelector).forEach((function(e){e.removeEventListener("click",t.onLightboxOpen)}))}}])&&X(e.prototype,n),r&&X(e,r),i}(r.a);V(J,"defaultProps",{listSelector:".gallery-reel-list",slideSelector:".gallery-reel-item",controlsSelector:".gallery-reel-controls",previousSelector:"[data-previous]",nextSelector:"[data-next]",lightboxLinkSelector:'.gallery-reel-item[data-video="true"] .gallery-reel-lightbox-link'});e.default=function(t){return new J(t)}}}]);