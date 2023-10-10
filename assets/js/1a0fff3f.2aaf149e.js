/*! For license information please see 1a0fff3f.2aaf149e.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[173702],{521121:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>l,frontMatter:()=>c,metadata:()=>o,toc:()=>a});var t=r(824246),s=r(511151);const c={id:"plugin-kubernetes-backend",title:"@backstage/plugin-kubernetes-backend",description:"API Reference for @backstage/plugin-kubernetes-backend"},i=void 0,o={id:"reference/plugin-kubernetes-backend",title:"@backstage/plugin-kubernetes-backend",description:"API Reference for @backstage/plugin-kubernetes-backend",source:"@site/../docs/reference/plugin-kubernetes-backend.md",sourceDirName:"reference",slug:"/reference/plugin-kubernetes-backend",permalink:"/docs/reference/plugin-kubernetes-backend",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-kubernetes-backend.md",tags:[],version:"current",frontMatter:{id:"plugin-kubernetes-backend",title:"@backstage/plugin-kubernetes-backend",description:"API Reference for @backstage/plugin-kubernetes-backend"}},d={},a=[{value:"Classes",id:"classes",level:2},{value:"Functions",id:"functions",level:2},{value:"Interfaces",id:"interfaces",level:2},{value:"Variables",id:"variables",level:2},{value:"Type Aliases",id:"type-aliases",level:2}];function u(e){const n=Object.assign({p:"p",a:"a",code:"code",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,s.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-backend",children:(0,t.jsx)(n.code,{children:"@backstage/plugin-kubernetes-backend"})})]}),"\n",(0,t.jsx)(n.p,{children:"A Backstage backend plugin that integrates towards Kubernetes"}),"\n",(0,t.jsx)(n.h2,{id:"classes",children:"Classes"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Class"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-backend.aksstrategy",children:"AksStrategy"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-backend.anonymousstrategy",children:"AnonymousStrategy"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-backend.awsiamstrategy",children:"AwsIamStrategy"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-backend.azureidentitystrategy",children:"AzureIdentityStrategy"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-backend.dispatchstrategy",children:"DispatchStrategy"})}),(0,t.jsx)(n.td,{children:"used to direct a KubernetesAuthProvider to its corresponding AuthenticationStrategy"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-backend.googleserviceaccountstrategy",children:"GoogleServiceAccountStrategy"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-backend.googlestrategy",children:"GoogleStrategy"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilder",children:"KubernetesBuilder"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesproxy",children:"KubernetesProxy"})}),(0,t.jsx)(n.td,{children:"A proxy that routes requests to the Kubernetes API."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-backend.oidcstrategy",children:"OidcStrategy"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-backend.serviceaccountstrategy",children:"ServiceAccountStrategy"})}),(0,t.jsx)(n.td,{})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"functions",children:"Functions"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Function"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-backend.createrouter",children:"createRouter(options)"})}),(0,t.jsx)(n.td,{children:"creates and configure a new router for handling the kubernetes backend APIs"})]})})]}),"\n",(0,t.jsx)(n.h2,{id:"interfaces",children:"Interfaces"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Interface"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-backend.authenticationstrategy",children:"AuthenticationStrategy"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-backend.clusterdetails",children:"ClusterDetails"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-backend.customresource",children:"CustomResource"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-backend.fetchresponsewrapper",children:"FetchResponseWrapper"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesclusterssupplier",children:"KubernetesClustersSupplier"})}),(0,t.jsx)(n.td,{children:"Used to load cluster details from different sources"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesenvironment",children:"KubernetesEnvironment"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesfetcher",children:"KubernetesFetcher"})}),(0,t.jsx)(n.td,{children:"Fetches information from a kubernetes cluster using the cluster details object to target a specific cluster"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesobjectsprovideroptions",children:"KubernetesObjectsProviderOptions"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesservicelocator",children:"KubernetesServiceLocator"})}),(0,t.jsx)(n.td,{children:"Used to locate which cluster(s) a service is running on"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-backend.objectfetchparams",children:"ObjectFetchParams"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-backend.objecttofetch",children:"ObjectToFetch"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-backend.routeroptions",children:"RouterOptions"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-backend.servicelocatorrequestcontext",children:"ServiceLocatorRequestContext"})}),(0,t.jsx)(n.td,{})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"variables",children:"Variables"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Variable"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-backend.default_objects",children:"DEFAULT_OBJECTS"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-backend.header_kubernetes_auth",children:"HEADER_KUBERNETES_AUTH"})}),(0,t.jsx)(n.td,{children:"The header that is used to specify the Authentication Authorities token. e.x if using the google auth provider as your authentication authority then this field would be the google provided bearer token."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-backend.header_kubernetes_cluster",children:"HEADER_KUBERNETES_CLUSTER"})}),(0,t.jsx)(n.td,{children:"The header that is used to specify the cluster name."})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"type-aliases",children:"Type Aliases"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Type Alias"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-backend.authmetadata",children:"AuthMetadata"})}),(0,t.jsx)(n.td,{children:"Provider-specific authentication configuration"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-backend.dispatchstrategyoptions",children:"DispatchStrategyOptions"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilderreturn",children:"KubernetesBuilderReturn"})}),(0,t.jsxs)(n.td,{children:["The return type of the ",(0,t.jsx)(n.code,{children:"KubernetesBuilder.build"})," method"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetescredential",children:"KubernetesCredential"})}),(0,t.jsx)(n.td,{children:"Authentication data used to make a request to Kubernetes"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesobjecttypes",children:"KubernetesObjectTypes"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesproxycreaterequesthandleroptions",children:"KubernetesProxyCreateRequestHandlerOptions"})}),(0,t.jsx)(n.td,{children:"The options object expected to be passed as a parameter to KubernetesProxy.createRequestHandler()."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesproxyoptions",children:"KubernetesProxyOptions"})}),(0,t.jsx)(n.td,{children:"Options accepted as a parameter by the KubernetesProxy"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-backend.objectsbyentityrequest",children:"ObjectsByEntityRequest"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-backend.servicelocatormethod",children:"ServiceLocatorMethod"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-backend.signingcreds",children:"SigningCreds"})}),(0,t.jsx)(n.td,{})]})]})]})]})}const l=function(e={}){const{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(u,e)})):u(e)}},862525:e=>{var n=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var n={},r=0;r<10;r++)n["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(n).map((function(e){return n[e]})).join(""))return!1;var t={};return"abcdefghijklmnopqrst".split("").forEach((function(e){t[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},t)).join("")}catch(s){return!1}}()?Object.assign:function(e,s){for(var c,i,o=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),d=1;d<arguments.length;d++){for(var a in c=Object(arguments[d]))r.call(c,a)&&(o[a]=c[a]);if(n){i=n(c);for(var u=0;u<i.length;u++)t.call(c,i[u])&&(o[i[u]]=c[i[u]])}}return o}},371426:(e,n,r)=>{r(862525);var t=r(827378),s=60103;if(n.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var c=Symbol.for;s=c("react.element"),n.Fragment=c("react.fragment")}var i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o=Object.prototype.hasOwnProperty,d={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,r){var t,c={},a=null,u=null;for(t in void 0!==r&&(a=""+r),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(u=n.ref),n)o.call(n,t)&&!d.hasOwnProperty(t)&&(c[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===c[t]&&(c[t]=n[t]);return{$$typeof:s,type:e,key:a,ref:u,props:c,_owner:i.current}}n.jsx=a,n.jsxs=a},541535:(e,n,r)=>{var t=r(862525),s=60103,c=60106;n.Fragment=60107,n.StrictMode=60108,n.Profiler=60114;var i=60109,o=60110,d=60112;n.Suspense=60113;var a=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var l=Symbol.for;s=l("react.element"),c=l("react.portal"),n.Fragment=l("react.fragment"),n.StrictMode=l("react.strict_mode"),n.Profiler=l("react.profiler"),i=l("react.provider"),o=l("react.context"),d=l("react.forward_ref"),n.Suspense=l("react.suspense"),a=l("react.memo"),u=l("react.lazy")}var h="function"==typeof Symbol&&Symbol.iterator;function f(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)n+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b={};function j(e,n,r){this.props=e,this.context=n,this.refs=b,this.updater=r||p}function x(){}function k(e,n,r){this.props=e,this.context=n,this.refs=b,this.updater=r||p}j.prototype.isReactComponent={},j.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(f(85));this.updater.enqueueSetState(this,e,n,"setState")},j.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},x.prototype=j.prototype;var y=k.prototype=new x;y.constructor=k,t(y,j.prototype),y.isPureReactComponent=!0;var g={current:null},v=Object.prototype.hasOwnProperty,m={key:!0,ref:!0,__self:!0,__source:!0};function _(e,n,r){var t,c={},i=null,o=null;if(null!=n)for(t in void 0!==n.ref&&(o=n.ref),void 0!==n.key&&(i=""+n.key),n)v.call(n,t)&&!m.hasOwnProperty(t)&&(c[t]=n[t]);var d=arguments.length-2;if(1===d)c.children=r;else if(1<d){for(var a=Array(d),u=0;u<d;u++)a[u]=arguments[u+2];c.children=a}if(e&&e.defaultProps)for(t in d=e.defaultProps)void 0===c[t]&&(c[t]=d[t]);return{$$typeof:s,type:e,key:i,ref:o,props:c,_owner:g.current}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===s}var O=/\/+/g;function w(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function E(e,n,r,t,i){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var d=!1;if(null===e)d=!0;else switch(o){case"string":case"number":d=!0;break;case"object":switch(e.$$typeof){case s:case c:d=!0}}if(d)return i=i(d=e),e=""===t?"."+w(d,0):t,Array.isArray(i)?(r="",null!=e&&(r=e.replace(O,"$&/")+"/"),E(i,n,r,"",(function(e){return e}))):null!=i&&(S(i)&&(i=function(e,n){return{$$typeof:s,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(i,r+(!i.key||d&&d.key===i.key?"":(""+i.key).replace(O,"$&/")+"/")+e)),n.push(i)),1;if(d=0,t=""===t?".":t+":",Array.isArray(e))for(var a=0;a<e.length;a++){var u=t+w(o=e[a],a);d+=E(o,n,r,u,i)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=h&&e[h]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),a=0;!(o=e.next()).done;)d+=E(o=o.value,n,r,u=t+w(o,a++),i);else if("object"===o)throw n=""+e,Error(f(31,"[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n));return d}function C(e,n,r){if(null==e)return e;var t=[],s=0;return E(e,t,"","",(function(e){return n.call(r,e,s++)})),t}function R(e){if(-1===e._status){var n=e._result;n=n(),e._status=0,e._result=n,n.then((function(n){0===e._status&&(n=n.default,e._status=1,e._result=n)}),(function(n){0===e._status&&(e._status=2,e._result=n)}))}if(1===e._status)return e._result;throw e._result}var A={current:null};function P(){var e=A.current;if(null===e)throw Error(f(321));return e}var $={ReactCurrentDispatcher:A,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:g,IsSomeRendererActing:{current:!1},assign:t};n.Children={map:C,forEach:function(e,n,r){C(e,(function(){n.apply(this,arguments)}),r)},count:function(e){var n=0;return C(e,(function(){n++})),n},toArray:function(e){return C(e,(function(e){return e}))||[]},only:function(e){if(!S(e))throw Error(f(143));return e}},n.Component=j,n.PureComponent=k,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,n.cloneElement=function(e,n,r){if(null==e)throw Error(f(267,e));var c=t({},e.props),i=e.key,o=e.ref,d=e._owner;if(null!=n){if(void 0!==n.ref&&(o=n.ref,d=g.current),void 0!==n.key&&(i=""+n.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in n)v.call(n,u)&&!m.hasOwnProperty(u)&&(c[u]=void 0===n[u]&&void 0!==a?a[u]:n[u])}var u=arguments.length-2;if(1===u)c.children=r;else if(1<u){a=Array(u);for(var l=0;l<u;l++)a[l]=arguments[l+2];c.children=a}return{$$typeof:s,type:e.type,key:i,ref:o,props:c,_owner:d}},n.createContext=function(e,n){return void 0===n&&(n=null),(e={$$typeof:o,_calculateChangedBits:n,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},n.createElement=_,n.createFactory=function(e){var n=_.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:d,render:e}},n.isValidElement=S,n.lazy=function(e){return{$$typeof:u,_payload:{_status:-1,_result:e},_init:R}},n.memo=function(e,n){return{$$typeof:a,type:e,compare:void 0===n?null:n}},n.useCallback=function(e,n){return P().useCallback(e,n)},n.useContext=function(e,n){return P().useContext(e,n)},n.useDebugValue=function(){},n.useEffect=function(e,n){return P().useEffect(e,n)},n.useImperativeHandle=function(e,n,r){return P().useImperativeHandle(e,n,r)},n.useLayoutEffect=function(e,n){return P().useLayoutEffect(e,n)},n.useMemo=function(e,n){return P().useMemo(e,n)},n.useReducer=function(e,n,r){return P().useReducer(e,n,r)},n.useRef=function(e){return P().useRef(e)},n.useState=function(e){return P().useState(e)},n.version="17.0.2"},827378:(e,n,r)=>{e.exports=r(541535)},824246:(e,n,r)=>{e.exports=r(371426)},511151:(e,n,r)=>{r.d(n,{Zo:()=>o,ah:()=>c});var t=r(667294);const s=t.createContext({});function c(e){const n=t.useContext(s);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function o({components:e,children:n,disableParentContext:r}){let o;return o=r?"function"==typeof e?e({}):e||i:c(e),t.createElement(s.Provider,{value:o},n)}}}]);