/*! For license information please see eb8bfc59.a8eb35dc.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[336594],{594025:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=t(824246),a=t(511151);const i={id:"versioning-policy",title:"Release & Versioning Policy",description:"The process and policy for releasing and versioning Backstage"},o=void 0,s={id:"overview/versioning-policy",title:"Release & Versioning Policy",description:"The process and policy for releasing and versioning Backstage",source:"@site/../docs/overview/versioning-policy.md",sourceDirName:"overview",slug:"/overview/versioning-policy",permalink:"/docs/overview/versioning-policy",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/overview/versioning-policy.md",tags:[],version:"current",frontMatter:{id:"versioning-policy",title:"Release & Versioning Policy",description:"The process and policy for releasing and versioning Backstage"},sidebar:"docs",previous:{title:"Strategies for adopting",permalink:"/docs/overview/adopting"},next:{title:"Backstage Threat Model",permalink:"/docs/overview/threat-model"}},l={},c=[{value:"Release Lines",id:"release-lines",level:2},{value:"Main Release Line",id:"main-release-line",level:2},{value:"Next Release Line",id:"next-release-line",level:2},{value:"Release Versioning Policy",id:"release-versioning-policy",level:2},{value:"Skew Policy",id:"skew-policy",level:3},{value:"Package Versioning Policy",id:"package-versioning-policy",level:2},{value:"Changes that are Not Considered Breaking",id:"changes-that-are-not-considered-breaking",level:3},{value:"Release Stages",id:"release-stages",level:3},{value:"Node.js Releases",id:"nodejs-releases",level:2},{value:"TypeScript Releases",id:"typescript-releases",level:2}];function d(e){const n=Object.assign({p:"p",a:"a",h2:"h2",strong:"strong",code:"code",ul:"ul",li:"li",h3:"h3",em:"em"},(0,a.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["The Backstage project is comprised of a set of software components that together\nform the Backstage platform. These components are both plugins as well as core\nplatform libraries and tools. Each component is distributed as a collection of\n",(0,r.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Npm_(software)",children:"packages"}),", which in the end is\nwhat you end up consuming as an adopter of Backstage."]}),"\n",(0,r.jsx)(n.p,{children:"The number of Backstage packages that build up an application can be quite\nlarge, in the order of hundreds, with just the core platform packages being\ncounted in the dozen. This creates a challenge for the integrators of a\nBackstage project, as there are a lot of moving parts and pieces to keep up to\ndate."}),"\n",(0,r.jsx)(n.p,{children:"Our solution to this is collecting our most used components and their packages\ninto an umbrella version that we call a Backstage release. Each release is a\ncollection of packages at specific versions that have been verified to work\ntogether. Think of it as a toolbox that comes with batteries included, but you\ncan always add more plugins and libraries from the open source ecosystem as well\nas build your own."}),"\n",(0,r.jsx)(n.h2,{id:"release-lines",children:"Release Lines"}),"\n",(0,r.jsx)(n.p,{children:'The Backstage project is structured around two different release lines, a\nprimary "main" release line, and a "next" release line that serves as a preview\nand pre-release of the next main-line release. Each of these release lines have\ntheir own release cadence and versioning policy.'}),"\n",(0,r.jsx)(n.h2,{id:"main-release-line",children:"Main Release Line"}),"\n",(0,r.jsx)(n.p,{children:"Release cadence: Monthly, specifically on the Tuesday before the third Wednesday of each month. The first release took place in March 2022."}),"\n",(0,r.jsxs)(n.p,{children:["The main release line in versioned with a major, minor and patch version but\ndoes ",(0,r.jsx)(n.strong,{children:"not"})," adhere to ",(0,r.jsx)(n.a,{href:"https://semver.org",children:"semver"}),". The version format is\n",(0,r.jsx)(n.code,{children:"<major>.<minor>.<patch>"}),", for example ",(0,r.jsx)(n.code,{children:"1.3.0"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"An increment of the major version denotes a significant improvement or change to\nthe Backstage platform. It may come with a large new set of features, or a\nswitch in the product direction. These will be few and far between, and do not\nhave any set cadence. Policy-wise they are no different than a minor release."}),"\n",(0,r.jsxs)(n.p,{children:["Each regularly scheduled release will bring an increment to the minor version,\nas long as it is not a major release. Each new minor version can contain new\nfunctionality, breaking changes, and bug fixes, according the\n",(0,r.jsx)(n.a,{href:"#release-versioning-policy",children:"versioning policy"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Patch versions will only be released to address critical bug fixes. They are not\nbound to the regular cadence and are instead released whenever needed."}),"\n",(0,r.jsx)(n.h2,{id:"next-release-line",children:"Next Release Line"}),"\n",(0,r.jsx)(n.p,{children:"Release cadence: Weekly, specifically on Tuesdays."}),"\n",(0,r.jsx)(n.p,{children:"The next release line is a weekly release of the project. Consuming these\nreleases gives you early access to upcoming functionality in Backstage. There\nare however fewer guarantees around breaking changes in these releases, where\nmoving from one release to the next may introduce significant breaking changes."}),"\n",(0,r.jsx)(n.h2,{id:"release-versioning-policy",children:"Release Versioning Policy"}),"\n",(0,r.jsx)(n.p,{children:"The following versioning policy applies to the main-line releases only."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Breaking changes in Packages that have reached version ",(0,r.jsx)(n.code,{children:">=1.0.0"})," will only be\ndone when necessary and with the goal of having minimal impact. When possible,\nthere will always be a deprecation path for a breaking change."]}),"\n",(0,r.jsxs)(n.li,{children:["Security fixes ",(0,r.jsx)(n.strong,{children:"may"})," be backported to older releases based on the simplicity\nof the upgrade path, and the severity of the vulnerability."]}),"\n",(0,r.jsx)(n.li,{children:"Bug reports are valid only if reproducible in the most recent release, and bug\nfixes are only applied to the next release."}),"\n",(0,r.jsx)(n.li,{children:"We will do our best to adhere to this policy."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"skew-policy",children:"Skew Policy"}),"\n",(0,r.jsxs)(n.p,{children:["In order for Backstage to function properly the following versioning rules must\nbe followed. The rules are referring to the\n",(0,r.jsx)(n.a,{href:"https://backstage.io/docs/overview/architecture-overview#package-architecture",children:"Package Architecture"}),"."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The versions of all the packages in the ",(0,r.jsx)(n.code,{children:"Frontend App Core"})," must be from the\nsame release, and it is recommended to keep ",(0,r.jsx)(n.code,{children:"Common Tooling"})," on that release\ntoo."]}),"\n",(0,r.jsxs)(n.li,{children:["The Backstage dependencies of any given plugin should be from the same\nrelease. This includes the packages from ",(0,r.jsx)(n.code,{children:"Common Libraries"}),",\n",(0,r.jsx)(n.code,{children:"Frontend Plugin Core"}),", and ",(0,r.jsx)(n.code,{children:"Frontend Libraries"}),", or alternatively the\n",(0,r.jsx)(n.code,{children:"Backend Libraries"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["There must be no package that is from a newer release than the\n",(0,r.jsx)(n.code,{children:"Frontend App Core"})," packages in the app."]}),"\n",(0,r.jsxs)(n.li,{children:["Frontend plugins with a corresponding backend plugin should be from the same\nrelease. The update to the backend plugin ",(0,r.jsx)(n.strong,{children:"MUST"})," be deployed before or\ntogether with the update to the frontend plugin."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"package-versioning-policy",children:"Package Versioning Policy"}),"\n",(0,r.jsxs)(n.p,{children:["Every individual package is versioned according to ",(0,r.jsx)(n.a,{href:"https://semver.org",children:"semver"}),".\nThis versioning is completely decoupled from the Backstage release versioning,\nmeaning you might for example have ",(0,r.jsx)(n.code,{children:"@backstage/core-plugin-api"})," version ",(0,r.jsx)(n.code,{children:"3.1.4"}),"\nbe part of the ",(0,r.jsx)(n.code,{children:"1.12"})," Backstage release."]}),"\n",(0,r.jsx)(n.p,{children:"The following versioning policy applies to all packages:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Breaking changes are noted in the changelog, and documentation is updated."}),"\n",(0,r.jsxs)(n.li,{children:["Breaking changes are prefixed with ",(0,r.jsx)(n.code,{children:"**BREAKING**: "})," in the changelog."]}),"\n",(0,r.jsx)(n.li,{children:"All public exports are considered stable and will have an entry in the\nchangelog"}),"\n",(0,r.jsx)(n.li,{children:"Breaking changes are recommended to document a clear upgrade path in the\nchangelog. This may be omitted for newly introduced or unstable packages."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["For packages at version ",(0,r.jsx)(n.code,{children:"1.0.0"})," or above, the following policy also applies:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["All exports are marked with a ",(0,r.jsx)(n.a,{href:"#release-stages",children:"release stage"}),"."]}),"\n",(0,r.jsx)(n.li,{children:"Breaking changes to stable exports include a deprecation phase if possible.\nThe deprecation must have been released for at least one mainline release\nbefore it can be removed."}),"\n",(0,r.jsx)(n.li,{children:"The release of breaking changes document a clear upgrade path in the\nchangelog, both when deprecations are introduced and when they are removed."}),"\n",(0,r.jsxs)(n.li,{children:["Breaking changes to ",(0,r.jsx)(n.code,{children:"@alpha"})," or ",(0,r.jsx)(n.code,{children:"@beta"})," exports must result in at least a minor\nversion bump, and may be done without a deprecation period."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"changes-that-are-not-considered-breaking",children:"Changes that are Not Considered Breaking"}),"\n",(0,r.jsx)(n.p,{children:"There are a few changes that would typically be considered breaking changes, but\nthat we make exceptions for. This is both to be able to evolve the project more\nrapidly, also because the alternative ends up having a bigger impact on users."}),"\n",(0,r.jsxs)(n.p,{children:["For all Utility APIs and Backend Services that ",(0,r.jsx)(n.em,{children:"have"})," a built-in implementation,\nwe only consider the API stability for consumers of those interfaces. This means\nthat it is not considered a breaking change to break the contract for producers\nof the interface."]}),"\n",(0,r.jsxs)(n.p,{children:["Changes that fall under the above rule, must be marked with\n",(0,r.jsx)(n.code,{children:"**BREAKING PRODUCERS**:"})," in the changelog."]}),"\n",(0,r.jsxs)(n.p,{children:["For any case of dependency injection, it is not considered a breaking change to\nadd a dependency on a Utility API or Backend Service that is provided by the\nframework. This includes any dependency that is provided by the\n",(0,r.jsx)(n.code,{children:"@backstage/app-defaults"})," and ",(0,r.jsx)(n.code,{children:"@backstage/backend-defaults"})," packages."]}),"\n",(0,r.jsx)(n.h3,{id:"release-stages",children:"Release Stages"}),"\n",(0,r.jsxs)(n.p,{children:["The release stages(",(0,r.jsx)(n.code,{children:"@alpha"}),", ",(0,r.jsx)(n.code,{children:"@beta"})," ",(0,r.jsx)(n.code,{children:"@public"}),") refers to the\n",(0,r.jsx)(n.a,{href:"https://tsdoc.org/",children:"TSDoc"})," documentation tag of the export, and are also\nvisible in the API report of each package."]}),"\n",(0,r.jsx)(n.p,{children:"Backstage uses three stages to indicate the stability for each individual\npackage export."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"@public"})," - considered stable and are available in the main package entry\npoint."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"@beta"})," - Not visible in the main package entry point, beta exports must be\naccessed via ",(0,r.jsx)(n.code,{children:"<package-name>/beta"})," or ",(0,r.jsx)(n.code,{children:"<package-name>/alpha"})," imports."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"@alpha"})," - here be dragons. Not visible in the main package entry point, alpha\nexports must be accessed via ",(0,r.jsx)(n.code,{children:"<package-name>/alpha"})," imports."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"nodejs-releases",children:"Node.js Releases"}),"\n",(0,r.jsxs)(n.p,{children:["The Backstage project uses ",(0,r.jsx)(n.a,{href:"https://nodejs.org/",children:"Node.js"})," for both its development\ntooling and backend runtime. In order for expectations to be clear we use the\nfollowing schedule for determining the ",(0,r.jsx)(n.a,{href:"https://nodejs.org/en/about/releases/",children:"Node.js releases"})," that we support:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"At any given point in time we support exactly two adjacent even-numbered\nreleases of Node.js, for example v12 and v14."}),"\n",(0,r.jsxs)(n.li,{children:["Once a new Node.js release becomes ",(0,r.jsx)(n.em,{children:"Active LTS"})," we switch to support that\nrelease and the previous one. The switch is not immediate but done as soon\nas possible. You can find the Node.js version supported by each release\nin the ",(0,r.jsx)(n.code,{children:"engines"})," field in the root ",(0,r.jsx)(n.code,{children:"package.json"})," of a new app."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["When we say ",(0,r.jsx)(n.em,{children:"Supporting"})," a Node.js release, that means the following:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The CI pipeline in the main Backstage repo tests towards the supported releases, and we encourage any other Backstage related projects to do the same."}),"\n",(0,r.jsxs)(n.li,{children:["New Backstage projects created with ",(0,r.jsx)(n.code,{children:"@backstage/create-app"})," will have their ",(0,r.jsx)(n.code,{children:"engines.node"})," version set accordingly."]}),"\n",(0,r.jsx)(n.li,{children:"Dropping compatibility with unsupported releases is not considered a breaking change. This includes using new syntax or APIs, as well as bumping dependencies that drop support for these versions."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"typescript-releases",children:"TypeScript Releases"}),"\n",(0,r.jsxs)(n.p,{children:["The Backstage project uses ",(0,r.jsx)(n.a,{href:"https://www.typescriptlang.org/",children:"TypeScript"})," for type checking within the project, as well as external APIs and documentation. It is important to have a clear policy for which TypeScript versions we support, since we want to be able to adopt new TypeScript features, but at the same time not break existing projects that are using older versions."]}),"\n",(0,r.jsx)(n.p,{children:"The TypeScript release cadence is roughly every three months. An important aspect of the TypeScript versioning is that it does not follow semver. In particular, there is no differentiation between major and minor versions, both of them are breaking. One way to think about it is to merge the two, for example version 4.7 can be considered major version 47, 5.0 is 50, and so on. Within these releases there can be a number of patch releases, which do follow semver."}),"\n",(0,r.jsx)(n.p,{children:"Our policy is to support the last 3 TypeScript versions, for example 4.8, 4.9, and 5.0. Converted to time, this means that we typically support the TypeScript version from the last six to nine months, depending on where in the TypeScript release window we are. This policy applies as a snapshot at the time of any given Backstage release, new TypeScript releases only apply to the following Backstage main-line release, not to the current one."}),"\n",(0,r.jsxs)(n.p,{children:["For anyone maintaining their own Backstage project, this means that you should strive to bump to the latest TypeScript version at least every 6 months, or you may encounter breakages as you upgrade Backstage packages. If you encounter any issues in doing so, please ",(0,r.jsx)(n.a,{href:"https://github.com/backstage/backstage/issues/new/choose",children:"file an issue in the main Backstage repository"}),", as per this policy we should always support the latest version. In order to ensure that we do not start using new TypeScript features too early, the Backstage project itself uses the version at the beginning of the currently supported window, in the above example that would be version 4.8."]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)}},862525:e=>{var n=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var n={},t=0;t<10;t++)n["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(n).map((function(e){return n[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(a){return!1}}()?Object.assign:function(e,a){for(var i,o,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),l=1;l<arguments.length;l++){for(var c in i=Object(arguments[l]))t.call(i,c)&&(s[c]=i[c]);if(n){o=n(i);for(var d=0;d<o.length;d++)r.call(i,o[d])&&(s[o[d]]=i[o[d]])}}return s}},371426:(e,n,t)=>{t(862525);var r=t(827378),a=60103;if(n.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var i=Symbol.for;a=i("react.element"),n.Fragment=i("react.fragment")}var o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var r,i={},c=null,d=null;for(r in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(d=n.ref),n)s.call(n,r)&&!l.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===i[r]&&(i[r]=n[r]);return{$$typeof:a,type:e,key:c,ref:d,props:i,_owner:o.current}}n.jsx=c,n.jsxs=c},541535:(e,n,t)=>{var r=t(862525),a=60103,i=60106;n.Fragment=60107,n.StrictMode=60108,n.Profiler=60114;var o=60109,s=60110,l=60112;n.Suspense=60113;var c=60115,d=60116;if("function"==typeof Symbol&&Symbol.for){var h=Symbol.for;a=h("react.element"),i=h("react.portal"),n.Fragment=h("react.fragment"),n.StrictMode=h("react.strict_mode"),n.Profiler=h("react.profiler"),o=h("react.provider"),s=h("react.context"),l=h("react.forward_ref"),n.Suspense=h("react.suspense"),c=h("react.memo"),d=h("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function u(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function y(e,n,t){this.props=e,this.context=n,this.refs=g,this.updater=t||f}function m(){}function v(e,n,t){this.props=e,this.context=n,this.refs=g,this.updater=t||f}y.prototype.isReactComponent={},y.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(u(85));this.updater.enqueueSetState(this,e,n,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=y.prototype;var b=v.prototype=new m;b.constructor=v,r(b,y.prototype),b.isPureReactComponent=!0;var j={current:null},x=Object.prototype.hasOwnProperty,w={key:!0,ref:!0,__self:!0,__source:!0};function k(e,n,t){var r,i={},o=null,s=null;if(null!=n)for(r in void 0!==n.ref&&(s=n.ref),void 0!==n.key&&(o=""+n.key),n)x.call(n,r)&&!w.hasOwnProperty(r)&&(i[r]=n[r]);var l=arguments.length-2;if(1===l)i.children=t;else if(1<l){for(var c=Array(l),d=0;d<l;d++)c[d]=arguments[d+2];i.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===i[r]&&(i[r]=l[r]);return{$$typeof:a,type:e,key:o,ref:s,props:i,_owner:j.current}}function T(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var _=/\/+/g;function S(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function B(e,n,t,r,o){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var l=!1;if(null===e)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case a:case i:l=!0}}if(l)return o=o(l=e),e=""===r?"."+S(l,0):r,Array.isArray(o)?(t="",null!=e&&(t=e.replace(_,"$&/")+"/"),B(o,n,t,"",(function(e){return e}))):null!=o&&(T(o)&&(o=function(e,n){return{$$typeof:a,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(o,t+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(_,"$&/")+"/")+e)),n.push(o)),1;if(l=0,r=""===r?".":r+":",Array.isArray(e))for(var c=0;c<e.length;c++){var d=r+S(s=e[c],c);l+=B(s,n,t,d,o)}else if(d=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof d)for(e=d.call(e),c=0;!(s=e.next()).done;)l+=B(s=s.value,n,t,d=r+S(s,c++),o);else if("object"===s)throw n=""+e,Error(u(31,"[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n));return l}function R(e,n,t){if(null==e)return e;var r=[],a=0;return B(e,r,"","",(function(e){return n.call(t,e,a++)})),r}function P(e){if(-1===e._status){var n=e._result;n=n(),e._status=0,e._result=n,n.then((function(n){0===e._status&&(n=n.default,e._status=1,e._result=n)}),(function(n){0===e._status&&(e._status=2,e._result=n)}))}if(1===e._status)return e._result;throw e._result}var C={current:null};function O(){var e=C.current;if(null===e)throw Error(u(321));return e}var E={ReactCurrentDispatcher:C,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:j,IsSomeRendererActing:{current:!1},assign:r};n.Children={map:R,forEach:function(e,n,t){R(e,(function(){n.apply(this,arguments)}),t)},count:function(e){var n=0;return R(e,(function(){n++})),n},toArray:function(e){return R(e,(function(e){return e}))||[]},only:function(e){if(!T(e))throw Error(u(143));return e}},n.Component=y,n.PureComponent=v,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=E,n.cloneElement=function(e,n,t){if(null==e)throw Error(u(267,e));var i=r({},e.props),o=e.key,s=e.ref,l=e._owner;if(null!=n){if(void 0!==n.ref&&(s=n.ref,l=j.current),void 0!==n.key&&(o=""+n.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(d in n)x.call(n,d)&&!w.hasOwnProperty(d)&&(i[d]=void 0===n[d]&&void 0!==c?c[d]:n[d])}var d=arguments.length-2;if(1===d)i.children=t;else if(1<d){c=Array(d);for(var h=0;h<d;h++)c[h]=arguments[h+2];i.children=c}return{$$typeof:a,type:e.type,key:o,ref:s,props:i,_owner:l}},n.createContext=function(e,n){return void 0===n&&(n=null),(e={$$typeof:s,_calculateChangedBits:n,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:o,_context:e},e.Consumer=e},n.createElement=k,n.createFactory=function(e){var n=k.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:l,render:e}},n.isValidElement=T,n.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:P}},n.memo=function(e,n){return{$$typeof:c,type:e,compare:void 0===n?null:n}},n.useCallback=function(e,n){return O().useCallback(e,n)},n.useContext=function(e,n){return O().useContext(e,n)},n.useDebugValue=function(){},n.useEffect=function(e,n){return O().useEffect(e,n)},n.useImperativeHandle=function(e,n,t){return O().useImperativeHandle(e,n,t)},n.useLayoutEffect=function(e,n){return O().useLayoutEffect(e,n)},n.useMemo=function(e,n){return O().useMemo(e,n)},n.useReducer=function(e,n,t){return O().useReducer(e,n,t)},n.useRef=function(e){return O().useRef(e)},n.useState=function(e){return O().useState(e)},n.version="17.0.2"},827378:(e,n,t)=>{e.exports=t(541535)},824246:(e,n,t)=>{e.exports=t(371426)},511151:(e,n,t)=>{t.d(n,{Zo:()=>s,ah:()=>i});var r=t(667294);const a=r.createContext({});function i(e){const n=r.useContext(a);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const o={};function s({components:e,children:n,disableParentContext:t}){let s;return s=t?"function"==typeof e?e({}):e||o:i(e),r.createElement(a.Provider,{value:s},n)}}}]);