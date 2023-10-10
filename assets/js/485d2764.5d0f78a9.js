/*! For license information please see 485d2764.5d0f78a9.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[719510],{322749:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>l,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var r=t(824246),i=t(511151);const o={id:"plugin-scaffolder-backend.createpublishgitlabaction",title:"createPublishGitlabAction()",description:"API reference for createPublishGitlabAction()"},a=void 0,c={id:"reference/plugin-scaffolder-backend.createpublishgitlabaction",title:"createPublishGitlabAction()",description:"API reference for createPublishGitlabAction()",source:"@site/../docs/reference/plugin-scaffolder-backend.createpublishgitlabaction.md",sourceDirName:"reference",slug:"/reference/plugin-scaffolder-backend.createpublishgitlabaction",permalink:"/docs/reference/plugin-scaffolder-backend.createpublishgitlabaction",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-scaffolder-backend.createpublishgitlabaction.md",tags:[],version:"current",frontMatter:{id:"plugin-scaffolder-backend.createpublishgitlabaction",title:"createPublishGitlabAction()",description:"API reference for createPublishGitlabAction()"}},s={},u=[{value:"Parameters",id:"parameters",level:2}];function f(e){const n=Object.assign({p:"p",a:"a",code:"code",strong:"strong",pre:"pre",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,i.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-scaffolder-backend",children:(0,r.jsx)(n.code,{children:"@backstage/plugin-scaffolder-backend"})})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-scaffolder-backend.createpublishgitlabaction",children:(0,r.jsx)(n.code,{children:"createPublishGitlabAction"})})]}),"\n",(0,r.jsx)(n.p,{children:"Creates a new action that initializes a git repository of the content in the workspace and publishes it to GitLab."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:'function createPublishGitlabAction(options: {\n    integrations: ScmIntegrationRegistry;\n    config: Config;\n}): import("@backstage/plugin-scaffolder-node").TemplateAction<{\n    repoUrl: string;\n    defaultBranch?: string | undefined;\n    repoVisibility?: "internal" | "private" | "public" | undefined;\n    sourcePath?: string | undefined;\n    token?: string | undefined;\n    gitCommitMessage?: string | undefined;\n    gitAuthorName?: string | undefined;\n    gitAuthorEmail?: string | undefined;\n    setUserAsOwner?: boolean | undefined;\n    topics?: string[] | undefined;\n    settings?: {\n        path?: string | undefined;\n        auto_devops_enabled?: boolean | undefined;\n        ci_config_path?: string | undefined;\n        description?: string | undefined;\n        topics?: string[] | undefined;\n        visibility?: "internal" | "private" | "public" | undefined;\n    } | undefined;\n    branches?: {\n        name: string;\n        protect?: boolean | undefined;\n        create?: boolean | undefined;\n        ref?: string | undefined;\n    }[] | undefined;\n    projectVariables?: {\n        key: string;\n        value: string;\n        description?: string | undefined;\n        variable_type?: string | undefined;\n        protected?: boolean | undefined;\n        masked?: boolean | undefined;\n        raw?: boolean | undefined;\n        environment_scope?: string | undefined;\n    }[] | undefined;\n}, import("@backstage/types").JsonObject>;\n'})}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"options"}),(0,r.jsxs)(n.td,{children:["{ integrations: ",(0,r.jsx)(n.a,{href:"/docs/reference/integration.scmintegrationregistry",children:"ScmIntegrationRegistry"}),"; config: ",(0,r.jsx)(n.a,{href:"/docs/reference/config.config",children:"Config"}),"; }"]}),(0,r.jsx)(n.td,{})]})})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,r.jsxs)(n.p,{children:['import("@backstage/plugin-scaffolder-node").',(0,r.jsx)(n.a,{href:"/docs/reference/plugin-scaffolder-node.templateaction",children:"TemplateAction"}),'<{ repoUrl: string; defaultBranch?: string | undefined; repoVisibility?: "internal" | "private" | "public" | undefined; sourcePath?: string | undefined; token?: string | undefined; gitCommitMessage?: string | undefined; gitAuthorName?: string | undefined; gitAuthorEmail?: string | undefined; setUserAsOwner?: boolean | undefined; topics?: string[] | undefined; settings?: { path?: string | undefined; auto_devops_enabled?: boolean | undefined; ci_config_path?: string | undefined; description?: string | undefined; topics?: string[] | undefined; visibility?: "internal" | "private" | "public" | undefined; } | undefined; branches?: { name: string; protect?: boolean | undefined; create?: boolean | undefined; ref?: string | undefined; }[] | undefined; projectVariables?: { key: string; value: string; description?: string | undefined; variable_type?: string | undefined; protected?: boolean | undefined; masked?: boolean | undefined; raw?: boolean | undefined; environment_scope?: string | undefined; }[] | undefined; }, import("@backstage/types").',(0,r.jsx)(n.a,{href:"/docs/reference/types.jsonobject",children:"JsonObject"}),">"]})]})}const l=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(f,e)})):f(e)}},862525:e=>{var n=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var n={},t=0;t<10;t++)n["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(n).map((function(e){return n[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(i){return!1}}()?Object.assign:function(e,i){for(var o,a,c=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),s=1;s<arguments.length;s++){for(var u in o=Object(arguments[s]))t.call(o,u)&&(c[u]=o[u]);if(n){a=n(o);for(var f=0;f<a.length;f++)r.call(o,a[f])&&(c[a[f]]=o[a[f]])}}return c}},371426:(e,n,t)=>{t(862525);var r=t(827378),i=60103;if(n.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var o=Symbol.for;i=o("react.element"),n.Fragment=o("react.fragment")}var a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c=Object.prototype.hasOwnProperty,s={key:!0,ref:!0,__self:!0,__source:!0};function u(e,n,t){var r,o={},u=null,f=null;for(r in void 0!==t&&(u=""+t),void 0!==n.key&&(u=""+n.key),void 0!==n.ref&&(f=n.ref),n)c.call(n,r)&&!s.hasOwnProperty(r)&&(o[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===o[r]&&(o[r]=n[r]);return{$$typeof:i,type:e,key:u,ref:f,props:o,_owner:a.current}}n.jsx=u,n.jsxs=u},541535:(e,n,t)=>{var r=t(862525),i=60103,o=60106;n.Fragment=60107,n.StrictMode=60108,n.Profiler=60114;var a=60109,c=60110,s=60112;n.Suspense=60113;var u=60115,f=60116;if("function"==typeof Symbol&&Symbol.for){var l=Symbol.for;i=l("react.element"),o=l("react.portal"),n.Fragment=l("react.fragment"),n.StrictMode=l("react.strict_mode"),n.Profiler=l("react.profiler"),a=l("react.provider"),c=l("react.context"),s=l("react.forward_ref"),n.Suspense=l("react.suspense"),u=l("react.memo"),f=l("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function p(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function b(e,n,t){this.props=e,this.context=n,this.refs=g,this.updater=t||h}function y(){}function m(e,n,t){this.props=e,this.context=n,this.refs=g,this.updater=t||h}b.prototype.isReactComponent={},b.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(p(85));this.updater.enqueueSetState(this,e,n,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=b.prototype;var v=m.prototype=new y;v.constructor=m,r(v,b.prototype),v.isPureReactComponent=!0;var _={current:null},j=Object.prototype.hasOwnProperty,k={key:!0,ref:!0,__self:!0,__source:!0};function x(e,n,t){var r,o={},a=null,c=null;if(null!=n)for(r in void 0!==n.ref&&(c=n.ref),void 0!==n.key&&(a=""+n.key),n)j.call(n,r)&&!k.hasOwnProperty(r)&&(o[r]=n[r]);var s=arguments.length-2;if(1===s)o.children=t;else if(1<s){for(var u=Array(s),f=0;f<s;f++)u[f]=arguments[f+2];o.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps)void 0===o[r]&&(o[r]=s[r]);return{$$typeof:i,type:e,key:a,ref:c,props:o,_owner:_.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var O=/\/+/g;function P(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function S(e,n,t,r,a){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var s=!1;if(null===e)s=!0;else switch(c){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case i:case o:s=!0}}if(s)return a=a(s=e),e=""===r?"."+P(s,0):r,Array.isArray(a)?(t="",null!=e&&(t=e.replace(O,"$&/")+"/"),S(a,n,t,"",(function(e){return e}))):null!=a&&(w(a)&&(a=function(e,n){return{$$typeof:i,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(a,t+(!a.key||s&&s.key===a.key?"":(""+a.key).replace(O,"$&/")+"/")+e)),n.push(a)),1;if(s=0,r=""===r?".":r+":",Array.isArray(e))for(var u=0;u<e.length;u++){var f=r+P(c=e[u],u);s+=S(c,n,t,f,a)}else if(f=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof f)for(e=f.call(e),u=0;!(c=e.next()).done;)s+=S(c=c.value,n,t,f=r+P(c,u++),a);else if("object"===c)throw n=""+e,Error(p(31,"[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n));return s}function C(e,n,t){if(null==e)return e;var r=[],i=0;return S(e,r,"","",(function(e){return n.call(t,e,i++)})),r}function E(e){if(-1===e._status){var n=e._result;n=n(),e._status=0,e._result=n,n.then((function(n){0===e._status&&(n=n.default,e._status=1,e._result=n)}),(function(n){0===e._status&&(e._status=2,e._result=n)}))}if(1===e._status)return e._result;throw e._result}var A={current:null};function R(){var e=A.current;if(null===e)throw Error(p(321));return e}var $={ReactCurrentDispatcher:A,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:_,IsSomeRendererActing:{current:!1},assign:r};n.Children={map:C,forEach:function(e,n,t){C(e,(function(){n.apply(this,arguments)}),t)},count:function(e){var n=0;return C(e,(function(){n++})),n},toArray:function(e){return C(e,(function(e){return e}))||[]},only:function(e){if(!w(e))throw Error(p(143));return e}},n.Component=b,n.PureComponent=m,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,n.cloneElement=function(e,n,t){if(null==e)throw Error(p(267,e));var o=r({},e.props),a=e.key,c=e.ref,s=e._owner;if(null!=n){if(void 0!==n.ref&&(c=n.ref,s=_.current),void 0!==n.key&&(a=""+n.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(f in n)j.call(n,f)&&!k.hasOwnProperty(f)&&(o[f]=void 0===n[f]&&void 0!==u?u[f]:n[f])}var f=arguments.length-2;if(1===f)o.children=t;else if(1<f){u=Array(f);for(var l=0;l<f;l++)u[l]=arguments[l+2];o.children=u}return{$$typeof:i,type:e.type,key:a,ref:c,props:o,_owner:s}},n.createContext=function(e,n){return void 0===n&&(n=null),(e={$$typeof:c,_calculateChangedBits:n,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},n.createElement=x,n.createFactory=function(e){var n=x.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:s,render:e}},n.isValidElement=w,n.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:E}},n.memo=function(e,n){return{$$typeof:u,type:e,compare:void 0===n?null:n}},n.useCallback=function(e,n){return R().useCallback(e,n)},n.useContext=function(e,n){return R().useContext(e,n)},n.useDebugValue=function(){},n.useEffect=function(e,n){return R().useEffect(e,n)},n.useImperativeHandle=function(e,n,t){return R().useImperativeHandle(e,n,t)},n.useLayoutEffect=function(e,n){return R().useLayoutEffect(e,n)},n.useMemo=function(e,n){return R().useMemo(e,n)},n.useReducer=function(e,n,t){return R().useReducer(e,n,t)},n.useRef=function(e){return R().useRef(e)},n.useState=function(e){return R().useState(e)},n.version="17.0.2"},827378:(e,n,t)=>{e.exports=t(541535)},824246:(e,n,t)=>{e.exports=t(371426)},511151:(e,n,t)=>{t.d(n,{Zo:()=>c,ah:()=>o});var r=t(667294);const i=r.createContext({});function o(e){const n=r.useContext(i);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const a={};function c({components:e,children:n,disableParentContext:t}){let c;return c=t?"function"==typeof e?e({}):e||a:o(e),r.createElement(i.Provider,{value:c},n)}}}]);