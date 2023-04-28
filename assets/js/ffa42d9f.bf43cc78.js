/*! For license information please see ffa42d9f.bf43cc78.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[216296],{79070:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>f,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=n(824246),o=n(511151);const i={id:"builtin-actions",title:"Builtin actions",description:"Documentation describing the built-in template actions."},c=void 0,a={unversionedId:"features/software-templates/builtin-actions",id:"features/software-templates/builtin-actions",title:"Builtin actions",description:"Documentation describing the built-in template actions.",source:"@site/../docs/features/software-templates/builtin-actions.md",sourceDirName:"features/software-templates",slug:"/features/software-templates/builtin-actions",permalink:"/docs/features/software-templates/builtin-actions",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/features/software-templates/builtin-actions.md",tags:[],version:"current",frontMatter:{id:"builtin-actions",title:"Builtin actions",description:"Documentation describing the built-in template actions."},sidebar:"docs",previous:{title:"Input Examples",permalink:"/docs/features/software-templates/input-examples"},next:{title:"Writing Custom Actions",permalink:"/docs/features/software-templates/writing-custom-actions"}},s={},l=[{value:"Migrating from <code>fetch:cookiecutter</code> to <code>fetch:template</code>",id:"migrating-from-fetchcookiecutter-to-fetchtemplate",level:2},{value:"Using <code>cookiecutterCompat</code> mode",id:"using-cookiecuttercompat-mode",level:3},{value:"Manual migration",id:"manual-migration",level:3}];function u(e){const t=Object.assign({p:"p",code:"code",h2:"h2",h3:"h3",ol:"ol",li:"li",pre:"pre",a:"a"},(0,o.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"The scaffolder comes with several built-in actions for fetching content,\nregistering in the catalog and of course actions for creating and publishing a\ngit repository."}),"\n",(0,r.jsx)(t.p,{children:"There are several repository providers supported out of the box such as GitHub,\nAzure, GitLab and Bitbucket."}),"\n",(0,r.jsxs)(t.p,{children:["A list of all registered actions can be found under ",(0,r.jsx)(t.code,{children:"/create/actions"}),". For local\ndevelopment you should be able to reach them at\n",(0,r.jsx)(t.code,{children:"http://localhost:3000/create/actions"}),"."]}),"\n",(0,r.jsxs)(t.h2,{id:"migrating-from-fetchcookiecutter-to-fetchtemplate",children:["Migrating from ",(0,r.jsx)(t.code,{children:"fetch:cookiecutter"})," to ",(0,r.jsx)(t.code,{children:"fetch:template"})]}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"fetch:template"})," action is a new action with a similar API to\n",(0,r.jsx)(t.code,{children:"fetch:cookiecutter"})," but no dependency on ",(0,r.jsx)(t.code,{children:"cookiecutter"}),". There are two options\nfor migrating templates that use ",(0,r.jsx)(t.code,{children:"fetch:cookiecutter"})," to use ",(0,r.jsx)(t.code,{children:"fetch:template"}),":"]}),"\n",(0,r.jsxs)(t.h3,{id:"using-cookiecuttercompat-mode",children:["Using ",(0,r.jsx)(t.code,{children:"cookiecutterCompat"})," mode"]}),"\n",(0,r.jsxs)(t.p,{children:["The new ",(0,r.jsx)(t.code,{children:"fetch:template"})," action has a ",(0,r.jsx)(t.code,{children:"cookiecutterCompat"})," flag which should\nallow most templates built for ",(0,r.jsx)(t.code,{children:"fetch:cookiecutter"})," to work without any changes."]}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["Update action name in ",(0,r.jsx)(t.code,{children:"template.yaml"}),". The name should be changed from\n",(0,r.jsx)(t.code,{children:"fetch:cookiecutter"})," to ",(0,r.jsx)(t.code,{children:"fetch:template"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["Set ",(0,r.jsx)(t.code,{children:"cookiecutterCompat"})," to ",(0,r.jsx)(t.code,{children:"true"})," in the ",(0,r.jsx)(t.code,{children:"fetch:template"})," step input in\n",(0,r.jsx)(t.code,{children:"template.yaml"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",metastring:'title="template.yaml"',children:"steps:\n   - id: fetch-base\n   name: Fetch Base\n   # highlight-remove-next-line\n   action: fetch:cookiecutter\n   # highlight-add-next-line\n   action: fetch:template\n   input:\n      url: ./skeleton\n      # highlight-add-next-line\n      cookiecutterCompat: true\n      values:\n"})}),"\n",(0,r.jsx)(t.h3,{id:"manual-migration",children:"Manual migration"}),"\n",(0,r.jsx)(t.p,{children:"If you prefer, you can manually migrate your templates to avoid the need for\nenabling cookiecutter compatibility mode, which will result in slightly less\nverbose template variables expressions."}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["Update action name in ",(0,r.jsx)(t.code,{children:"template.yaml"}),". The name should be changed from\n",(0,r.jsx)(t.code,{children:"fetch:cookiecutter"})," to ",(0,r.jsx)(t.code,{children:"fetch:template"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["Update variable syntax in file names and content. ",(0,r.jsx)(t.code,{children:"fetch:cookiecutter"}),"\nexpects variables to be enclosed in ",(0,r.jsx)(t.code,{children:"{{"})," ",(0,r.jsx)(t.code,{children:"}}"})," and prefixed with\n",(0,r.jsx)(t.code,{children:"cookiecutter."}),", while ",(0,r.jsx)(t.code,{children:"fetch:template"})," expects variables to be enclosed in\n",(0,r.jsx)(t.code,{children:"${{"})," ",(0,r.jsx)(t.code,{children:"}}"})," and prefixed with ",(0,r.jsx)(t.code,{children:"values."}),". For example, a reference to variable\n",(0,r.jsx)(t.code,{children:"myInputVariable"})," would need to be migrated from\n",(0,r.jsx)(t.code,{children:"{{ cookiecutter.myInputVariable }}"})," to ",(0,r.jsx)(t.code,{children:"${{ values.myInputVariable }}"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["Replace uses of ",(0,r.jsx)(t.code,{children:"jsonify"})," with ",(0,r.jsx)(t.code,{children:"dump"}),". The\n",(0,r.jsxs)(t.a,{href:"https://cookiecutter.readthedocs.io/en/latest/advanced/template_extensions.html#jsonify-extension",children:[(0,r.jsx)(t.code,{children:"jsonify"})," filter"]}),"\nis built in to ",(0,r.jsx)(t.code,{children:"cookiecutter"}),", and is not available by default when using\n",(0,r.jsx)(t.code,{children:"fetch:template"}),". The\n",(0,r.jsxs)(t.a,{href:"https://mozilla.github.io/nunjucks/templating.html#dump",children:[(0,r.jsx)(t.code,{children:"dump"})," filter"]})," is\nthe equivalent filter in nunjucks, so an expression like\n",(0,r.jsx)(t.code,{children:"{{ cookiecutter.myAwesomeList | jsonify }}"})," should be migrated to\n",(0,r.jsx)(t.code,{children:"${{ values.myAwesomeList | dump }}"}),"."]}),"\n"]})]})}const f=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(u,e)})):u(e)}},862525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var i,c,a=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),s=1;s<arguments.length;s++){for(var l in i=Object(arguments[s]))n.call(i,l)&&(a[l]=i[l]);if(t){c=t(i);for(var u=0;u<c.length;u++)r.call(i,c[u])&&(a[c[u]]=i[c[u]])}}return a}},371426:(e,t,n)=>{n(862525);var r=n(827378),o=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var i=Symbol.for;o=i("react.element"),t.Fragment=i("react.fragment")}var c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a=Object.prototype.hasOwnProperty,s={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,i={},l=null,u=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)a.call(t,r)&&!s.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:o,type:e,key:l,ref:u,props:i,_owner:c.current}}t.jsx=l,t.jsxs=l},541535:(e,t,n)=>{var r=n(862525),o=60103,i=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var c=60109,a=60110,s=60112;t.Suspense=60113;var l=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var f=Symbol.for;o=f("react.element"),i=f("react.portal"),t.Fragment=f("react.fragment"),t.StrictMode=f("react.strict_mode"),t.Profiler=f("react.profiler"),c=f("react.provider"),a=f("react.context"),s=f("react.forward_ref"),t.Suspense=f("react.suspense"),l=f("react.memo"),u=f("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function p(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function y(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||h}function j(){}function b(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||h}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(p(85));this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},j.prototype=y.prototype;var g=b.prototype=new j;g.constructor=b,r(g,y.prototype),g.isPureReactComponent=!0;var x={current:null},v=Object.prototype.hasOwnProperty,k={key:!0,ref:!0,__self:!0,__source:!0};function w(e,t,n){var r,i={},c=null,a=null;if(null!=t)for(r in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(c=""+t.key),t)v.call(t,r)&&!k.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(1===s)i.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps)void 0===i[r]&&(i[r]=s[r]);return{$$typeof:o,type:e,key:c,ref:a,props:i,_owner:x.current}}function _(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var O=/\/+/g;function C(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function S(e,t,n,r,c){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var s=!1;if(null===e)s=!0;else switch(a){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case o:case i:s=!0}}if(s)return c=c(s=e),e=""===r?"."+C(s,0):r,Array.isArray(c)?(n="",null!=e&&(n=e.replace(O,"$&/")+"/"),S(c,t,n,"",(function(e){return e}))):null!=c&&(_(c)&&(c=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(c,n+(!c.key||s&&s.key===c.key?"":(""+c.key).replace(O,"$&/")+"/")+e)),t.push(c)),1;if(s=0,r=""===r?".":r+":",Array.isArray(e))for(var l=0;l<e.length;l++){var u=r+C(a=e[l],l);s+=S(a,t,n,u,c)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),l=0;!(a=e.next()).done;)s+=S(a=a.value,t,n,u=r+C(a,l++),c);else if("object"===a)throw t=""+e,Error(p(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return s}function E(e,t,n){if(null==e)return e;var r=[],o=0;return S(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function $(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var R={current:null};function P(){var e=R.current;if(null===e)throw Error(p(321));return e}var I={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:x,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:E,forEach:function(e,t,n){E(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return E(e,(function(){t++})),t},toArray:function(e){return E(e,(function(e){return e}))||[]},only:function(e){if(!_(e))throw Error(p(143));return e}},t.Component=y,t.PureComponent=b,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,t.cloneElement=function(e,t,n){if(null==e)throw Error(p(267,e));var i=r({},e.props),c=e.key,a=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,s=x.current),void 0!==t.key&&(c=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in t)v.call(t,u)&&!k.hasOwnProperty(u)&&(i[u]=void 0===t[u]&&void 0!==l?l[u]:t[u])}var u=arguments.length-2;if(1===u)i.children=n;else if(1<u){l=Array(u);for(var f=0;f<u;f++)l[f]=arguments[f+2];i.children=l}return{$$typeof:o,type:e.type,key:c,ref:a,props:i,_owner:s}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:a,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},t.createElement=w,t.createFactory=function(e){var t=w.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:s,render:e}},t.isValidElement=_,t.lazy=function(e){return{$$typeof:u,_payload:{_status:-1,_result:e},_init:$}},t.memo=function(e,t){return{$$typeof:l,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return P().useCallback(e,t)},t.useContext=function(e,t){return P().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return P().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return P().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return P().useLayoutEffect(e,t)},t.useMemo=function(e,t){return P().useMemo(e,t)},t.useReducer=function(e,t,n){return P().useReducer(e,t,n)},t.useRef=function(e){return P().useRef(e)},t.useState=function(e){return P().useState(e)},t.version="17.0.2"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Zo:()=>a,ah:()=>i});var r=n(667294);const o=r.createContext({});function i(e){const t=r.useContext(o);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const c={};function a({components:e,children:t,disableParentContext:n}){let a;return a=n?"function"==typeof e?e({}):e||c:i(e),r.createElement(o.Provider,{value:a},t)}}}]);