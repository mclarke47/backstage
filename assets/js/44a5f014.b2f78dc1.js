/*! For license information please see 44a5f014.b2f78dc1.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[611864],{26246:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var n=t(824246),o=t(511151);const i={id:"core-app-api.apifactoryregistry",title:"ApiFactoryRegistry",description:"API reference for ApiFactoryRegistry"},a=void 0,c={unversionedId:"reference/core-app-api.apifactoryregistry",id:"reference/core-app-api.apifactoryregistry",title:"ApiFactoryRegistry",description:"API reference for ApiFactoryRegistry",source:"@site/../docs/reference/core-app-api.apifactoryregistry.md",sourceDirName:"reference",slug:"/reference/core-app-api.apifactoryregistry",permalink:"/docs/reference/core-app-api.apifactoryregistry",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/core-app-api.apifactoryregistry.md",tags:[],version:"current",frontMatter:{id:"core-app-api.apifactoryregistry",title:"ApiFactoryRegistry",description:"API reference for ApiFactoryRegistry"}},s={},u=[{value:"Methods",id:"methods",level:2}];function f(e){const r=Object.assign({p:"p",a:"a",code:"code",pre:"pre",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/core-app-api",children:(0,n.jsx)(r.code,{children:"@backstage/core-app-api"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/core-app-api.apifactoryregistry",children:(0,n.jsx)(r.code,{children:"ApiFactoryRegistry"})})]}),"\n",(0,n.jsx)(r.p,{children:"ApiFactoryRegistry is an ApiFactoryHolder implementation that enables registration of API Factories with different scope."}),"\n",(0,n.jsx)(r.p,{children:"Each scope has an assigned priority, where factories registered with higher priority scopes override ones with lower priority."}),"\n",(0,n.jsx)(r.p,{children:"Signature:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"class ApiFactoryRegistry implements ApiFactoryHolder \n"})}),"\n",(0,n.jsxs)(r.p,{children:["Implements:"," ",(0,n.jsx)(r.a,{href:"/docs/reference/core-app-api.apifactoryholder",children:"ApiFactoryHolder"})]}),"\n",(0,n.jsx)(r.h2,{id:"methods",children:"Methods"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Method"}),(0,n.jsx)(r.th,{children:"Modifiers"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/reference/core-app-api.apifactoryregistry.get",children:"get(api)"})}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/reference/core-app-api.apifactoryregistry.getallapis",children:"getAllApis()"})}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/reference/core-app-api.apifactoryregistry.register",children:"register(scope, factory)"})}),(0,n.jsx)(r.td,{}),(0,n.jsxs)(r.td,{children:["Register a new API factory. Returns true if the factory was added to the registry.","A factory will not be added to the registry if there is already an existing factory with the same or higher priority."]})]})]})]})]})}const p=function(e={}){const{wrapper:r}=Object.assign({},(0,o.ah)(),e.components);return r?(0,n.jsx)(r,Object.assign({},e,{children:(0,n.jsx)(f,e)})):f(e)}},862525:e=>{var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var i,a,c=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),s=1;s<arguments.length;s++){for(var u in i=Object(arguments[s]))t.call(i,u)&&(c[u]=i[u]);if(r){a=r(i);for(var f=0;f<a.length;f++)n.call(i,a[f])&&(c[a[f]]=i[a[f]])}}return c}},371426:(e,r,t)=>{t(862525);var n=t(827378),o=60103;if(r.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var i=Symbol.for;o=i("react.element"),r.Fragment=i("react.fragment")}var a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c=Object.prototype.hasOwnProperty,s={key:!0,ref:!0,__self:!0,__source:!0};function u(e,r,t){var n,i={},u=null,f=null;for(n in void 0!==t&&(u=""+t),void 0!==r.key&&(u=""+r.key),void 0!==r.ref&&(f=r.ref),r)c.call(r,n)&&!s.hasOwnProperty(n)&&(i[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===i[n]&&(i[n]=r[n]);return{$$typeof:o,type:e,key:u,ref:f,props:i,_owner:a.current}}r.jsx=u,r.jsxs=u},541535:(e,r,t)=>{var n=t(862525),o=60103,i=60106;r.Fragment=60107,r.StrictMode=60108,r.Profiler=60114;var a=60109,c=60110,s=60112;r.Suspense=60113;var u=60115,f=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;o=p("react.element"),i=p("react.portal"),r.Fragment=p("react.fragment"),r.StrictMode=p("react.strict_mode"),r.Profiler=p("react.profiler"),a=p("react.provider"),c=p("react.context"),s=p("react.forward_ref"),r.Suspense=p("react.suspense"),u=p("react.memo"),f=p("react.lazy")}var l="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function g(e,r,t){this.props=e,this.context=r,this.refs=h,this.updater=t||y}function m(){}function j(e,r,t){this.props=e,this.context=r,this.refs=h,this.updater=t||y}g.prototype.isReactComponent={},g.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,r,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=g.prototype;var v=j.prototype=new m;v.constructor=j,n(v,g.prototype),v.isPureReactComponent=!0;var b={current:null},_=Object.prototype.hasOwnProperty,x={key:!0,ref:!0,__self:!0,__source:!0};function w(e,r,t){var n,i={},a=null,c=null;if(null!=r)for(n in void 0!==r.ref&&(c=r.ref),void 0!==r.key&&(a=""+r.key),r)_.call(r,n)&&!x.hasOwnProperty(n)&&(i[n]=r[n]);var s=arguments.length-2;if(1===s)i.children=t;else if(1<s){for(var u=Array(s),f=0;f<s;f++)u[f]=arguments[f+2];i.children=u}if(e&&e.defaultProps)for(n in s=e.defaultProps)void 0===i[n]&&(i[n]=s[n]);return{$$typeof:o,type:e,key:a,ref:c,props:i,_owner:b.current}}function O(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var k=/\/+/g;function R(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function S(e,r,t,n,a){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var s=!1;if(null===e)s=!0;else switch(c){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case o:case i:s=!0}}if(s)return a=a(s=e),e=""===n?"."+R(s,0):n,Array.isArray(a)?(t="",null!=e&&(t=e.replace(k,"$&/")+"/"),S(a,r,t,"",(function(e){return e}))):null!=a&&(O(a)&&(a=function(e,r){return{$$typeof:o,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(a,t+(!a.key||s&&s.key===a.key?"":(""+a.key).replace(k,"$&/")+"/")+e)),r.push(a)),1;if(s=0,n=""===n?".":n+":",Array.isArray(e))for(var u=0;u<e.length;u++){var f=n+R(c=e[u],u);s+=S(c,r,t,f,a)}else if(f=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=l&&e[l]||e["@@iterator"])?e:null}(e),"function"==typeof f)for(e=f.call(e),u=0;!(c=e.next()).done;)s+=S(c=c.value,r,t,f=n+R(c,u++),a);else if("object"===c)throw r=""+e,Error(d(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r));return s}function A(e,r,t){if(null==e)return e;var n=[],o=0;return S(e,n,"","",(function(e){return r.call(t,e,o++)})),n}function E(e){if(-1===e._status){var r=e._result;r=r(),e._status=0,e._result=r,r.then((function(r){0===e._status&&(r=r.default,e._status=1,e._result=r)}),(function(r){0===e._status&&(e._status=2,e._result=r)}))}if(1===e._status)return e._result;throw e._result}var C={current:null};function P(){var e=C.current;if(null===e)throw Error(d(321));return e}var $={ReactCurrentDispatcher:C,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:b,IsSomeRendererActing:{current:!1},assign:n};r.Children={map:A,forEach:function(e,r,t){A(e,(function(){r.apply(this,arguments)}),t)},count:function(e){var r=0;return A(e,(function(){r++})),r},toArray:function(e){return A(e,(function(e){return e}))||[]},only:function(e){if(!O(e))throw Error(d(143));return e}},r.Component=g,r.PureComponent=j,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,r.cloneElement=function(e,r,t){if(null==e)throw Error(d(267,e));var i=n({},e.props),a=e.key,c=e.ref,s=e._owner;if(null!=r){if(void 0!==r.ref&&(c=r.ref,s=b.current),void 0!==r.key&&(a=""+r.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(f in r)_.call(r,f)&&!x.hasOwnProperty(f)&&(i[f]=void 0===r[f]&&void 0!==u?u[f]:r[f])}var f=arguments.length-2;if(1===f)i.children=t;else if(1<f){u=Array(f);for(var p=0;p<f;p++)u[p]=arguments[p+2];i.children=u}return{$$typeof:o,type:e.type,key:a,ref:c,props:i,_owner:s}},r.createContext=function(e,r){return void 0===r&&(r=null),(e={$$typeof:c,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},r.createElement=w,r.createFactory=function(e){var r=w.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:s,render:e}},r.isValidElement=O,r.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:E}},r.memo=function(e,r){return{$$typeof:u,type:e,compare:void 0===r?null:r}},r.useCallback=function(e,r){return P().useCallback(e,r)},r.useContext=function(e,r){return P().useContext(e,r)},r.useDebugValue=function(){},r.useEffect=function(e,r){return P().useEffect(e,r)},r.useImperativeHandle=function(e,r,t){return P().useImperativeHandle(e,r,t)},r.useLayoutEffect=function(e,r){return P().useLayoutEffect(e,r)},r.useMemo=function(e,r){return P().useMemo(e,r)},r.useReducer=function(e,r,t){return P().useReducer(e,r,t)},r.useRef=function(e){return P().useRef(e)},r.useState=function(e){return P().useState(e)},r.version="17.0.2"},827378:(e,r,t)=>{e.exports=t(541535)},824246:(e,r,t)=>{e.exports=t(371426)},511151:(e,r,t)=>{t.d(r,{Zo:()=>c,ah:()=>i});var n=t(667294);const o=n.createContext({});function i(e){const r=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const a={};function c({components:e,children:r,disableParentContext:t}){let c;return c=t?"function"==typeof e?e({}):e||a:i(e),n.createElement(o.Provider,{value:c},r)}}}]);