/*! For license information please see 0ff723e8.72cb771c.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[273212],{353723:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>f,contentTitle:()=>i,default:()=>l,frontMatter:()=>c,metadata:()=>a,toc:()=>u});var n=t(824246),o=t(511151);const c={id:"config.configreader.getconfig",title:"ConfigReader.getConfig()",description:"API reference for ConfigReader.getConfig()"},i=void 0,a={id:"reference/config.configreader.getconfig",title:"ConfigReader.getConfig()",description:"API reference for ConfigReader.getConfig()",source:"@site/../docs/reference/config.configreader.getconfig.md",sourceDirName:"reference",slug:"/reference/config.configreader.getconfig",permalink:"/docs/reference/config.configreader.getconfig",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/config.configreader.getconfig.md",tags:[],version:"current",frontMatter:{id:"config.configreader.getconfig",title:"ConfigReader.getConfig()",description:"API reference for ConfigReader.getConfig()"}},f={},u=[{value:"Parameters",id:"parameters",level:2}];function s(e){const r=Object.assign({p:"p",a:"a",code:"code",strong:"strong",pre:"pre",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/config",children:(0,n.jsx)(r.code,{children:"@backstage/config"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/config.configreader",children:(0,n.jsx)(r.code,{children:"ConfigReader"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/config.configreader.getconfig",children:(0,n.jsx)(r.code,{children:"getConfig"})})]}),"\n",(0,n.jsxs)(r.p,{children:["Same as ",(0,n.jsx)(r.code,{children:"getOptionalConfig"}),", but will throw an error if there's no value for the given key."]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"getConfig(key: string): ConfigReader;\n"})}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Parameter"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"key"}),(0,n.jsx)(r.td,{children:"string"}),(0,n.jsx)(r.td,{})]})})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"/docs/reference/config.configreader",children:"ConfigReader"})})]})}const l=function(e={}){const{wrapper:r}=Object.assign({},(0,o.ah)(),e.components);return r?(0,n.jsx)(r,Object.assign({},e,{children:(0,n.jsx)(s,e)})):s(e)}},862525:e=>{var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var c,i,a=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),f=1;f<arguments.length;f++){for(var u in c=Object(arguments[f]))t.call(c,u)&&(a[u]=c[u]);if(r){i=r(c);for(var s=0;s<i.length;s++)n.call(c,i[s])&&(a[i[s]]=c[i[s]])}}return a}},371426:(e,r,t)=>{t(862525);var n=t(827378),o=60103;if(r.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var c=Symbol.for;o=c("react.element"),r.Fragment=c("react.fragment")}var i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a=Object.prototype.hasOwnProperty,f={key:!0,ref:!0,__self:!0,__source:!0};function u(e,r,t){var n,c={},u=null,s=null;for(n in void 0!==t&&(u=""+t),void 0!==r.key&&(u=""+r.key),void 0!==r.ref&&(s=r.ref),r)a.call(r,n)&&!f.hasOwnProperty(n)&&(c[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===c[n]&&(c[n]=r[n]);return{$$typeof:o,type:e,key:u,ref:s,props:c,_owner:i.current}}r.jsx=u,r.jsxs=u},541535:(e,r,t)=>{var n=t(862525),o=60103,c=60106;r.Fragment=60107,r.StrictMode=60108,r.Profiler=60114;var i=60109,a=60110,f=60112;r.Suspense=60113;var u=60115,s=60116;if("function"==typeof Symbol&&Symbol.for){var l=Symbol.for;o=l("react.element"),c=l("react.portal"),r.Fragment=l("react.fragment"),r.StrictMode=l("react.strict_mode"),r.Profiler=l("react.profiler"),i=l("react.provider"),a=l("react.context"),f=l("react.forward_ref"),r.Suspense=l("react.suspense"),u=l("react.memo"),s=l("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function p(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function y(e,r,t){this.props=e,this.context=r,this.refs=h,this.updater=t||g}function m(){}function v(e,r,t){this.props=e,this.context=r,this.refs=h,this.updater=t||g}y.prototype.isReactComponent={},y.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(p(85));this.updater.enqueueSetState(this,e,r,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=y.prototype;var j=v.prototype=new m;j.constructor=v,n(j,y.prototype),j.isPureReactComponent=!0;var b={current:null},_=Object.prototype.hasOwnProperty,x={key:!0,ref:!0,__self:!0,__source:!0};function C(e,r,t){var n,c={},i=null,a=null;if(null!=r)for(n in void 0!==r.ref&&(a=r.ref),void 0!==r.key&&(i=""+r.key),r)_.call(r,n)&&!x.hasOwnProperty(n)&&(c[n]=r[n]);var f=arguments.length-2;if(1===f)c.children=t;else if(1<f){for(var u=Array(f),s=0;s<f;s++)u[s]=arguments[s+2];c.children=u}if(e&&e.defaultProps)for(n in f=e.defaultProps)void 0===c[n]&&(c[n]=f[n]);return{$$typeof:o,type:e,key:i,ref:a,props:c,_owner:b.current}}function k(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var w=/\/+/g;function O(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function R(e,r,t,n,i){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var f=!1;if(null===e)f=!0;else switch(a){case"string":case"number":f=!0;break;case"object":switch(e.$$typeof){case o:case c:f=!0}}if(f)return i=i(f=e),e=""===n?"."+O(f,0):n,Array.isArray(i)?(t="",null!=e&&(t=e.replace(w,"$&/")+"/"),R(i,r,t,"",(function(e){return e}))):null!=i&&(k(i)&&(i=function(e,r){return{$$typeof:o,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(i,t+(!i.key||f&&f.key===i.key?"":(""+i.key).replace(w,"$&/")+"/")+e)),r.push(i)),1;if(f=0,n=""===n?".":n+":",Array.isArray(e))for(var u=0;u<e.length;u++){var s=n+O(a=e[u],u);f+=R(a,r,t,s,i)}else if(s=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof s)for(e=s.call(e),u=0;!(a=e.next()).done;)f+=R(a=a.value,r,t,s=n+O(a,u++),i);else if("object"===a)throw r=""+e,Error(p(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r));return f}function S(e,r,t){if(null==e)return e;var n=[],o=0;return R(e,n,"","",(function(e){return r.call(t,e,o++)})),n}function E(e){if(-1===e._status){var r=e._result;r=r(),e._status=0,e._result=r,r.then((function(r){0===e._status&&(r=r.default,e._status=1,e._result=r)}),(function(r){0===e._status&&(e._status=2,e._result=r)}))}if(1===e._status)return e._result;throw e._result}var P={current:null};function $(){var e=P.current;if(null===e)throw Error(p(321));return e}var I={ReactCurrentDispatcher:P,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:b,IsSomeRendererActing:{current:!1},assign:n};r.Children={map:S,forEach:function(e,r,t){S(e,(function(){r.apply(this,arguments)}),t)},count:function(e){var r=0;return S(e,(function(){r++})),r},toArray:function(e){return S(e,(function(e){return e}))||[]},only:function(e){if(!k(e))throw Error(p(143));return e}},r.Component=y,r.PureComponent=v,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,r.cloneElement=function(e,r,t){if(null==e)throw Error(p(267,e));var c=n({},e.props),i=e.key,a=e.ref,f=e._owner;if(null!=r){if(void 0!==r.ref&&(a=r.ref,f=b.current),void 0!==r.key&&(i=""+r.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(s in r)_.call(r,s)&&!x.hasOwnProperty(s)&&(c[s]=void 0===r[s]&&void 0!==u?u[s]:r[s])}var s=arguments.length-2;if(1===s)c.children=t;else if(1<s){u=Array(s);for(var l=0;l<s;l++)u[l]=arguments[l+2];c.children=u}return{$$typeof:o,type:e.type,key:i,ref:a,props:c,_owner:f}},r.createContext=function(e,r){return void 0===r&&(r=null),(e={$$typeof:a,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},r.createElement=C,r.createFactory=function(e){var r=C.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:f,render:e}},r.isValidElement=k,r.lazy=function(e){return{$$typeof:s,_payload:{_status:-1,_result:e},_init:E}},r.memo=function(e,r){return{$$typeof:u,type:e,compare:void 0===r?null:r}},r.useCallback=function(e,r){return $().useCallback(e,r)},r.useContext=function(e,r){return $().useContext(e,r)},r.useDebugValue=function(){},r.useEffect=function(e,r){return $().useEffect(e,r)},r.useImperativeHandle=function(e,r,t){return $().useImperativeHandle(e,r,t)},r.useLayoutEffect=function(e,r){return $().useLayoutEffect(e,r)},r.useMemo=function(e,r){return $().useMemo(e,r)},r.useReducer=function(e,r,t){return $().useReducer(e,r,t)},r.useRef=function(e){return $().useRef(e)},r.useState=function(e){return $().useState(e)},r.version="17.0.2"},827378:(e,r,t)=>{e.exports=t(541535)},824246:(e,r,t)=>{e.exports=t(371426)},511151:(e,r,t)=>{t.d(r,{Zo:()=>a,ah:()=>c});var n=t(667294);const o=n.createContext({});function c(e){const r=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const i={};function a({components:e,children:r,disableParentContext:t}){let a;return a=t?"function"==typeof e?e({}):e||i:c(e),n.createElement(o.Provider,{value:a},r)}}}]);