/*! For license information please see 65e0815a.c8d18198.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[817510],{53719:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>f,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var n=r(824246),o=r(511151);const a={id:"app-defaults.createapp",title:"createApp()",description:"API reference for createApp()"},c=void 0,i={unversionedId:"reference/app-defaults.createapp",id:"reference/app-defaults.createapp",title:"createApp()",description:"API reference for createApp()",source:"@site/../docs/reference/app-defaults.createapp.md",sourceDirName:"reference",slug:"/reference/app-defaults.createapp",permalink:"/docs/reference/app-defaults.createapp",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/app-defaults.createapp.md",tags:[],version:"current",frontMatter:{id:"app-defaults.createapp",title:"createApp()",description:"API reference for createApp()"}},s={},u=[{value:"Parameters",id:"parameters",level:2}];function p(e){const t=Object.assign({p:"p",a:"a",code:"code",pre:"pre",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/app-defaults",children:(0,n.jsx)(t.code,{children:"@backstage/app-defaults"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/app-defaults.createapp",children:(0,n.jsx)(t.code,{children:"createApp"})})]}),"\n",(0,n.jsx)(t.p,{children:"Creates a new Backstage App using a default set of components, icons and themes unless they are explicitly provided."}),"\n",(0,n.jsx)(t.p,{children:"Signature:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:'function createApp(options?: Omit<AppOptions, keyof OptionalAppOptions> & OptionalAppOptions): import("@backstage/core-app-api").BackstageApp;\n'})}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameter"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"options"}),(0,n.jsxs)(t.td,{children:["Omit<",(0,n.jsx)(t.a,{href:"/docs/reference/core-app-api.appoptions",children:"AppOptions"}),", keyof ",(0,n.jsx)(t.a,{href:"/docs/reference/app-defaults.optionalappoptions",children:"OptionalAppOptions"}),"> & ",(0,n.jsx)(t.a,{href:"/docs/reference/app-defaults.optionalappoptions",children:"OptionalAppOptions"})]}),(0,n.jsx)(t.td,{children:"(Optional)"})]})})]}),"\n",(0,n.jsx)(t.p,{children:"Returns:"}),"\n",(0,n.jsxs)(t.p,{children:['import("@backstage/core-app-api").',(0,n.jsx)(t.a,{href:"/docs/reference/core-app-api.backstageapp",children:"BackstageApp"})]})]})}const f=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(p,e)})):p(e)}},862525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var a,c,i=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),s=1;s<arguments.length;s++){for(var u in a=Object(arguments[s]))r.call(a,u)&&(i[u]=a[u]);if(t){c=t(a);for(var p=0;p<c.length;p++)n.call(a,c[p])&&(i[c[p]]=a[c[p]])}}return i}},371426:(e,t,r)=>{r(862525);var n=r(827378),o=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var a=Symbol.for;o=a("react.element"),t.Fragment=a("react.fragment")}var c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,s={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,r){var n,a={},u=null,p=null;for(n in void 0!==r&&(u=""+r),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(p=t.ref),t)i.call(t,n)&&!s.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===a[n]&&(a[n]=t[n]);return{$$typeof:o,type:e,key:u,ref:p,props:a,_owner:c.current}}t.jsx=u,t.jsxs=u},541535:(e,t,r)=>{var n=r(862525),o=60103,a=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var c=60109,i=60110,s=60112;t.Suspense=60113;var u=60115,p=60116;if("function"==typeof Symbol&&Symbol.for){var f=Symbol.for;o=f("react.element"),a=f("react.portal"),t.Fragment=f("react.fragment"),t.StrictMode=f("react.strict_mode"),t.Profiler=f("react.profiler"),c=f("react.provider"),i=f("react.context"),s=f("react.forward_ref"),t.Suspense=f("react.suspense"),u=f("react.memo"),p=f("react.lazy")}var l="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function m(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||h}function v(){}function b(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||h}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=m.prototype;var j=b.prototype=new v;j.constructor=b,n(j,m.prototype),j.isPureReactComponent=!0;var _={current:null},g=Object.prototype.hasOwnProperty,O={key:!0,ref:!0,__self:!0,__source:!0};function x(e,t,r){var n,a={},c=null,i=null;if(null!=t)for(n in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(c=""+t.key),t)g.call(t,n)&&!O.hasOwnProperty(n)&&(a[n]=t[n]);var s=arguments.length-2;if(1===s)a.children=r;else if(1<s){for(var u=Array(s),p=0;p<s;p++)u[p]=arguments[p+2];a.children=u}if(e&&e.defaultProps)for(n in s=e.defaultProps)void 0===a[n]&&(a[n]=s[n]);return{$$typeof:o,type:e,key:c,ref:i,props:a,_owner:_.current}}function k(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var w=/\/+/g;function S(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function A(e,t,r,n,c){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var s=!1;if(null===e)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case o:case a:s=!0}}if(s)return c=c(s=e),e=""===n?"."+S(s,0):n,Array.isArray(c)?(r="",null!=e&&(r=e.replace(w,"$&/")+"/"),A(c,t,r,"",(function(e){return e}))):null!=c&&(k(c)&&(c=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(c,r+(!c.key||s&&s.key===c.key?"":(""+c.key).replace(w,"$&/")+"/")+e)),t.push(c)),1;if(s=0,n=""===n?".":n+":",Array.isArray(e))for(var u=0;u<e.length;u++){var p=n+S(i=e[u],u);s+=A(i,t,r,p,c)}else if(p=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=l&&e[l]||e["@@iterator"])?e:null}(e),"function"==typeof p)for(e=p.call(e),u=0;!(i=e.next()).done;)s+=A(i=i.value,t,r,p=n+S(i,u++),c);else if("object"===i)throw t=""+e,Error(d(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return s}function C(e,t,r){if(null==e)return e;var n=[],o=0;return A(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function E(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var P={current:null};function R(){var e=P.current;if(null===e)throw Error(d(321));return e}var $={ReactCurrentDispatcher:P,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:_,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:C,forEach:function(e,t,r){C(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return C(e,(function(){t++})),t},toArray:function(e){return C(e,(function(e){return e}))||[]},only:function(e){if(!k(e))throw Error(d(143));return e}},t.Component=m,t.PureComponent=b,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,t.cloneElement=function(e,t,r){if(null==e)throw Error(d(267,e));var a=n({},e.props),c=e.key,i=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,s=_.current),void 0!==t.key&&(c=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(p in t)g.call(t,p)&&!O.hasOwnProperty(p)&&(a[p]=void 0===t[p]&&void 0!==u?u[p]:t[p])}var p=arguments.length-2;if(1===p)a.children=r;else if(1<p){u=Array(p);for(var f=0;f<p;f++)u[f]=arguments[f+2];a.children=u}return{$$typeof:o,type:e.type,key:c,ref:i,props:a,_owner:s}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:i,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},t.createElement=x,t.createFactory=function(e){var t=x.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:s,render:e}},t.isValidElement=k,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:E}},t.memo=function(e,t){return{$$typeof:u,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return R().useCallback(e,t)},t.useContext=function(e,t){return R().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return R().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return R().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return R().useLayoutEffect(e,t)},t.useMemo=function(e,t){return R().useMemo(e,t)},t.useReducer=function(e,t,r){return R().useReducer(e,t,r)},t.useRef=function(e){return R().useRef(e)},t.useState=function(e){return R().useState(e)},t.version="17.0.2"},827378:(e,t,r)=>{e.exports=r(541535)},824246:(e,t,r)=>{e.exports=r(371426)},511151:(e,t,r)=>{r.d(t,{Zo:()=>i,ah:()=>a});var n=r(667294);const o=n.createContext({});function a(e){const t=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const c={};function i({components:e,children:t,disableParentContext:r}){let i;return i=r?"function"==typeof e?e({}):e||c:a(e),n.createElement(o.Provider,{value:i},t)}}}]);