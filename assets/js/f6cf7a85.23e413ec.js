/*! For license information please see f6cf7a85.23e413ec.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[393589],{559389:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>u,default:()=>l,frontMatter:()=>c,metadata:()=>s,toc:()=>i});var n=t(824246),o=t(511151);const c={id:"plugin-techdocs.techdocssearch",title:"TechDocsSearch",description:"API reference for TechDocsSearch"},u=void 0,s={id:"reference/plugin-techdocs.techdocssearch",title:"TechDocsSearch",description:"API reference for TechDocsSearch",source:"@site/../docs/reference/plugin-techdocs.techdocssearch.md",sourceDirName:"reference",slug:"/reference/plugin-techdocs.techdocssearch",permalink:"/docs/reference/plugin-techdocs.techdocssearch",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-techdocs.techdocssearch.md",tags:[],version:"current",frontMatter:{id:"plugin-techdocs.techdocssearch",title:"TechDocsSearch",description:"API reference for TechDocsSearch"}},a={},i=[];function f(e){const r=Object.assign({p:"p",a:"a",code:"code",strong:"strong",pre:"pre"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-techdocs",children:(0,n.jsx)(r.code,{children:"@backstage/plugin-techdocs"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-techdocs.techdocssearch",children:(0,n.jsx)(r.code,{children:"TechDocsSearch"})})]}),"\n",(0,n.jsx)(r.p,{children:"Component used to render search bar on TechDocs page, scoped to"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"TechDocsSearch: (props: TechDocsSearchProps) => React.JSX.Element\n"})})]})}const l=function(e={}){const{wrapper:r}=Object.assign({},(0,o.ah)(),e.components);return r?(0,n.jsx)(r,Object.assign({},e,{children:(0,n.jsx)(f,e)})):f(e)}},862525:e=>{var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var c,u,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),a=1;a<arguments.length;a++){for(var i in c=Object(arguments[a]))t.call(c,i)&&(s[i]=c[i]);if(r){u=r(c);for(var f=0;f<u.length;f++)n.call(c,u[f])&&(s[u[f]]=c[u[f]])}}return s}},371426:(e,r,t)=>{t(862525);var n=t(827378),o=60103;if(r.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var c=Symbol.for;o=c("react.element"),r.Fragment=c("react.fragment")}var u=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,a={key:!0,ref:!0,__self:!0,__source:!0};function i(e,r,t){var n,c={},i=null,f=null;for(n in void 0!==t&&(i=""+t),void 0!==r.key&&(i=""+r.key),void 0!==r.ref&&(f=r.ref),r)s.call(r,n)&&!a.hasOwnProperty(n)&&(c[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===c[n]&&(c[n]=r[n]);return{$$typeof:o,type:e,key:i,ref:f,props:c,_owner:u.current}}r.jsx=i,r.jsxs=i},541535:(e,r,t)=>{var n=t(862525),o=60103,c=60106;r.Fragment=60107,r.StrictMode=60108,r.Profiler=60114;var u=60109,s=60110,a=60112;r.Suspense=60113;var i=60115,f=60116;if("function"==typeof Symbol&&Symbol.for){var l=Symbol.for;o=l("react.element"),c=l("react.portal"),r.Fragment=l("react.fragment"),r.StrictMode=l("react.strict_mode"),r.Profiler=l("react.profiler"),u=l("react.provider"),s=l("react.context"),a=l("react.forward_ref"),r.Suspense=l("react.suspense"),i=l("react.memo"),f=l("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function m(e,r,t){this.props=e,this.context=r,this.refs=y,this.updater=t||h}function v(){}function g(e,r,t){this.props=e,this.context=r,this.refs=y,this.updater=t||h}m.prototype.isReactComponent={},m.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,r,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=m.prototype;var _=g.prototype=new v;_.constructor=g,n(_,m.prototype),_.isPureReactComponent=!0;var b={current:null},j=Object.prototype.hasOwnProperty,S={key:!0,ref:!0,__self:!0,__source:!0};function O(e,r,t){var n,c={},u=null,s=null;if(null!=r)for(n in void 0!==r.ref&&(s=r.ref),void 0!==r.key&&(u=""+r.key),r)j.call(r,n)&&!S.hasOwnProperty(n)&&(c[n]=r[n]);var a=arguments.length-2;if(1===a)c.children=t;else if(1<a){for(var i=Array(a),f=0;f<a;f++)i[f]=arguments[f+2];c.children=i}if(e&&e.defaultProps)for(n in a=e.defaultProps)void 0===c[n]&&(c[n]=a[n]);return{$$typeof:o,type:e,key:u,ref:s,props:c,_owner:b.current}}function k(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var w=/\/+/g;function x(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function C(e,r,t,n,u){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var a=!1;if(null===e)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case o:case c:a=!0}}if(a)return u=u(a=e),e=""===n?"."+x(a,0):n,Array.isArray(u)?(t="",null!=e&&(t=e.replace(w,"$&/")+"/"),C(u,r,t,"",(function(e){return e}))):null!=u&&(k(u)&&(u=function(e,r){return{$$typeof:o,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(u,t+(!u.key||a&&a.key===u.key?"":(""+u.key).replace(w,"$&/")+"/")+e)),r.push(u)),1;if(a=0,n=""===n?".":n+":",Array.isArray(e))for(var i=0;i<e.length;i++){var f=n+x(s=e[i],i);a+=C(s,r,t,f,u)}else if(f=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof f)for(e=f.call(e),i=0;!(s=e.next()).done;)a+=C(s=s.value,r,t,f=n+x(s,i++),u);else if("object"===s)throw r=""+e,Error(d(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r));return a}function E(e,r,t){if(null==e)return e;var n=[],o=0;return C(e,n,"","",(function(e){return r.call(t,e,o++)})),n}function P(e){if(-1===e._status){var r=e._result;r=r(),e._status=0,e._result=r,r.then((function(r){0===e._status&&(r=r.default,e._status=1,e._result=r)}),(function(r){0===e._status&&(e._status=2,e._result=r)}))}if(1===e._status)return e._result;throw e._result}var R={current:null};function $(){var e=R.current;if(null===e)throw Error(d(321));return e}var T={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:b,IsSomeRendererActing:{current:!1},assign:n};r.Children={map:E,forEach:function(e,r,t){E(e,(function(){r.apply(this,arguments)}),t)},count:function(e){var r=0;return E(e,(function(){r++})),r},toArray:function(e){return E(e,(function(e){return e}))||[]},only:function(e){if(!k(e))throw Error(d(143));return e}},r.Component=m,r.PureComponent=g,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,r.cloneElement=function(e,r,t){if(null==e)throw Error(d(267,e));var c=n({},e.props),u=e.key,s=e.ref,a=e._owner;if(null!=r){if(void 0!==r.ref&&(s=r.ref,a=b.current),void 0!==r.key&&(u=""+r.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(f in r)j.call(r,f)&&!S.hasOwnProperty(f)&&(c[f]=void 0===r[f]&&void 0!==i?i[f]:r[f])}var f=arguments.length-2;if(1===f)c.children=t;else if(1<f){i=Array(f);for(var l=0;l<f;l++)i[l]=arguments[l+2];c.children=i}return{$$typeof:o,type:e.type,key:u,ref:s,props:c,_owner:a}},r.createContext=function(e,r){return void 0===r&&(r=null),(e={$$typeof:s,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},r.createElement=O,r.createFactory=function(e){var r=O.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:a,render:e}},r.isValidElement=k,r.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:P}},r.memo=function(e,r){return{$$typeof:i,type:e,compare:void 0===r?null:r}},r.useCallback=function(e,r){return $().useCallback(e,r)},r.useContext=function(e,r){return $().useContext(e,r)},r.useDebugValue=function(){},r.useEffect=function(e,r){return $().useEffect(e,r)},r.useImperativeHandle=function(e,r,t){return $().useImperativeHandle(e,r,t)},r.useLayoutEffect=function(e,r){return $().useLayoutEffect(e,r)},r.useMemo=function(e,r){return $().useMemo(e,r)},r.useReducer=function(e,r,t){return $().useReducer(e,r,t)},r.useRef=function(e){return $().useRef(e)},r.useState=function(e){return $().useState(e)},r.version="17.0.2"},827378:(e,r,t)=>{e.exports=t(541535)},824246:(e,r,t)=>{e.exports=t(371426)},511151:(e,r,t)=>{t.d(r,{Zo:()=>s,ah:()=>c});var n=t(667294);const o=n.createContext({});function c(e){const r=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const u={};function s({components:e,children:r,disableParentContext:t}){let s;return s=t?"function"==typeof e?e({}):e||u:c(e),n.createElement(o.Provider,{value:s},r)}}}]);