/*! For license information please see d529acb0.91277eeb.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[291527],{250597:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=n(824246),o=n(511151);const a={id:"linking-local-packages",title:"Linking in Local Packages",description:"How to link in other local packages into your Backstage monorepo"},c=void 0,i={id:"local-dev/linking-local-packages",title:"Linking in Local Packages",description:"How to link in other local packages into your Backstage monorepo",source:"@site/../docs/local-dev/linking-local-packages.md",sourceDirName:"local-dev",slug:"/local-dev/linking-local-packages",permalink:"/docs/local-dev/linking-local-packages",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/local-dev/linking-local-packages.md",tags:[],version:"current",frontMatter:{id:"linking-local-packages",title:"Linking in Local Packages",description:"How to link in other local packages into your Backstage monorepo"},sidebar:"docs",previous:{title:"Commands",permalink:"/docs/local-dev/cli-commands"},next:{title:"Debugging Backstage",permalink:"/docs/local-dev/debugging"}},s={},l=[];function u(e){const t=Object.assign({p:"p",code:"code",pre:"pre"},(0,o.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["It can often be useful to try out changes to the packages in the main Backstage\nrepo within your own app. For example if you want to make modifications to\n",(0,r.jsx)(t.code,{children:"@backstage/core-plugin-api"})," and try them out in your app."]}),"\n",(0,r.jsxs)(t.p,{children:["To link in external packages, add them to your ",(0,r.jsx)(t.code,{children:"package.json"})," and ",(0,r.jsx)(t.code,{children:"lerna.json"}),"\nworkspace paths. These can be either relative or absolute paths with or without\nglobs. For example:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'"packages": [\n  "packages/*",\n  "plugins/*",\n  "../backstage/packages/core-plugin-api", // New path added to work on @backstage/core-plugin-api\n],\n'})}),"\n",(0,r.jsx)(t.p,{children:"Then reinstall packages to make yarn set up symlinks:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"yarn install\n"})}),"\n",(0,r.jsxs)(t.p,{children:["With this in place you can now modify the ",(0,r.jsx)(t.code,{children:"@backstage/core-plugin-api"})," package\nwithin the main repo, and have those changes be reflected and tested in your\napp. Simply run your app using ",(0,r.jsx)(t.code,{children:"yarn dev"})," (or ",(0,r.jsx)(t.code,{children:"yarn start"})," for just frontend) as\nnormal."]}),"\n",(0,r.jsxs)(t.p,{children:["Note that for backend packages you need to make sure that linked packages are\nnot dependencies of any non-linked package. If you for example want to work on\n",(0,r.jsx)(t.code,{children:"@backstage/backend-common"}),", you need to also link in other backend plugins and\npackages that depend on ",(0,r.jsx)(t.code,{children:"@backstage/backend-common"}),", or temporarily disable\nthose plugins in your backend. This is because the transformation of backend\nmodule tree stops whenever a non-local package is encountered, and from that\npoint node will ",(0,r.jsx)(t.code,{children:"require"})," packages directly for that entire module subtree."]}),"\n",(0,r.jsxs)(t.p,{children:["Type checking can also have issues when linking in external packages, since the\nlinked in packages will use the types in the external project and dependency\nversion mismatches between the two projects may cause errors. To fix any of\nthose errors you need to sync versions of the dependencies in the two projects.\nA simple way to do this can be to copy over ",(0,r.jsx)(t.code,{children:"yarn.lock"})," from the external\nproject and run ",(0,r.jsx)(t.code,{children:"yarn install"}),", although this is quite intrusive and can cause\nother issues in existing projects, so use this method with care. It can often be\nbest to simply ignore the type errors, as app serving will work just fine\nanyway."]}),"\n",(0,r.jsxs)(t.p,{children:["Another issue with type checking is that the incremental type cache doesn't\ninvalidate correctly for the linked in packages, causing type checking to not\nreflect changes made to types. You can work around this by either setting\n",(0,r.jsx)(t.code,{children:"compilerOptions.incremental = false"})," in ",(0,r.jsx)(t.code,{children:"tsconfig.json"}),", or by deleting the\ntypes cache folder ",(0,r.jsx)(t.code,{children:"dist-types"})," before running ",(0,r.jsx)(t.code,{children:"yarn tsc"}),"."]})]})}const p=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(u,e)})):u(e)}},862525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var a,c,i=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),s=1;s<arguments.length;s++){for(var l in a=Object(arguments[s]))n.call(a,l)&&(i[l]=a[l]);if(t){c=t(a);for(var u=0;u<c.length;u++)r.call(a,c[u])&&(i[c[u]]=a[c[u]])}}return i}},371426:(e,t,n)=>{n(862525);var r=n(827378),o=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var a=Symbol.for;o=a("react.element"),t.Fragment=a("react.fragment")}var c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,s={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,a={},l=null,u=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)i.call(t,r)&&!s.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:o,type:e,key:l,ref:u,props:a,_owner:c.current}}t.jsx=l,t.jsxs=l},541535:(e,t,n)=>{var r=n(862525),o=60103,a=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var c=60109,i=60110,s=60112;t.Suspense=60113;var l=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;o=p("react.element"),a=p("react.portal"),t.Fragment=p("react.fragment"),t.StrictMode=p("react.strict_mode"),t.Profiler=p("react.profiler"),c=p("react.provider"),i=p("react.context"),s=p("react.forward_ref"),t.Suspense=p("react.suspense"),l=p("react.memo"),u=p("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function g(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||h}function k(){}function m(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||h}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},k.prototype=g.prototype;var v=m.prototype=new k;v.constructor=m,r(v,g.prototype),v.isPureReactComponent=!0;var b={current:null},j=Object.prototype.hasOwnProperty,w={key:!0,ref:!0,__self:!0,__source:!0};function _(e,t,n){var r,a={},c=null,i=null;if(null!=t)for(r in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(c=""+t.key),t)j.call(t,r)&&!w.hasOwnProperty(r)&&(a[r]=t[r]);var s=arguments.length-2;if(1===s)a.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];a.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps)void 0===a[r]&&(a[r]=s[r]);return{$$typeof:o,type:e,key:c,ref:i,props:a,_owner:b.current}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var O=/\/+/g;function S(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function C(e,t,n,r,c){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var s=!1;if(null===e)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case o:case a:s=!0}}if(s)return c=c(s=e),e=""===r?"."+S(s,0):r,Array.isArray(c)?(n="",null!=e&&(n=e.replace(O,"$&/")+"/"),C(c,t,n,"",(function(e){return e}))):null!=c&&(x(c)&&(c=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(c,n+(!c.key||s&&s.key===c.key?"":(""+c.key).replace(O,"$&/")+"/")+e)),t.push(c)),1;if(s=0,r=""===r?".":r+":",Array.isArray(e))for(var l=0;l<e.length;l++){var u=r+S(i=e[l],l);s+=C(i,t,n,u,c)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),l=0;!(i=e.next()).done;)s+=C(i=i.value,t,n,u=r+S(i,l++),c);else if("object"===i)throw t=""+e,Error(d(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return s}function E(e,t,n){if(null==e)return e;var r=[],o=0;return C(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function P(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var $={current:null};function R(){var e=$.current;if(null===e)throw Error(d(321));return e}var I={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:b,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:E,forEach:function(e,t,n){E(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return E(e,(function(){t++})),t},toArray:function(e){return E(e,(function(e){return e}))||[]},only:function(e){if(!x(e))throw Error(d(143));return e}},t.Component=g,t.PureComponent=m,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,t.cloneElement=function(e,t,n){if(null==e)throw Error(d(267,e));var a=r({},e.props),c=e.key,i=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,s=b.current),void 0!==t.key&&(c=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in t)j.call(t,u)&&!w.hasOwnProperty(u)&&(a[u]=void 0===t[u]&&void 0!==l?l[u]:t[u])}var u=arguments.length-2;if(1===u)a.children=n;else if(1<u){l=Array(u);for(var p=0;p<u;p++)l[p]=arguments[p+2];a.children=l}return{$$typeof:o,type:e.type,key:c,ref:i,props:a,_owner:s}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:i,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},t.createElement=_,t.createFactory=function(e){var t=_.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:s,render:e}},t.isValidElement=x,t.lazy=function(e){return{$$typeof:u,_payload:{_status:-1,_result:e},_init:P}},t.memo=function(e,t){return{$$typeof:l,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return R().useCallback(e,t)},t.useContext=function(e,t){return R().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return R().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return R().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return R().useLayoutEffect(e,t)},t.useMemo=function(e,t){return R().useMemo(e,t)},t.useReducer=function(e,t,n){return R().useReducer(e,t,n)},t.useRef=function(e){return R().useRef(e)},t.useState=function(e){return R().useState(e)},t.version="17.0.2"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Zo:()=>i,ah:()=>a});var r=n(667294);const o=r.createContext({});function a(e){const t=r.useContext(o);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const c={};function i({components:e,children:t,disableParentContext:n}){let i;return i=n?"function"==typeof e?e({}):e||c:a(e),r.createElement(o.Provider,{value:i},t)}}}]);