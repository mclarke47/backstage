/*! For license information please see 73dc8a15.64b78e8f.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[955516],{977608:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var t=n(824246),i=n(511151);const s={id:"plugin-permission-react",title:"@backstage/plugin-permission-react",description:"API Reference for @backstage/plugin-permission-react"},o=void 0,c={id:"reference/plugin-permission-react",title:"@backstage/plugin-permission-react",description:"API Reference for @backstage/plugin-permission-react",source:"@site/../docs/reference/plugin-permission-react.md",sourceDirName:"reference",slug:"/reference/plugin-permission-react",permalink:"/docs/reference/plugin-permission-react",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-permission-react.md",tags:[],version:"current",frontMatter:{id:"plugin-permission-react",title:"@backstage/plugin-permission-react",description:"API Reference for @backstage/plugin-permission-react"}},a={},l=[{value:"Classes",id:"classes",level:2},{value:"Functions",id:"functions",level:2},{value:"Variables",id:"variables",level:2},{value:"Type Aliases",id:"type-aliases",level:2}];function u(e){const r=Object.assign({p:"p",a:"a",code:"code",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,i.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-permission-react",children:(0,t.jsx)(r.code,{children:"@backstage/plugin-permission-react"})})]}),"\n",(0,t.jsx)(r.h2,{id:"classes",children:"Classes"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Class"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-permission-react.identitypermissionapi",children:"IdentityPermissionApi"})}),(0,t.jsxs)(r.td,{children:["The default implementation of the PermissionApi, which simply calls the authorize method of the given ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-permission-common.permissionclient",children:"PermissionClient"}),"."]})]})})]}),"\n",(0,t.jsx)(r.h2,{id:"functions",children:"Functions"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Function"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-permission-react.requirepermission",children:"RequirePermission(props)"})}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.p,{children:"A boundary that only renders its child elements if the user has the specified permission."}),(0,t.jsxs)(r.p,{children:["While loading, nothing will be rendered. If the user does not have permission, the ",(0,t.jsx)(r.code,{children:"errorPage"})," element will be rendered, falling back to the ",(0,t.jsx)(r.code,{children:"NotFoundErrorPage"})," app component if no ",(0,t.jsx)(r.code,{children:"errorPage"})," is provider."]})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-permission-react.usepermission",children:"usePermission(input)"})}),(0,t.jsxs)(r.td,{children:[(0,t.jsxs)(r.p,{children:["React hook utility for authorization. Given either a non-resource ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-permission-common.permission",children:"Permission"})," or a ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-permission-common.resourcepermission",children:"ResourcePermission"})," and an optional resourceRef, it will return whether or not access is allowed (for the given resource, if resourceRef is provided). See  for more details."]}),(0,t.jsxs)(r.p,{children:["The resourceRef field is optional to allow calling this hook with an entity that might be loading asynchronously, but when resourceRef is not supplied, the value of ",(0,t.jsx)(r.code,{children:"allowed"})," will always be false."]}),(0,t.jsxs)(r.p,{children:["Note: This hook uses stale-while-revalidate to help avoid flicker in UI elements that would be conditionally rendered based on the ",(0,t.jsx)(r.code,{children:"allowed"})," result of this hook."]})]})]})]})]}),"\n",(0,t.jsx)(r.h2,{id:"variables",children:"Variables"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Variable"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-permission-react.permissionapiref",children:"permissionApiRef"})}),(0,t.jsxs)(r.td,{children:["A Backstage ApiRef for the Permission API. See ",(0,t.jsx)(r.a,{href:"https://backstage.io/docs/api/utility-apis",children:"https://backstage.io/docs/api/utility-apis"})," for more information on Backstage ApiRefs."]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-permission-react.permissionedroute",children:"PermissionedRoute"})}),(0,t.jsxs)(r.td,{children:["Returns a React Router Route which only renders the element when authorized. If unauthorized, the Route will render a NotFoundErrorPage (see ",(0,t.jsx)(r.a,{href:"/docs/reference/core-app-api.appcomponents",children:"AppComponents"}),")."]})]})]})]}),"\n",(0,t.jsx)(r.h2,{id:"type-aliases",children:"Type Aliases"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Type Alias"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-permission-react.asyncpermissionresult",children:"AsyncPermissionResult"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-permission-react.permissionapi",children:"PermissionApi"})}),(0,t.jsx)(r.td,{children:"This API is used by various frontend utilities that allow developers to implement authorization within their frontend plugins. A plugin developer will likely not have to interact with this API or its implementations directly, but rather with the aforementioned utility components/hooks."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-permission-react.requirepermissionprops",children:"RequirePermissionProps"})}),(0,t.jsxs)(r.td,{children:["Properties for ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-permission-react.requirepermission",children:"RequirePermission()"})]})]})]})]})]})}const d=function(e={}){const{wrapper:r}=Object.assign({},(0,i.ah)(),e.components);return r?(0,t.jsx)(r,Object.assign({},e,{children:(0,t.jsx)(u,e)})):u(e)}},862525:e=>{var r=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},n=0;n<10;n++)r["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var t={};return"abcdefghijklmnopqrst".split("").forEach((function(e){t[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},t)).join("")}catch(i){return!1}}()?Object.assign:function(e,i){for(var s,o,c=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),a=1;a<arguments.length;a++){for(var l in s=Object(arguments[a]))n.call(s,l)&&(c[l]=s[l]);if(r){o=r(s);for(var u=0;u<o.length;u++)t.call(s,o[u])&&(c[o[u]]=s[o[u]])}}return c}},371426:(e,r,n)=>{n(862525);var t=n(827378),i=60103;if(r.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var s=Symbol.for;i=s("react.element"),r.Fragment=s("react.fragment")}var o=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c=Object.prototype.hasOwnProperty,a={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,n){var t,s={},l=null,u=null;for(t in void 0!==n&&(l=""+n),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(u=r.ref),r)c.call(r,t)&&!a.hasOwnProperty(t)&&(s[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===s[t]&&(s[t]=r[t]);return{$$typeof:i,type:e,key:l,ref:u,props:s,_owner:o.current}}r.jsx=l,r.jsxs=l},541535:(e,r,n)=>{var t=n(862525),i=60103,s=60106;r.Fragment=60107,r.StrictMode=60108,r.Profiler=60114;var o=60109,c=60110,a=60112;r.Suspense=60113;var l=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var d=Symbol.for;i=d("react.element"),s=d("react.portal"),r.Fragment=d("react.fragment"),r.StrictMode=d("react.strict_mode"),r.Profiler=d("react.profiler"),o=d("react.provider"),c=d("react.context"),a=d("react.forward_ref"),r.Suspense=d("react.suspense"),l=d("react.memo"),u=d("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function p(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)r+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function y(e,r,n){this.props=e,this.context=r,this.refs=m,this.updater=n||h}function j(){}function g(e,r,n){this.props=e,this.context=r,this.refs=m,this.updater=n||h}y.prototype.isReactComponent={},y.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(p(85));this.updater.enqueueSetState(this,e,r,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},j.prototype=y.prototype;var x=g.prototype=new j;x.constructor=g,t(x,y.prototype),x.isPureReactComponent=!0;var b={current:null},v=Object.prototype.hasOwnProperty,_={key:!0,ref:!0,__self:!0,__source:!0};function w(e,r,n){var t,s={},o=null,c=null;if(null!=r)for(t in void 0!==r.ref&&(c=r.ref),void 0!==r.key&&(o=""+r.key),r)v.call(r,t)&&!_.hasOwnProperty(t)&&(s[t]=r[t]);var a=arguments.length-2;if(1===a)s.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];s.children=l}if(e&&e.defaultProps)for(t in a=e.defaultProps)void 0===s[t]&&(s[t]=a[t]);return{$$typeof:i,type:e,key:o,ref:c,props:s,_owner:b.current}}function k(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var P=/\/+/g;function R(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function O(e,r,n,t,o){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var a=!1;if(null===e)a=!0;else switch(c){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case i:case s:a=!0}}if(a)return o=o(a=e),e=""===t?"."+R(a,0):t,Array.isArray(o)?(n="",null!=e&&(n=e.replace(P,"$&/")+"/"),O(o,r,n,"",(function(e){return e}))):null!=o&&(k(o)&&(o=function(e,r){return{$$typeof:i,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(o,n+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(P,"$&/")+"/")+e)),r.push(o)),1;if(a=0,t=""===t?".":t+":",Array.isArray(e))for(var l=0;l<e.length;l++){var u=t+R(c=e[l],l);a+=O(c,r,n,u,o)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),l=0;!(c=e.next()).done;)a+=O(c=c.value,r,n,u=t+R(c,l++),o);else if("object"===c)throw r=""+e,Error(p(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r));return a}function C(e,r,n){if(null==e)return e;var t=[],i=0;return O(e,t,"","",(function(e){return r.call(n,e,i++)})),t}function S(e){if(-1===e._status){var r=e._result;r=r(),e._status=0,e._result=r,r.then((function(r){0===e._status&&(r=r.default,e._status=1,e._result=r)}),(function(r){0===e._status&&(e._status=2,e._result=r)}))}if(1===e._status)return e._result;throw e._result}var E={current:null};function A(){var e=E.current;if(null===e)throw Error(p(321));return e}var $={ReactCurrentDispatcher:E,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:b,IsSomeRendererActing:{current:!1},assign:t};r.Children={map:C,forEach:function(e,r,n){C(e,(function(){r.apply(this,arguments)}),n)},count:function(e){var r=0;return C(e,(function(){r++})),r},toArray:function(e){return C(e,(function(e){return e}))||[]},only:function(e){if(!k(e))throw Error(p(143));return e}},r.Component=y,r.PureComponent=g,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,r.cloneElement=function(e,r,n){if(null==e)throw Error(p(267,e));var s=t({},e.props),o=e.key,c=e.ref,a=e._owner;if(null!=r){if(void 0!==r.ref&&(c=r.ref,a=b.current),void 0!==r.key&&(o=""+r.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in r)v.call(r,u)&&!_.hasOwnProperty(u)&&(s[u]=void 0===r[u]&&void 0!==l?l[u]:r[u])}var u=arguments.length-2;if(1===u)s.children=n;else if(1<u){l=Array(u);for(var d=0;d<u;d++)l[d]=arguments[d+2];s.children=l}return{$$typeof:i,type:e.type,key:o,ref:c,props:s,_owner:a}},r.createContext=function(e,r){return void 0===r&&(r=null),(e={$$typeof:c,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:o,_context:e},e.Consumer=e},r.createElement=w,r.createFactory=function(e){var r=w.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:a,render:e}},r.isValidElement=k,r.lazy=function(e){return{$$typeof:u,_payload:{_status:-1,_result:e},_init:S}},r.memo=function(e,r){return{$$typeof:l,type:e,compare:void 0===r?null:r}},r.useCallback=function(e,r){return A().useCallback(e,r)},r.useContext=function(e,r){return A().useContext(e,r)},r.useDebugValue=function(){},r.useEffect=function(e,r){return A().useEffect(e,r)},r.useImperativeHandle=function(e,r,n){return A().useImperativeHandle(e,r,n)},r.useLayoutEffect=function(e,r){return A().useLayoutEffect(e,r)},r.useMemo=function(e,r){return A().useMemo(e,r)},r.useReducer=function(e,r,n){return A().useReducer(e,r,n)},r.useRef=function(e){return A().useRef(e)},r.useState=function(e){return A().useState(e)},r.version="17.0.2"},827378:(e,r,n)=>{e.exports=n(541535)},824246:(e,r,n)=>{e.exports=n(371426)},511151:(e,r,n)=>{n.d(r,{Zo:()=>c,ah:()=>s});var t=n(667294);const i=t.createContext({});function s(e){const r=t.useContext(i);return t.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const o={};function c({components:e,children:r,disableParentContext:n}){let c;return c=n?"function"==typeof e?e({}):e||o:s(e),t.createElement(i.Provider,{value:c},r)}}}]);