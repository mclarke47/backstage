/*! For license information please see 7c63aa32.eecafb82.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[538784],{105944:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(824246),o=n(511151);const i={id:"input-examples",title:"Input Examples",description:"Some examples to use in your template"},a=void 0,s={unversionedId:"features/software-templates/input-examples",id:"features/software-templates/input-examples",title:"Input Examples",description:"Some examples to use in your template",source:"@site/../docs/features/software-templates/input-examples.md",sourceDirName:"features/software-templates",slug:"/features/software-templates/input-examples",permalink:"/docs/features/software-templates/input-examples",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/features/software-templates/input-examples.md",tags:[],version:"current",frontMatter:{id:"input-examples",title:"Input Examples",description:"Some examples to use in your template"},sidebar:"docs",previous:{title:"Writing Templates",permalink:"/docs/features/software-templates/writing-templates"},next:{title:"Builtin actions",permalink:"/docs/features/software-templates/builtin-actions"}},l={},u=[{value:"Simple text input",id:"simple-text-input",level:2},{value:"Simple input with basic validations",id:"simple-input-with-basic-validations",level:3},{value:"Multi line text input",id:"multi-line-text-input",level:3},{value:"Arrays options",id:"arrays-options",level:2},{value:"Array with custom titles",id:"array-with-custom-titles",level:3},{value:"A multiple choices list",id:"a-multiple-choices-list",level:3},{value:"Array with another types",id:"array-with-another-types",level:3},{value:"Boolean options",id:"boolean-options",level:2},{value:"Boolean",id:"boolean",level:3},{value:"Boolean Yes or No options",id:"boolean-yes-or-no-options",level:3},{value:"Boolean multiple options",id:"boolean-multiple-options",level:3},{value:"Use parameters as condition in steps",id:"use-parameters-as-condition-in-steps",level:2}];function p(e){const t=Object.assign({p:"p",em:"em",a:"a",h2:"h2",h3:"h3",pre:"pre",code:"code"},(0,o.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["All the examples on this page you can test using ",(0,r.jsx)(t.em,{children:"create/edit"})," from your Backstage installation."]}),"\n",(0,r.jsxs)(t.p,{children:["It is important to remember that all examples are based on ",(0,r.jsx)(t.a,{href:"https://rjsf-team.github.io/react-jsonschema-form/",children:"react-jsonschema-form"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"simple-text-input",children:"Simple text input"}),"\n",(0,r.jsx)(t.h3,{id:"simple-input-with-basic-validations",children:"Simple input with basic validations"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"parameters:\n  - title: Fill in some steps\n    properties:\n      name:\n        title: Simple text input\n        type: string\n        description: Description about input\n        maxLength: 8\n        pattern: '^([a-zA-Z][a-zA-Z0-9]*)(-[a-zA-Z0-9]+)*$'\n        ui:autofocus: true\n        ui:help: 'Hint: additional description...'\n"})}),"\n",(0,r.jsx)(t.h3,{id:"multi-line-text-input",children:"Multi line text input"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"parameters:\n  - title: Fill in some steps\n    properties:\n      multiline:\n        title: Text area input\n        type: string\n        description: Insert your multi line string\n        ui:widget: textarea\n        ui:options:\n          rows: 10\n        ui:help: 'Hint: Make it strong!'\n        ui:placeholder: |\n          apiVersion: backstage.io/v1alpha1\n            kind: Component\n            metadata:\n              name: backstage\n            spec:\n              type: library\n              owner: CNCF\n              lifecycle: experimental\n"})}),"\n",(0,r.jsx)(t.h2,{id:"arrays-options",children:"Arrays options"}),"\n",(0,r.jsx)(t.h3,{id:"array-with-custom-titles",children:"Array with custom titles"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"parameters:\n  - title: Fill in some steps\n    properties:\n      volume_type:\n        title: Volume Type\n        type: string\n        description: The volume type to be used\n        default: gp2\n        enum:\n          - gp2\n          - gp3\n          - io1\n          - io2\n          - sc1\n          - st1\n          - standard\n        enumNames:\n          - 'General Purpose SSD (gp2)'\n          - 'General Purpose SSD (gp3)'\n          - 'Provisioned IOPS (io1)'\n          - 'Provisioned IOPS (io2)'\n          - 'Cold HDD (sc1)'\n          - 'Throughput Optimized HDD (st1)'\n          - 'Magnetic (standard)'\n"})}),"\n",(0,r.jsx)(t.h3,{id:"a-multiple-choices-list",children:"A multiple choices list"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"parameters:\n  - title: Fill in some steps\n    properties:\n      name:\n        title: Select environments\n        type: array\n        items:\n          type: string\n          enum:\n            - production\n            - staging\n            - development\n        uniqueItems: true\n        ui:widget: checkboxes\n"})}),"\n",(0,r.jsx)(t.h3,{id:"array-with-another-types",children:"Array with another types"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"parameters:\n  - title: Fill in some steps\n    properties:\n      arrayObjects:\n        title: Array with custom objects\n        type: array\n        ui:options:\n          addable: false\n          orderable: false\n          removable: false\n        items:\n          type: object\n          properties:\n            array:\n              title: Array string with default value\n              type: string\n              default: value3\n              enum:\n                - value1\n                - value2\n                - value3\n            flag:\n              title: Boolean flag\n              type: boolean\n              ui:widget: radio\n            someInput:\n              title: Simple text input\n              type: string\n"})}),"\n",(0,r.jsx)(t.h2,{id:"boolean-options",children:"Boolean options"}),"\n",(0,r.jsx)(t.h3,{id:"boolean",children:"Boolean"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"parameters:\n  - title: Fill in some steps\n    properties:\n      name:\n        title: Checkbox boolean\n        type: boolean\n"})}),"\n",(0,r.jsx)(t.h3,{id:"boolean-yes-or-no-options",children:"Boolean Yes or No options"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"parameters:\n  - title: Fill in some steps\n    properties:\n      name:\n        title: Yes or No options\n        type: boolean\n        ui:widget: radio\n"})}),"\n",(0,r.jsx)(t.h3,{id:"boolean-multiple-options",children:"Boolean multiple options"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"parameters:\n  - title: Fill in some steps\n    properties:\n      name:\n        title: Select features\n        type: array\n        items:\n          type: boolean\n          enum:\n            - 'Enable scraping'\n            - 'Enable HPA'\n            - 'Enable cache'\n        uniqueItems: true\n        ui:widget: checkboxes\n"})}),"\n",(0,r.jsx)(t.h2,{id:"use-parameters-as-condition-in-steps",children:"Use parameters as condition in steps"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:'- name: Only development environments\n  if: ${{ parameters.environment === "staging" and parameters.environment === "development" }}\n  action: debug:log\n  input:\n    message: \'development step\'\n\n- name: Only production environments\n  if: ${{ parameters.environment === "prod" or parameters.environment === "production" }}\n  action: debug:log\n  input:\n    message: \'production step\'\n'})})]})}const c=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(p,e)})):p(e)}},862525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var i,a,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),l=1;l<arguments.length;l++){for(var u in i=Object(arguments[l]))n.call(i,u)&&(s[u]=i[u]);if(t){a=t(i);for(var p=0;p<a.length;p++)r.call(i,a[p])&&(s[a[p]]=i[a[p]])}}return s}},371426:(e,t,n)=>{n(862525);var r=n(827378),o=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var i=Symbol.for;o=i("react.element"),t.Fragment=i("react.fragment")}var a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,l={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var r,i={},u=null,p=null;for(r in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(p=t.ref),t)s.call(t,r)&&!l.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:o,type:e,key:u,ref:p,props:i,_owner:a.current}}t.jsx=u,t.jsxs=u},541535:(e,t,n)=>{var r=n(862525),o=60103,i=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var a=60109,s=60110,l=60112;t.Suspense=60113;var u=60115,p=60116;if("function"==typeof Symbol&&Symbol.for){var c=Symbol.for;o=c("react.element"),i=c("react.portal"),t.Fragment=c("react.fragment"),t.StrictMode=c("react.strict_mode"),t.Profiler=c("react.profiler"),a=c("react.provider"),s=c("react.context"),l=c("react.forward_ref"),t.Suspense=c("react.suspense"),u=c("react.memo"),p=c("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function h(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||m}function v(){}function g(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||m}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=h.prototype;var b=g.prototype=new v;b.constructor=g,r(b,h.prototype),b.isPureReactComponent=!0;var x={current:null},j=Object.prototype.hasOwnProperty,w={key:!0,ref:!0,__self:!0,__source:!0};function _(e,t,n){var r,i={},a=null,s=null;if(null!=t)for(r in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(a=""+t.key),t)j.call(t,r)&&!w.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(1===l)i.children=n;else if(1<l){for(var u=Array(l),p=0;p<l;p++)u[p]=arguments[p+2];i.children=u}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===i[r]&&(i[r]=l[r]);return{$$typeof:o,type:e,key:a,ref:s,props:i,_owner:x.current}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var k=/\/+/g;function O(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function E(e,t,n,r,a){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var l=!1;if(null===e)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case o:case i:l=!0}}if(l)return a=a(l=e),e=""===r?"."+O(l,0):r,Array.isArray(a)?(n="",null!=e&&(n=e.replace(k,"$&/")+"/"),E(a,t,n,"",(function(e){return e}))):null!=a&&(S(a)&&(a=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,n+(!a.key||l&&l.key===a.key?"":(""+a.key).replace(k,"$&/")+"/")+e)),t.push(a)),1;if(l=0,r=""===r?".":r+":",Array.isArray(e))for(var u=0;u<e.length;u++){var p=r+O(s=e[u],u);l+=E(s,t,n,p,a)}else if(p=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof p)for(e=p.call(e),u=0;!(s=e.next()).done;)l+=E(s=s.value,t,n,p=r+O(s,u++),a);else if("object"===s)throw t=""+e,Error(d(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return l}function C(e,t,n){if(null==e)return e;var r=[],o=0;return E(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function P(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var $={current:null};function A(){var e=$.current;if(null===e)throw Error(d(321));return e}var R={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:x,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:C,forEach:function(e,t,n){C(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return C(e,(function(){t++})),t},toArray:function(e){return C(e,(function(e){return e}))||[]},only:function(e){if(!S(e))throw Error(d(143));return e}},t.Component=h,t.PureComponent=g,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=R,t.cloneElement=function(e,t,n){if(null==e)throw Error(d(267,e));var i=r({},e.props),a=e.key,s=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,l=x.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(p in t)j.call(t,p)&&!w.hasOwnProperty(p)&&(i[p]=void 0===t[p]&&void 0!==u?u[p]:t[p])}var p=arguments.length-2;if(1===p)i.children=n;else if(1<p){u=Array(p);for(var c=0;c<p;c++)u[c]=arguments[c+2];i.children=u}return{$$typeof:o,type:e.type,key:a,ref:s,props:i,_owner:l}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},t.createElement=_,t.createFactory=function(e){var t=_.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:l,render:e}},t.isValidElement=S,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:P}},t.memo=function(e,t){return{$$typeof:u,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return A().useCallback(e,t)},t.useContext=function(e,t){return A().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return A().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return A().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return A().useLayoutEffect(e,t)},t.useMemo=function(e,t){return A().useMemo(e,t)},t.useReducer=function(e,t,n){return A().useReducer(e,t,n)},t.useRef=function(e){return A().useRef(e)},t.useState=function(e){return A().useState(e)},t.version="17.0.2"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Zo:()=>s,ah:()=>i});var r=n(667294);const o=r.createContext({});function i(e){const t=r.useContext(o);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const a={};function s({components:e,children:t,disableParentContext:n}){let s;return s=n?"function"==typeof e?e({}):e||a:i(e),r.createElement(o.Provider,{value:s},t)}}}]);