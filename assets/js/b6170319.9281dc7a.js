/*! For license information please see b6170319.9281dc7a.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[834741],{594416:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=t(824246),o=t(511151);const i={id:"writing-custom-actions",title:"Writing Custom Actions",description:"How to write your own actions"},s=void 0,c={unversionedId:"features/software-templates/writing-custom-actions",id:"features/software-templates/writing-custom-actions",title:"Writing Custom Actions",description:"How to write your own actions",source:"@site/../docs/features/software-templates/writing-custom-actions.md",sourceDirName:"features/software-templates",slug:"/features/software-templates/writing-custom-actions",permalink:"/docs/features/software-templates/writing-custom-actions",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/features/software-templates/writing-custom-actions.md",tags:[],version:"current",frontMatter:{id:"writing-custom-actions",title:"Writing Custom Actions",description:"How to write your own actions"},sidebar:"docs",previous:{title:"Builtin actions",permalink:"/docs/features/software-templates/builtin-actions"},next:{title:"Writing Custom Field Extensions",permalink:"/docs/features/software-templates/writing-custom-field-extensions"}},a={},l=[{value:"Writing your Custom Action",id:"writing-your-custom-action",level:2},{value:"Naming Conventions",id:"naming-conventions",level:4},{value:"The context object",id:"the-context-object",level:3},{value:"Registering Custom Actions",id:"registering-custom-actions",level:2},{value:"List of custom action packages",id:"list-of-custom-action-packages",level:2}];function d(e){const n=Object.assign({p:"p",a:"a",blockquote:"blockquote",strong:"strong",h2:"h2",code:"code",pre:"pre",ul:"ul",li:"li",h4:"h4",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,o.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["If you want to extend the functionality of the Scaffolder, you can do so\nby writing custom actions which can be used alongside our\n",(0,r.jsx)(n.a,{href:"/docs/features/software-templates/builtin-actions",children:"built-in actions"}),"."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Note: When adding custom actions, the actions array will ",(0,r.jsx)(n.strong,{children:"replace the\nbuilt-in actions too"}),". Meaning, you will no longer be able to use them.\nIf you want to continue using the builtin actions, include them in the actions\narray when registering your custom actions, as seen below."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"writing-your-custom-action",children:"Writing your Custom Action"}),"\n",(0,r.jsxs)(n.p,{children:["Your custom action can live where you choose, but simplest is to include it\nalongside your ",(0,r.jsx)(n.code,{children:"backend"})," package in ",(0,r.jsx)(n.code,{children:"packages/backend"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Let's create a simple action that adds a new file and some contents that are\npassed as ",(0,r.jsx)(n.code,{children:"input"})," to the function."]}),"\n",(0,r.jsxs)(n.p,{children:["In ",(0,r.jsx)(n.code,{children:"packages/backend/src/plugins/scaffolder/actions/custom.ts"})," we can create a\nnew action."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:'title="With Zod"',children:"import { createTemplateAction } from '@backstage/plugin-scaffolder-node';\nimport fs from 'fs-extra';\nimport { z } from 'zod';\n\nexport const createNewFileAction = () => {\n  return createTemplateAction({\n    id: 'acme:file:create',\n    schema: {\n      input: z.object({\n        contents: z.string().describe('The contents of the file'),\n        filename: z\n          .string()\n          .describe('The filename of the file that will be created'),\n      }),\n    },\n\n    async handler(ctx) {\n      await fs.outputFile(\n        `${ctx.workspacePath}/${ctx.input.filename}`,\n        ctx.input.contents,\n      );\n    },\n  });\n};\n"})}),"\n",(0,r.jsxs)(n.p,{children:["So let's break this down. The ",(0,r.jsx)(n.code,{children:"createNewFileAction"})," is a function that returns a\n",(0,r.jsx)(n.code,{children:"createTemplateAction"}),", and it's a good place to pass in dependencies which\nclose over the ",(0,r.jsx)(n.code,{children:"TemplateAction"}),". Take a look at our\n",(0,r.jsx)(n.a,{href:"https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend/src/scaffolder/actions/builtin",children:"built-in actions"}),"\nfor reference."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"createTemplateAction"})," takes an object which specifies the following:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"id"})," - a unique ID for your custom action. We encourage you to namespace these\nin some way so that they won't collide with future built-in actions that we\nmay ship with the ",(0,r.jsx)(n.code,{children:"scaffolder-backend"})," plugin."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"schema.input"})," - A ",(0,r.jsx)(n.code,{children:"zod"})," or JSON schema object for input values to your function"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"schema.output"})," - A ",(0,r.jsx)(n.code,{children:"zod"})," or JSON schema object for values which are output from the\nfunction using ",(0,r.jsx)(n.code,{children:"ctx.output"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"handler"})," - the actual code which is run as part of the action, with a context"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["You can also choose to define your custom action using JSON schema instead of ",(0,r.jsx)(n.code,{children:"zod"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:'title="With JSON Schema"',children:"import { createTemplateAction } from '@backstage/plugin-scaffolder-node';\nimport { writeFile } from 'fs';\n\nexport const createNewFileAction = () => {\n  return createTemplateAction<{ contents: string; filename: string }>({\n    id: 'acme:file:create',\n    schema: {\n      input: {\n        required: ['contents', 'filename'],\n        type: 'object',\n        properties: {\n          contents: {\n            type: 'string',\n            title: 'Contents',\n            description: 'The contents of the file',\n          },\n          filename: {\n            type: 'string',\n            title: 'Filename',\n            description: 'The filename of the file that will be created',\n          },\n        },\n      },\n    },\n    async handler(ctx) {\n      const { signal } = ctx;\n      await writeFile(\n        `${ctx.workspacePath}/${ctx.input.filename}`,\n        ctx.input.contents,\n        { signal },\n        _ => {},\n      );\n    },\n  });\n};\n"})}),"\n",(0,r.jsx)(n.h4,{id:"naming-conventions",children:"Naming Conventions"}),"\n",(0,r.jsxs)(n.p,{children:["Try to keep names consistent for both your own custom actions, and any actions contributed to open source. We've found that a separation of ",(0,r.jsx)(n.code,{children:":"})," and using a verb as the last part of the name works well.\nWe follow ",(0,r.jsx)(n.code,{children:"provider:entity:verb"})," or as close to this as possible for our built in actions. For example, ",(0,r.jsx)(n.code,{children:"github:actions:create"})," or ",(0,r.jsx)(n.code,{children:"github:repo:create"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Also feel free to use your company name to namespace them if you prefer too, for example ",(0,r.jsx)(n.code,{children:"acme:file:create"})," like above."]}),"\n",(0,r.jsxs)(n.p,{children:["Prefer to use ",(0,r.jsx)(n.code,{children:"camelCase"})," over ",(0,r.jsx)(n.code,{children:"snake-case"})," for these actions if possible, which leads to better reading and writing of template entity definitions."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"We're aware that there are some exceptions to this, but try to follow as close as possible. We'll be working on migrating these in the repository over time too."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"the-context-object",children:"The context object"}),"\n",(0,r.jsxs)(n.p,{children:["When the action ",(0,r.jsx)(n.code,{children:"handler"})," is called, we provide you a ",(0,r.jsx)(n.code,{children:"context"})," as the only\nargument. It looks like the following:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ctx.baseUrl"})," - a string where the template is located"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ctx.logger"})," - a Winston logger for additional logging inside your action"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ctx.logStream"})," - a stream version of the logger if needed"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ctx.workspacePath"})," - a string of the working directory of the template run"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ctx.input"})," - an object which should match the ",(0,r.jsx)(n.code,{children:"zod"})," or JSON schema provided in the\n",(0,r.jsx)(n.code,{children:"schema.input"})," part of the action definition"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ctx.output"})," - a function which you can call to set outputs that match the\nJSON schema or ",(0,r.jsx)(n.code,{children:"zod"})," in ",(0,r.jsx)(n.code,{children:"schema.output"})," for ex. ",(0,r.jsx)(n.code,{children:"ctx.output('downloadUrl', myDownloadUrl)"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"createTemporaryDirectory"})," a function to call to give you a temporary\ndirectory somewhere on the runner so you can store some files there rather\nthan polluting the ",(0,r.jsx)(n.code,{children:"workspacePath"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ctx.metadata"})," - an object containing a ",(0,r.jsx)(n.code,{children:"name"})," field, indicating the template\nname. More metadata fields may be added later."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"registering-custom-actions",children:"Registering Custom Actions"}),"\n",(0,r.jsxs)(n.p,{children:["Once you have your Custom Action ready for usage with the scaffolder, you'll\nneed to pass this into the ",(0,r.jsx)(n.code,{children:"scaffolder-backend"})," ",(0,r.jsx)(n.code,{children:"createRouter"})," function. You\nshould have something similar to the below in\n",(0,r.jsx)(n.code,{children:"packages/backend/src/plugins/scaffolder.ts"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"return await createRouter({\n  containerRunner,\n  catalogClient,\n  logger: env.logger,\n  config: env.config,\n  database: env.database,\n  reader: env.reader,\n});\n"})}),"\n",(0,r.jsxs)(n.p,{children:["There's another property you can pass here, which is an array of ",(0,r.jsx)(n.code,{children:"actions"})," which\nwill set the available actions that the scaffolder has access to."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { createBuiltinActions } from '@backstage/plugin-scaffolder-backend';\nimport { ScmIntegrations } from '@backstage/integration';\nimport { createNewFileAction } from './scaffolder/actions/custom';\n\nexport default async function createPlugin(\n  env: PluginEnvironment,\n): Promise<Router> {\n  const catalogClient = new CatalogClient({ discoveryApi: env.discovery });\n  const integrations = ScmIntegrations.fromConfig(env.config);\n\n  const builtInActions = createBuiltinActions({\n    integrations,\n    catalogClient,\n    config: env.config,\n    reader: env.reader,\n  });\n\n  const actions = [...builtInActions, createNewFileAction()];\n\n  return createRouter({\n    actions,\n    catalogClient: catalogClient,\n    logger: env.logger,\n    config: env.config,\n    database: env.database,\n    reader: env.reader,\n  });\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"list-of-custom-action-packages",children:"List of custom action packages"}),"\n",(0,r.jsx)(n.p,{children:"Here is a list of Open Source custom actions that you can add to your Backstage\nscaffolder backend:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Package"}),(0,r.jsx)(n.th,{children:"Owner"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Yeoman"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://www.npmjs.com/package/@backstage/plugin-scaffolder-backend-module-yeoman",children:"plugin-scaffolder-backend-module-yeoman"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://backstage.io",children:"Backstage"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Cookiecutter"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://www.npmjs.com/package/@backstage/plugin-scaffolder-backend-module-cookiecutter",children:"plugin-scaffolder-backend-module-cookiecutter"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://backstage.io",children:"Backstage"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Rails"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://www.npmjs.com/package/@backstage/plugin-scaffolder-backend-module-rails",children:"plugin-scaffolder-backend-module-rails"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://backstage.io",children:"Backstage"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"HTTP requests"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://www.npmjs.com/package/@roadiehq/scaffolder-backend-module-http-request",children:"scaffolder-backend-module-http-request"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://roadie.io",children:"Roadie"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Utility actions"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://www.npmjs.com/package/@roadiehq/scaffolder-backend-module-utils",children:"scaffolder-backend-module-utils"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://roadie.io",children:"Roadie"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"AWS cli actions"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://www.npmjs.com/package/@roadiehq/scaffolder-backend-module-aws",children:"scaffolder-backend-module-aws"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://roadie.io",children:"Roadie"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Scaffolder .NET Actions"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://www.npmjs.com/package/@plusultra/plugin-scaffolder-dotnet-backend",children:"plugin-scaffolder-dotnet-backend"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://github.com/alefcarlos",children:"Alef Carlos"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Scaffolder Git Actions"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://www.npmjs.com/package/@mdude2314/backstage-plugin-scaffolder-git-actions",children:"plugin-scaffolder-git-actions"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://github.com/arhill05",children:"Drew Hill"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Azure Pipeline Actions"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://www.npmjs.com/package/@parfuemerie-douglas/scaffolder-backend-module-azure-pipelines",children:"scaffolder-backend-module-azure-pipelines"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://github.com/Parfuemerie-Douglas",children:"Parf\xfcmerie Douglas"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Azure Repository Actions"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://www.npmjs.com/package/@parfuemerie-douglas/scaffolder-backend-module-azure-repositories",children:"scaffolder-backend-module-azure-repositories"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://github.com/Parfuemerie-Douglas",children:"Parf\xfcmerie Douglas"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Snyk Import Project"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://www.npmjs.com/package/@ma11hewthomas/plugin-scaffolder-backend-module-snyk",children:"plugin-scaffolder-backend-module-snyk"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://github.com/Ma11hewThomas",children:"Matthew Thomas"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"JSON Merge Actions"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://www.npmjs.com/package/@mdude2314/backstage-plugin-scaffolder-json-merge-actions",children:"plugin-scaffolder-json-merge-actions"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://github.com/arhill05",children:"Drew Hill"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"NPM Actions"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://www.npmjs.com/package/@mdude2314/backstage-plugin-scaffolder-npm-actions",children:"plugin-scaffolder-npm-actions"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://github.com/arhill05",children:"Drew Hill"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Slack Actions"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://www.npmjs.com/package/@mdude2314/backstage-plugin-scaffolder-backend-module-slack",children:"plugin-scaffolder-backend-module-slack"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://github.com/arhill05",children:"Drew Hill"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Microsoft Teams Actions"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://www.npmjs.com/package/@grvpandey11/backstage-plugin-scaffolder-backend-module-ms-teams",children:"plugin-scaffolder-backend-module-ms-teams"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://github.com/grvpandey11",children:"Gaurav Pandey"})})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"Have fun! \ud83d\ude80"})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)}},862525:e=>{var n=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var n={},t=0;t<10;t++)n["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(n).map((function(e){return n[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var i,s,c=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),a=1;a<arguments.length;a++){for(var l in i=Object(arguments[a]))t.call(i,l)&&(c[l]=i[l]);if(n){s=n(i);for(var d=0;d<s.length;d++)r.call(i,s[d])&&(c[s[d]]=i[s[d]])}}return c}},371426:(e,n,t)=>{t(862525);var r=t(827378),o=60103;if(n.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var i=Symbol.for;o=i("react.element"),n.Fragment=i("react.fragment")}var s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c=Object.prototype.hasOwnProperty,a={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var r,i={},l=null,d=null;for(r in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(d=n.ref),n)c.call(n,r)&&!a.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===i[r]&&(i[r]=n[r]);return{$$typeof:o,type:e,key:l,ref:d,props:i,_owner:s.current}}n.jsx=l,n.jsxs=l},541535:(e,n,t)=>{var r=t(862525),o=60103,i=60106;n.Fragment=60107,n.StrictMode=60108,n.Profiler=60114;var s=60109,c=60110,a=60112;n.Suspense=60113;var l=60115,d=60116;if("function"==typeof Symbol&&Symbol.for){var u=Symbol.for;o=u("react.element"),i=u("react.portal"),n.Fragment=u("react.fragment"),n.StrictMode=u("react.strict_mode"),n.Profiler=u("react.profiler"),s=u("react.provider"),c=u("react.context"),a=u("react.forward_ref"),n.Suspense=u("react.suspense"),l=u("react.memo"),d=u("react.lazy")}var h="function"==typeof Symbol&&Symbol.iterator;function f(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function g(e,n,t){this.props=e,this.context=n,this.refs=m,this.updater=t||p}function j(){}function x(e,n,t){this.props=e,this.context=n,this.refs=m,this.updater=t||p}g.prototype.isReactComponent={},g.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(f(85));this.updater.enqueueSetState(this,e,n,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},j.prototype=g.prototype;var w=x.prototype=new j;w.constructor=x,r(w,g.prototype),w.isPureReactComponent=!0;var b={current:null},y=Object.prototype.hasOwnProperty,k={key:!0,ref:!0,__self:!0,__source:!0};function v(e,n,t){var r,i={},s=null,c=null;if(null!=n)for(r in void 0!==n.ref&&(c=n.ref),void 0!==n.key&&(s=""+n.key),n)y.call(n,r)&&!k.hasOwnProperty(r)&&(i[r]=n[r]);var a=arguments.length-2;if(1===a)i.children=t;else if(1<a){for(var l=Array(a),d=0;d<a;d++)l[d]=arguments[d+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps)void 0===i[r]&&(i[r]=a[r]);return{$$typeof:o,type:e,key:s,ref:c,props:i,_owner:b.current}}function _(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var C=/\/+/g;function S(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function A(e,n,t,r,s){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var a=!1;if(null===e)a=!0;else switch(c){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case o:case i:a=!0}}if(a)return s=s(a=e),e=""===r?"."+S(a,0):r,Array.isArray(s)?(t="",null!=e&&(t=e.replace(C,"$&/")+"/"),A(s,n,t,"",(function(e){return e}))):null!=s&&(_(s)&&(s=function(e,n){return{$$typeof:o,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(s,t+(!s.key||a&&a.key===s.key?"":(""+s.key).replace(C,"$&/")+"/")+e)),n.push(s)),1;if(a=0,r=""===r?".":r+":",Array.isArray(e))for(var l=0;l<e.length;l++){var d=r+S(c=e[l],l);a+=A(c,n,t,d,s)}else if(d=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=h&&e[h]||e["@@iterator"])?e:null}(e),"function"==typeof d)for(e=d.call(e),l=0;!(c=e.next()).done;)a+=A(c=c.value,n,t,d=r+S(c,l++),s);else if("object"===c)throw n=""+e,Error(f(31,"[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n));return a}function O(e,n,t){if(null==e)return e;var r=[],o=0;return A(e,r,"","",(function(e){return n.call(t,e,o++)})),r}function P(e){if(-1===e._status){var n=e._result;n=n(),e._status=0,e._result=n,n.then((function(n){0===e._status&&(n=n.default,e._status=1,e._result=n)}),(function(n){0===e._status&&(e._status=2,e._result=n)}))}if(1===e._status)return e._result;throw e._result}var R={current:null};function T(){var e=R.current;if(null===e)throw Error(f(321));return e}var E={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:b,IsSomeRendererActing:{current:!1},assign:r};n.Children={map:O,forEach:function(e,n,t){O(e,(function(){n.apply(this,arguments)}),t)},count:function(e){var n=0;return O(e,(function(){n++})),n},toArray:function(e){return O(e,(function(e){return e}))||[]},only:function(e){if(!_(e))throw Error(f(143));return e}},n.Component=g,n.PureComponent=x,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=E,n.cloneElement=function(e,n,t){if(null==e)throw Error(f(267,e));var i=r({},e.props),s=e.key,c=e.ref,a=e._owner;if(null!=n){if(void 0!==n.ref&&(c=n.ref,a=b.current),void 0!==n.key&&(s=""+n.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(d in n)y.call(n,d)&&!k.hasOwnProperty(d)&&(i[d]=void 0===n[d]&&void 0!==l?l[d]:n[d])}var d=arguments.length-2;if(1===d)i.children=t;else if(1<d){l=Array(d);for(var u=0;u<d;u++)l[u]=arguments[u+2];i.children=l}return{$$typeof:o,type:e.type,key:s,ref:c,props:i,_owner:a}},n.createContext=function(e,n){return void 0===n&&(n=null),(e={$$typeof:c,_calculateChangedBits:n,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},n.createElement=v,n.createFactory=function(e){var n=v.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:a,render:e}},n.isValidElement=_,n.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:P}},n.memo=function(e,n){return{$$typeof:l,type:e,compare:void 0===n?null:n}},n.useCallback=function(e,n){return T().useCallback(e,n)},n.useContext=function(e,n){return T().useContext(e,n)},n.useDebugValue=function(){},n.useEffect=function(e,n){return T().useEffect(e,n)},n.useImperativeHandle=function(e,n,t){return T().useImperativeHandle(e,n,t)},n.useLayoutEffect=function(e,n){return T().useLayoutEffect(e,n)},n.useMemo=function(e,n){return T().useMemo(e,n)},n.useReducer=function(e,n,t){return T().useReducer(e,n,t)},n.useRef=function(e){return T().useRef(e)},n.useState=function(e){return T().useState(e)},n.version="17.0.2"},827378:(e,n,t)=>{e.exports=t(541535)},824246:(e,n,t)=>{e.exports=t(371426)},511151:(e,n,t)=>{t.d(n,{Zo:()=>c,ah:()=>i});var r=t(667294);const o=r.createContext({});function i(e){const n=r.useContext(o);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const s={};function c({components:e,children:n,disableParentContext:t}){let c;return c=t?"function"==typeof e?e({}):e||s:i(e),r.createElement(o.Provider,{value:c},n)}}}]);