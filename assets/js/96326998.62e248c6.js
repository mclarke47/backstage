/*! For license information please see 96326998.62e248c6.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[775518],{813212:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=r(824246),s=r(511151);const a={id:"v1.1.0",title:"v1.1.0",description:"Backstage Release v1.1.0"},o=void 0,i={id:"releases/v1.1.0",title:"v1.1.0",description:"Backstage Release v1.1.0",source:"@site/../docs/releases/v1.1.0.md",sourceDirName:"releases",slug:"/releases/v1.1.0",permalink:"/docs/releases/v1.1.0",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/releases/v1.1.0.md",tags:[],version:"current",frontMatter:{id:"v1.1.0",title:"v1.1.0",description:"Backstage Release v1.1.0"},sidebar:"releases",previous:{title:"v1.2.0",permalink:"/docs/releases/v1.2.0"},next:{title:"v1.0.0",permalink:"/docs/releases/v1.0.0"}},c={},l=[{value:"Highlights",id:"highlights",level:2},{value:"Auth",id:"auth",level:3},{value:"CLI",id:"cli",level:3},{value:"Kubernetes",id:"kubernetes",level:3},{value:"Permissions",id:"permissions",level:3},{value:"Stack Overflow",id:"stack-overflow",level:3},{value:"Misc",id:"misc",level:3},{value:"Security Fixes",id:"security-fixes",level:2},{value:"Upgrade path",id:"upgrade-path",level:2},{value:"Links and References",id:"links-and-references",level:2}];function u(e){const t=Object.assign({p:"p",a:"a",h2:"h2",h3:"h3",strong:"strong",code:"code",ul:"ul",li:"li"},(0,s.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["These are the release notes for the v1.1.0 release of ",(0,n.jsx)(t.a,{href:"https://backstage.io/",children:"Backstage"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"A huge thanks to the whole team of maintainers and contributors as well as the amazing Backstage Community for the hard work in getting this release developed and done."}),"\n",(0,n.jsx)(t.h2,{id:"highlights",children:"Highlights"}),"\n",(0,n.jsx)(t.h3,{id:"auth",children:"Auth"}),"\n",(0,n.jsxs)(t.p,{children:["The auth ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/auth-backend",children:"backend"})," and ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/auth-node",children:"node package"})," received a few ",(0,n.jsx)(t.strong,{children:"BREAKING"})," changes."]}),"\n",(0,n.jsxs)(t.p,{children:["You are now required to always return a ",(0,n.jsx)(t.code,{children:"token"})," from the result of a sign-in resolver, and all default sign-in resolvers have been removed. This means that you will have to make a conscious choice to use one of a few predefined resolver functions to be able to use a given auth provider for signing in, or to write your own. Don\u2019t worry, it\u2019s actually rather straightforward to do, and ends up clarifying responsibilities for safe authentication and catalog ownership."]}),"\n",(0,n.jsx)(t.p,{children:"There are also a number of deprecations among the exported auth backend types, which you may want to adapt to."}),"\n",(0,n.jsxs)(t.p,{children:["For more information, see the relevant ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/auth/identity-resolver",children:"documentation section"})," about sign-in resolvers, and the ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/master/plugins/auth-backend/CHANGELOG.md#0130",children:"backend"}),"/",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/master/plugins/auth-node/CHANGELOG.md#020",children:"node"})," changelogs."]}),"\n",(0,n.jsx)(t.h3,{id:"cli",children:"CLI"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/packages/cli",children:"CLI"})," has bumped the ",(0,n.jsx)(t.code,{children:"jest"})," version from ",(0,n.jsx)(t.code,{children:"^26.0.1"})," to ",(0,n.jsx)(t.code,{children:"^27.5.1"}),". You can find the complete list of breaking changes ",(0,n.jsx)(t.a,{href:"https://github.com/facebook/jest/releases/tag/v27.0.0",children:"here"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["We strongly recommend having completed the ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/tutorials/package-role-migration",children:"package role migration"})," before upgrading to this version, as the package roles are used to automatically determine the testing environment for each package."]}),"\n",(0,n.jsxs)(t.p,{children:["Note that one of the breaking changes of Jest 27 is that the ",(0,n.jsx)(t.code,{children:"jsdom"})," environment no longer includes ",(0,n.jsx)(t.code,{children:"setImmediate"})," and ",(0,n.jsx)(t.code,{children:"clearImmediate"}),", which means you might need to update some of your frontend packages. Another notable change is that ",(0,n.jsx)(t.code,{children:"jest.useFakeTimers"})," now defaults to the ",(0,n.jsx)(t.code,{children:"'modern'"})," implementation, which also mocks microtasks."]}),"\n",(0,n.jsx)(t.h3,{id:"kubernetes",children:"Kubernetes"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/kubernetes-backend",children:"Kubernetes backend"})," has a ",(0,n.jsx)(t.strong,{children:"BREAKING"})," change, in that cluster suppliers now need to cache their results to allow frequent calls to their methods. This was done to pave the way for custom suppliers that dynamically fetch results from the real authority, instead of hard coding them in config. Thanks ",(0,n.jsx)(t.a,{href:"https://github.com/heyLu",children:"@heyLu"}),"! (",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/10428",children:"#10428"}),")"]}),"\n",(0,n.jsx)(t.h3,{id:"permissions",children:"Permissions"}),"\n",(0,n.jsxs)(t.p,{children:["The permission related packages received a number of ",(0,n.jsx)(t.strong,{children:"BREAKING"})," changes. Among other things, the names of types were settled to be made more crisp and clear. This will mostly apply to those who write custom permissions. This all goes to the ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/master/plugins/permission-common/CHANGELOG.md#060",children:"common"}),", ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/master/plugins/permission-node/CHANGELOG.md#060",children:"node"}),", and ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/master/plugins/permission-react/CHANGELOG.md#040",children:"react"})," packages, whose changelogs are linked here."]}),"\n",(0,n.jsx)(t.h3,{id:"stack-overflow",children:"Stack Overflow"}),"\n",(0,n.jsxs)(t.p,{children:["There\u2019s a new Stack Overflow ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/stack-overflow",children:"frontend"})," plugin with a corresponding [backend](",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/stack-overflow-backend%5D",children:"https://github.com/backstage/backstage/tree/master/plugins/stack-overflow-backend]"}),"!"]}),"\n",(0,n.jsx)(t.h3,{id:"misc",children:"Misc"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/cicd-statistics",children:"CI/CD Statistics plugin"})," now has GitLab support, through the new ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/cicd-statistics-module-gitlab",children:"GitLab module"}),". Thanks ",(0,n.jsx)(t.a,{href:"https://github.com/djamaile",children:"@djamaile"}),"! (",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/10140",children:"#10140"}),")"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["The catalog ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/catalog-backend-module-aws",children:"AWS module"})," added a new ",(0,n.jsx)(t.code,{children:"AwsS3EntityProvider"})," as a replacement for the ",(0,n.jsx)(t.code,{children:"AwsS3DiscoveryProcessor"}),". Thanks ",(0,n.jsx)(t.a,{href:"https://github.com/pjungermann",children:"@pjungermann"}),"! (",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/10480",children:"#10480"}),")"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["The permissions-related exports from the catalog backend have some ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/master/plugins/catalog-backend/CHANGELOG.md#110",children:"breaking changes"}),". These are all in alpha still, so this only applies to you if you are developing catalog permissions and import from ",(0,n.jsx)(t.code,{children:"@backstage/plugin-catalog-backend/alpha"}),"."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"security-fixes",children:"Security Fixes"}),"\n",(0,n.jsx)(t.p,{children:"This release does not contain any security fixes."}),"\n",(0,n.jsx)(t.h2,{id:"upgrade-path",children:"Upgrade path"}),"\n",(0,n.jsxs)(t.p,{children:["We recommend that you keep your Backstage project up to date with this latest release. For more guidance on how to upgrade, check out the documentation for ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/getting-started/keeping-backstage-updated",children:"keeping Backstage updated"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"links-and-references",children:"Links and References"}),"\n",(0,n.jsx)(t.p,{children:"Below you can find a list of links and references to help you learn about and start using this new release."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://backstage.io/",children:"Backstage official website"}),", ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/",children:"documentation"}),", and ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/getting-started/",children:"getting started guide"})]}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage",children:"GitHub repository"})}),"\n",(0,n.jsxs)(t.li,{children:["Backstage's ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/overview/versioning-policy",children:"versioning and support policy"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://discord.gg/backstage-687207715902193673",children:"Community Discord"})," for discussions and support"]}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/docs/releases/v1.1.0-changelog.md",children:"Changelog"})}),"\n",(0,n.jsxs)(t.li,{children:["Backstage ",(0,n.jsx)(t.a,{href:"https://backstage.io/demos",children:"Demos"}),", ",(0,n.jsx)(t.a,{href:"https://backstage.io/blog",children:"Blog"}),", ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/overview/roadmap",children:"Roadmap"})," and ",(0,n.jsx)(t.a,{href:"https://backstage.io/plugins",children:"Plugins"})]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Sign up for our ",(0,n.jsx)(t.a,{href:"https://mailchi.mp/spotify/backstage-community",children:"newsletter"})," if you want to be informed about what is happening in the world of Backstage."]})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,s.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(u,e)})):u(e)}},862525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(s){return!1}}()?Object.assign:function(e,s){for(var a,o,i=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),c=1;c<arguments.length;c++){for(var l in a=Object(arguments[c]))r.call(a,l)&&(i[l]=a[l]);if(t){o=t(a);for(var u=0;u<o.length;u++)n.call(a,o[u])&&(i[o[u]]=a[o[u]])}}return i}},371426:(e,t,r)=>{r(862525);var n=r(827378),s=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var a=Symbol.for;s=a("react.element"),t.Fragment=a("react.fragment")}var o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,r){var n,a={},l=null,u=null;for(n in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)i.call(t,n)&&!c.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===a[n]&&(a[n]=t[n]);return{$$typeof:s,type:e,key:l,ref:u,props:a,_owner:o.current}}t.jsx=l,t.jsxs=l},541535:(e,t,r)=>{var n=r(862525),s=60103,a=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var o=60109,i=60110,c=60112;t.Suspense=60113;var l=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var h=Symbol.for;s=h("react.element"),a=h("react.portal"),t.Fragment=h("react.fragment"),t.StrictMode=h("react.strict_mode"),t.Profiler=h("react.profiler"),o=h("react.provider"),i=h("react.context"),c=h("react.forward_ref"),t.Suspense=h("react.suspense"),l=h("react.memo"),u=h("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function p(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function m(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||f}function b(){}function k(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||f}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(p(85));this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=m.prototype;var y=k.prototype=new b;y.constructor=k,n(y,m.prototype),y.isPureReactComponent=!0;var v={current:null},j=Object.prototype.hasOwnProperty,x={key:!0,ref:!0,__self:!0,__source:!0};function w(e,t,r){var n,a={},o=null,i=null;if(null!=t)for(n in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(o=""+t.key),t)j.call(t,n)&&!x.hasOwnProperty(n)&&(a[n]=t[n]);var c=arguments.length-2;if(1===c)a.children=r;else if(1<c){for(var l=Array(c),u=0;u<c;u++)l[u]=arguments[u+2];a.children=l}if(e&&e.defaultProps)for(n in c=e.defaultProps)void 0===a[n]&&(a[n]=c[n]);return{$$typeof:s,type:e,key:o,ref:i,props:a,_owner:v.current}}function _(e){return"object"==typeof e&&null!==e&&e.$$typeof===s}var O=/\/+/g;function C(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function S(e,t,r,n,o){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var c=!1;if(null===e)c=!0;else switch(i){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case s:case a:c=!0}}if(c)return o=o(c=e),e=""===n?"."+C(c,0):n,Array.isArray(o)?(r="",null!=e&&(r=e.replace(O,"$&/")+"/"),S(o,t,r,"",(function(e){return e}))):null!=o&&(_(o)&&(o=function(e,t){return{$$typeof:s,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(o,r+(!o.key||c&&c.key===o.key?"":(""+o.key).replace(O,"$&/")+"/")+e)),t.push(o)),1;if(c=0,n=""===n?".":n+":",Array.isArray(e))for(var l=0;l<e.length;l++){var u=n+C(i=e[l],l);c+=S(i,t,r,u,o)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),l=0;!(i=e.next()).done;)c+=S(i=i.value,t,r,u=n+C(i,l++),o);else if("object"===i)throw t=""+e,Error(p(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return c}function E(e,t,r){if(null==e)return e;var n=[],s=0;return S(e,n,"","",(function(e){return t.call(r,e,s++)})),n}function R(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var P={current:null};function T(){var e=P.current;if(null===e)throw Error(p(321));return e}var A={ReactCurrentDispatcher:P,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:v,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:E,forEach:function(e,t,r){E(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return E(e,(function(){t++})),t},toArray:function(e){return E(e,(function(e){return e}))||[]},only:function(e){if(!_(e))throw Error(p(143));return e}},t.Component=m,t.PureComponent=k,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A,t.cloneElement=function(e,t,r){if(null==e)throw Error(p(267,e));var a=n({},e.props),o=e.key,i=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,c=v.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in t)j.call(t,u)&&!x.hasOwnProperty(u)&&(a[u]=void 0===t[u]&&void 0!==l?l[u]:t[u])}var u=arguments.length-2;if(1===u)a.children=r;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];a.children=l}return{$$typeof:s,type:e.type,key:o,ref:i,props:a,_owner:c}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:i,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:o,_context:e},e.Consumer=e},t.createElement=w,t.createFactory=function(e){var t=w.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=_,t.lazy=function(e){return{$$typeof:u,_payload:{_status:-1,_result:e},_init:R}},t.memo=function(e,t){return{$$typeof:l,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return T().useCallback(e,t)},t.useContext=function(e,t){return T().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return T().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return T().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return T().useLayoutEffect(e,t)},t.useMemo=function(e,t){return T().useMemo(e,t)},t.useReducer=function(e,t,r){return T().useReducer(e,t,r)},t.useRef=function(e){return T().useRef(e)},t.useState=function(e){return T().useState(e)},t.version="17.0.2"},827378:(e,t,r)=>{e.exports=r(541535)},824246:(e,t,r)=>{e.exports=r(371426)},511151:(e,t,r)=>{r.d(t,{Zo:()=>i,ah:()=>a});var n=r(667294);const s=n.createContext({});function a(e){const t=n.useContext(s);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const o={};function i({components:e,children:t,disableParentContext:r}){let i;return i=r?"function"==typeof e?e({}):e||o:a(e),n.createElement(s.Provider,{value:i},t)}}}]);