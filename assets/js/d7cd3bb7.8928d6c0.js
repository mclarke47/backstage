/*! For license information please see d7cd3bb7.8928d6c0.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[688673],{534056:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>u,default:()=>l,frontMatter:()=>c,metadata:()=>i,toc:()=>s});var n=r(824246),o=r(511151);const c={id:"plugin-kubernetes-backend.objecttofetch.objecttype",title:"ObjectToFetch.objectType",description:"API reference for ObjectToFetch.objectType"},u=void 0,i={id:"reference/plugin-kubernetes-backend.objecttofetch.objecttype",title:"ObjectToFetch.objectType",description:"API reference for ObjectToFetch.objectType",source:"@site/../docs/reference/plugin-kubernetes-backend.objecttofetch.objecttype.md",sourceDirName:"reference",slug:"/reference/plugin-kubernetes-backend.objecttofetch.objecttype",permalink:"/docs/reference/plugin-kubernetes-backend.objecttofetch.objecttype",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-kubernetes-backend.objecttofetch.objecttype.md",tags:[],version:"current",frontMatter:{id:"plugin-kubernetes-backend.objecttofetch.objecttype",title:"ObjectToFetch.objectType",description:"API reference for ObjectToFetch.objectType"}},a={},s=[];function f(e){const t=Object.assign({p:"p",a:"a",code:"code",strong:"strong",pre:"pre"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-kubernetes-backend",children:(0,n.jsx)(t.code,{children:"@backstage/plugin-kubernetes-backend"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-kubernetes-backend.objecttofetch",children:(0,n.jsx)(t.code,{children:"ObjectToFetch"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-kubernetes-backend.objecttofetch.objecttype",children:(0,n.jsx)(t.code,{children:"objectType"})})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"objectType: KubernetesObjectTypes;\n"})})]})}const l=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(f,e)})):f(e)}},862525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var c,u,i=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),a=1;a<arguments.length;a++){for(var s in c=Object(arguments[a]))r.call(c,s)&&(i[s]=c[s]);if(t){u=t(c);for(var f=0;f<u.length;f++)n.call(c,u[f])&&(i[u[f]]=c[u[f]])}}return i}},371426:(e,t,r)=>{r(862525);var n=r(827378),o=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var c=Symbol.for;o=c("react.element"),t.Fragment=c("react.fragment")}var u=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,a={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,r){var n,c={},s=null,f=null;for(n in void 0!==r&&(s=""+r),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(f=t.ref),t)i.call(t,n)&&!a.hasOwnProperty(n)&&(c[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===c[n]&&(c[n]=t[n]);return{$$typeof:o,type:e,key:s,ref:f,props:c,_owner:u.current}}t.jsx=s,t.jsxs=s},541535:(e,t,r)=>{var n=r(862525),o=60103,c=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var u=60109,i=60110,a=60112;t.Suspense=60113;var s=60115,f=60116;if("function"==typeof Symbol&&Symbol.for){var l=Symbol.for;o=l("react.element"),c=l("react.portal"),t.Fragment=l("react.fragment"),t.StrictMode=l("react.strict_mode"),t.Profiler=l("react.profiler"),u=l("react.provider"),i=l("react.context"),a=l("react.forward_ref"),t.Suspense=l("react.suspense"),s=l("react.memo"),f=l("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b={};function h(e,t,r){this.props=e,this.context=t,this.refs=b,this.updater=r||y}function j(){}function v(e,t,r){this.props=e,this.context=t,this.refs=b,this.updater=r||y}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},j.prototype=h.prototype;var m=v.prototype=new j;m.constructor=v,n(m,h.prototype),m.isPureReactComponent=!0;var g={current:null},_=Object.prototype.hasOwnProperty,k={key:!0,ref:!0,__self:!0,__source:!0};function O(e,t,r){var n,c={},u=null,i=null;if(null!=t)for(n in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(u=""+t.key),t)_.call(t,n)&&!k.hasOwnProperty(n)&&(c[n]=t[n]);var a=arguments.length-2;if(1===a)c.children=r;else if(1<a){for(var s=Array(a),f=0;f<a;f++)s[f]=arguments[f+2];c.children=s}if(e&&e.defaultProps)for(n in a=e.defaultProps)void 0===c[n]&&(c[n]=a[n]);return{$$typeof:o,type:e,key:u,ref:i,props:c,_owner:g.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var S=/\/+/g;function x(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function C(e,t,r,n,u){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var a=!1;if(null===e)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case o:case c:a=!0}}if(a)return u=u(a=e),e=""===n?"."+x(a,0):n,Array.isArray(u)?(r="",null!=e&&(r=e.replace(S,"$&/")+"/"),C(u,t,r,"",(function(e){return e}))):null!=u&&(w(u)&&(u=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(u,r+(!u.key||a&&a.key===u.key?"":(""+u.key).replace(S,"$&/")+"/")+e)),t.push(u)),1;if(a=0,n=""===n?".":n+":",Array.isArray(e))for(var s=0;s<e.length;s++){var f=n+x(i=e[s],s);a+=C(i,t,r,f,u)}else if(f=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof f)for(e=f.call(e),s=0;!(i=e.next()).done;)a+=C(i=i.value,t,r,f=n+x(i,s++),u);else if("object"===i)throw t=""+e,Error(d(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return a}function E(e,t,r){if(null==e)return e;var n=[],o=0;return C(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function P(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var $={current:null};function R(){var e=$.current;if(null===e)throw Error(d(321));return e}var T={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:g,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:E,forEach:function(e,t,r){E(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return E(e,(function(){t++})),t},toArray:function(e){return E(e,(function(e){return e}))||[]},only:function(e){if(!w(e))throw Error(d(143));return e}},t.Component=h,t.PureComponent=v,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,t.cloneElement=function(e,t,r){if(null==e)throw Error(d(267,e));var c=n({},e.props),u=e.key,i=e.ref,a=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,a=g.current),void 0!==t.key&&(u=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(f in t)_.call(t,f)&&!k.hasOwnProperty(f)&&(c[f]=void 0===t[f]&&void 0!==s?s[f]:t[f])}var f=arguments.length-2;if(1===f)c.children=r;else if(1<f){s=Array(f);for(var l=0;l<f;l++)s[l]=arguments[l+2];c.children=s}return{$$typeof:o,type:e.type,key:u,ref:i,props:c,_owner:a}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:i,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},t.createElement=O,t.createFactory=function(e){var t=O.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:a,render:e}},t.isValidElement=w,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:P}},t.memo=function(e,t){return{$$typeof:s,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return R().useCallback(e,t)},t.useContext=function(e,t){return R().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return R().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return R().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return R().useLayoutEffect(e,t)},t.useMemo=function(e,t){return R().useMemo(e,t)},t.useReducer=function(e,t,r){return R().useReducer(e,t,r)},t.useRef=function(e){return R().useRef(e)},t.useState=function(e){return R().useState(e)},t.version="17.0.2"},827378:(e,t,r)=>{e.exports=r(541535)},824246:(e,t,r)=>{e.exports=r(371426)},511151:(e,t,r)=>{r.d(t,{Zo:()=>i,ah:()=>c});var n=r(667294);const o=n.createContext({});function c(e){const t=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const u={};function i({components:e,children:t,disableParentContext:r}){let i;return i=r?"function"==typeof e?e({}):e||u:c(e),n.createElement(o.Provider,{value:i},t)}}}]);