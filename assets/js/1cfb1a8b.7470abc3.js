/*! For license information please see 1cfb1a8b.7470abc3.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[914841],{743040:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>u,default:()=>f,frontMatter:()=>c,metadata:()=>i,toc:()=>s});var t=n(824246),o=n(511151);const c={id:"plugin-search-backend-node.lunrsearchengine.lunrindices",title:"LunrSearchEngine.lunrIndices",description:"API reference for LunrSearchEngine.lunrIndices"},u=void 0,i={id:"reference/plugin-search-backend-node.lunrsearchengine.lunrindices",title:"LunrSearchEngine.lunrIndices",description:"API reference for LunrSearchEngine.lunrIndices",source:"@site/../docs/reference/plugin-search-backend-node.lunrsearchengine.lunrindices.md",sourceDirName:"reference",slug:"/reference/plugin-search-backend-node.lunrsearchengine.lunrindices",permalink:"/docs/reference/plugin-search-backend-node.lunrsearchengine.lunrindices",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-search-backend-node.lunrsearchengine.lunrindices.md",tags:[],version:"current",frontMatter:{id:"plugin-search-backend-node.lunrsearchengine.lunrindices",title:"LunrSearchEngine.lunrIndices",description:"API reference for LunrSearchEngine.lunrIndices"}},a={},s=[];function l(e){const r=Object.assign({p:"p",a:"a",code:"code",strong:"strong",pre:"pre"},(0,o.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-search-backend-node",children:(0,t.jsx)(r.code,{children:"@backstage/plugin-search-backend-node"})})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-search-backend-node.lunrsearchengine",children:(0,t.jsx)(r.code,{children:"LunrSearchEngine"})})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-search-backend-node.lunrsearchengine.lunrindices",children:(0,t.jsx)(r.code,{children:"lunrIndices"})})]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"protected lunrIndices: Record<string, lunr.Index>;\n"})})]})}const f=function(e={}){const{wrapper:r}=Object.assign({},(0,o.ah)(),e.components);return r?(0,t.jsx)(r,Object.assign({},e,{children:(0,t.jsx)(l,e)})):l(e)}},862525:e=>{var r=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},n=0;n<10;n++)r["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var t={};return"abcdefghijklmnopqrst".split("").forEach((function(e){t[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},t)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var c,u,i=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),a=1;a<arguments.length;a++){for(var s in c=Object(arguments[a]))n.call(c,s)&&(i[s]=c[s]);if(r){u=r(c);for(var l=0;l<u.length;l++)t.call(c,u[l])&&(i[u[l]]=c[u[l]])}}return i}},371426:(e,r,n)=>{n(862525);var t=n(827378),o=60103;if(r.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var c=Symbol.for;o=c("react.element"),r.Fragment=c("react.fragment")}var u=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,a={key:!0,ref:!0,__self:!0,__source:!0};function s(e,r,n){var t,c={},s=null,l=null;for(t in void 0!==n&&(s=""+n),void 0!==r.key&&(s=""+r.key),void 0!==r.ref&&(l=r.ref),r)i.call(r,t)&&!a.hasOwnProperty(t)&&(c[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===c[t]&&(c[t]=r[t]);return{$$typeof:o,type:e,key:s,ref:l,props:c,_owner:u.current}}r.jsx=s,r.jsxs=s},541535:(e,r,n)=>{var t=n(862525),o=60103,c=60106;r.Fragment=60107,r.StrictMode=60108,r.Profiler=60114;var u=60109,i=60110,a=60112;r.Suspense=60113;var s=60115,l=60116;if("function"==typeof Symbol&&Symbol.for){var f=Symbol.for;o=f("react.element"),c=f("react.portal"),r.Fragment=f("react.fragment"),r.StrictMode=f("react.strict_mode"),r.Profiler=f("react.profiler"),u=f("react.provider"),i=f("react.context"),a=f("react.forward_ref"),r.Suspense=f("react.suspense"),s=f("react.memo"),l=f("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)r+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function g(e,r,n){this.props=e,this.context=r,this.refs=y,this.updater=n||h}function v(){}function b(e,r,n){this.props=e,this.context=r,this.refs=y,this.updater=n||h}g.prototype.isReactComponent={},g.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,r,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=g.prototype;var m=b.prototype=new v;m.constructor=b,t(m,g.prototype),m.isPureReactComponent=!0;var _={current:null},j=Object.prototype.hasOwnProperty,k={key:!0,ref:!0,__self:!0,__source:!0};function S(e,r,n){var t,c={},u=null,i=null;if(null!=r)for(t in void 0!==r.ref&&(i=r.ref),void 0!==r.key&&(u=""+r.key),r)j.call(r,t)&&!k.hasOwnProperty(t)&&(c[t]=r[t]);var a=arguments.length-2;if(1===a)c.children=n;else if(1<a){for(var s=Array(a),l=0;l<a;l++)s[l]=arguments[l+2];c.children=s}if(e&&e.defaultProps)for(t in a=e.defaultProps)void 0===c[t]&&(c[t]=a[t]);return{$$typeof:o,type:e,key:u,ref:i,props:c,_owner:_.current}}function O(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var w=/\/+/g;function E(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function x(e,r,n,t,u){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var a=!1;if(null===e)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case o:case c:a=!0}}if(a)return u=u(a=e),e=""===t?"."+E(a,0):t,Array.isArray(u)?(n="",null!=e&&(n=e.replace(w,"$&/")+"/"),x(u,r,n,"",(function(e){return e}))):null!=u&&(O(u)&&(u=function(e,r){return{$$typeof:o,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(u,n+(!u.key||a&&a.key===u.key?"":(""+u.key).replace(w,"$&/")+"/")+e)),r.push(u)),1;if(a=0,t=""===t?".":t+":",Array.isArray(e))for(var s=0;s<e.length;s++){var l=t+E(i=e[s],s);a+=x(i,r,n,l,u)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),s=0;!(i=e.next()).done;)a+=x(i=i.value,r,n,l=t+E(i,s++),u);else if("object"===i)throw r=""+e,Error(d(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r));return a}function C(e,r,n){if(null==e)return e;var t=[],o=0;return x(e,t,"","",(function(e){return r.call(n,e,o++)})),t}function P(e){if(-1===e._status){var r=e._result;r=r(),e._status=0,e._result=r,r.then((function(r){0===e._status&&(r=r.default,e._status=1,e._result=r)}),(function(r){0===e._status&&(e._status=2,e._result=r)}))}if(1===e._status)return e._result;throw e._result}var R={current:null};function $(){var e=R.current;if(null===e)throw Error(d(321));return e}var I={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:_,IsSomeRendererActing:{current:!1},assign:t};r.Children={map:C,forEach:function(e,r,n){C(e,(function(){r.apply(this,arguments)}),n)},count:function(e){var r=0;return C(e,(function(){r++})),r},toArray:function(e){return C(e,(function(e){return e}))||[]},only:function(e){if(!O(e))throw Error(d(143));return e}},r.Component=g,r.PureComponent=b,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,r.cloneElement=function(e,r,n){if(null==e)throw Error(d(267,e));var c=t({},e.props),u=e.key,i=e.ref,a=e._owner;if(null!=r){if(void 0!==r.ref&&(i=r.ref,a=_.current),void 0!==r.key&&(u=""+r.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in r)j.call(r,l)&&!k.hasOwnProperty(l)&&(c[l]=void 0===r[l]&&void 0!==s?s[l]:r[l])}var l=arguments.length-2;if(1===l)c.children=n;else if(1<l){s=Array(l);for(var f=0;f<l;f++)s[f]=arguments[f+2];c.children=s}return{$$typeof:o,type:e.type,key:u,ref:i,props:c,_owner:a}},r.createContext=function(e,r){return void 0===r&&(r=null),(e={$$typeof:i,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},r.createElement=S,r.createFactory=function(e){var r=S.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:a,render:e}},r.isValidElement=O,r.lazy=function(e){return{$$typeof:l,_payload:{_status:-1,_result:e},_init:P}},r.memo=function(e,r){return{$$typeof:s,type:e,compare:void 0===r?null:r}},r.useCallback=function(e,r){return $().useCallback(e,r)},r.useContext=function(e,r){return $().useContext(e,r)},r.useDebugValue=function(){},r.useEffect=function(e,r){return $().useEffect(e,r)},r.useImperativeHandle=function(e,r,n){return $().useImperativeHandle(e,r,n)},r.useLayoutEffect=function(e,r){return $().useLayoutEffect(e,r)},r.useMemo=function(e,r){return $().useMemo(e,r)},r.useReducer=function(e,r,n){return $().useReducer(e,r,n)},r.useRef=function(e){return $().useRef(e)},r.useState=function(e){return $().useState(e)},r.version="17.0.2"},827378:(e,r,n)=>{e.exports=n(541535)},824246:(e,r,n)=>{e.exports=n(371426)},511151:(e,r,n)=>{n.d(r,{Zo:()=>i,ah:()=>c});var t=n(667294);const o=t.createContext({});function c(e){const r=t.useContext(o);return t.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const u={};function i({components:e,children:r,disableParentContext:n}){let i;return i=n?"function"==typeof e?e({}):e||u:c(e),t.createElement(o.Provider,{value:i},r)}}}]);