/*! For license information please see 84b1630b.864a58e6.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[16212],{675251:(e,t,a)=>{a(727418);var s=a(667294),n=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var i=Symbol.for;n=i("react.element"),t.Fragment=i("react.fragment")}var o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,r=Object.prototype.hasOwnProperty,l={key:!0,ref:!0,__self:!0,__source:!0};function h(e,t,a){var s,i={},h=null,c=null;for(s in void 0!==a&&(h=""+a),void 0!==t.key&&(h=""+t.key),void 0!==t.ref&&(c=t.ref),t)r.call(t,s)&&!l.hasOwnProperty(s)&&(i[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===i[s]&&(i[s]=t[s]);return{$$typeof:n,type:e,key:h,ref:c,props:i,_owner:o.current}}t.jsx=h,t.jsxs=h},785893:(e,t,a)=>{e.exports=a(675251)},587945:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>h});var s=a(785893),n=a(511151);const i={title:"Backstage Backend System Alpha",author:"Patrik Oldsberg",authorURL:"https://github.com/Rugvip",authorImageURL:"https://avatars.githubusercontent.com/u/4984472?v=4"},o=void 0,r={permalink:"/blog/2023/02/15/backend-system-alpha",source:"@site/blog/2023-02-15-backend-system-alpha.md",title:"Backstage Backend System Alpha",description:"backend system alpha header image",date:"2023-02-15T00:00:00.000Z",formattedDate:"February 15, 2023",tags:[],readingTime:8.005,hasTruncateMarker:!0,authors:[{name:"Patrik Oldsberg",url:"https://github.com/Rugvip",imageURL:"https://avatars.githubusercontent.com/u/4984472?v=4"}],frontMatter:{title:"Backstage Backend System Alpha",author:"Patrik Oldsberg",authorURL:"https://github.com/Rugvip",authorImageURL:"https://avatars.githubusercontent.com/u/4984472?v=4"},unlisted:!1,prevItem:{title:"Backstage Turns Three!",permalink:"/blog/2023/03/15/backstage-turns-3"},nextItem:{title:"What\u2019s Ahead in 2023?",permalink:"/blog/2023/02/06/whats-ahead-in-2023"}},l={authorsImageUrls:[void 0]},h=[{value:"History of the Backstage backend system",id:"history-of-the-backstage-backend-system",level:2},{value:"Designing the New System",id:"designing-the-new-system",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Benefits of the New System",id:"benefits-of-the-new-system",level:2},{value:"Alpha, what does it mean?",id:"alpha-what-does-it-mean",level:2},{value:"Next Steps",id:"next-steps",level:2}];function c(e){const t=Object.assign({p:"p",img:"img",a:"a",h2:"h2",ul:"ul",li:"li",code:"code"},(0,n.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"backend system alpha header image",src:a(831743).Z+"",width:"960",height:"540"})}),"\n",(0,s.jsxs)(t.p,{children:["For the past year, the Backstage maintainer team has been spending time to give the ",(0,s.jsx)(t.a,{href:"https://backstage.io/docs/plugins/backend-plugin",children:"old Backstage backend system"})," a much needed revamp. Our goal was not to build something completely new from scratch, but rather to solidify the existing foundations that have grown organically. We wanted to make plugin installation a lot simpler, while maintaining and even improving the ways in which you can customize your backend setups."]}),"\n",(0,s.jsxs)(t.p,{children:["We\u2019re happy to announce that the ",(0,s.jsx)(t.a,{href:"https://backstage.io/docs/releases/v1.11.0",children:"v1.11"})," release includes the public alpha of the ",(0,s.jsx)(t.a,{href:"https://backstage.io/docs/backend-system/",children:"new Backstage backend system"}),"! The system has already been available to use for some time, as some of you have already found, but this alpha release marks the point where we are finally ready to encourage widespread adoption by plugin builders. We still don\u2019t recommend that you use this new system in your production setups just yet, more on that later."]}),"\n",(0,s.jsx)(t.p,{children:"{/* truncate */}"}),"\n",(0,s.jsx)(t.h2,{id:"history-of-the-backstage-backend-system",children:"History of the Backstage backend system"}),"\n",(0,s.jsx)(t.p,{children:"The backend system that we all use today has grown very organically based on all the needs that have been discovered along the journey of the Backstage Open Source project. We started out with a very flexible system that was essentially just a collection of recommended patterns for plugins, along with a couple of common interfaces and utilities. This was largely due to the fact that before it was open sourced, the Backstage backend services at Spotify were all built on top of internal frameworks and practices that we couldn\u2019t bring with us. Back in 2020, we didn\u2019t have a lot of knowledge about what a good backend system for Backstage would look like, so we started off with a highly flexible foundation that would evolve organically over time."}),"\n",(0,s.jsx)(t.p,{children:"As Backstage grew across all dimensions of adopter count, community size, code size, and capability, we saw the need to take a step back and reevaluate how Backstage backend plugins are built. About one year ago, the maintainers sat down and started to sketch what a new backend system could look like."}),"\n",(0,s.jsx)(t.h2,{id:"designing-the-new-system",children:"Designing the New System"}),"\n",(0,s.jsx)(t.p,{children:"When we set out on this project, we had a few primary goals. First, we intended to introduce as few new concepts as possible. Our existing system already had a lot of different patterns, and ideally we wanted to only give those patterns names and make them part of the framework. Second, we wanted to keep the backend system recognizable to those familiar with the frontend system. The list of goals goes on, we had a lot of reasons to build this new system, these are a few more important ones:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Make it easier to create and maintain backend installations."}),"\n",(0,s.jsx)(t.li,{children:"Align how plugins provide points of customization and how those customizations are installed."}),"\n",(0,s.jsx)(t.li,{children:"Make it much easier to maintain plugins, in particular keeping the API stable."}),"\n",(0,s.jsx)(t.li,{children:"Simplify the process of splitting plugins out into separate deployments with shared environments."}),"\n",(0,s.jsx)(t.li,{children:"Improve the local development and testing experience."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Prioritizing simplicity is often a guiding principle that we use for designs that span multiple ownership roles. We decide on which parts of the system that we think are the most important to have as simple as possible, or, viewed from the opposite end, where in the system we put necessary complexity. In this case, we optimized for keeping the backend setup as simple as possible, followed by modules and plugins, then libraries, and lastly the framework itself. What this guidance means in practice is that when there is complexity that needs to be added to implement a certain feature, we place as much of it as possible within the framework itself, then libraries, plugins and modules, and if absolutely needed, the backend setup."}),"\n",(0,s.jsxs)(t.p,{children:["To get the Backstage backend system to where we are today, we went through three major stages, starting with some very early high level experimentation. If you\u2019re a fan of Git archaeology, you can see some of our early ideas in ",(0,s.jsx)(t.a,{href:"https://github.com/backstage/backstage/commit/fd3e6b67fef25a04789779700db4c37047d59d1b",children:"our experiments branch"}),", as well as the ",(0,s.jsx)(t.a,{href:"https://github.com/backstage/backend-system-exploration",children:"separate repository"})," that we used to explore different ideas together with ",(0,s.jsx)(t.a,{href:"https://roadie.io/",children:"Roadie"}),". The output of this work was all presented in an ",(0,s.jsx)(t.a,{href:"https://github.com/backstage/backstage/issues/11611",children:"RFC"})," to gather feedback."]}),"\n",(0,s.jsx)(t.p,{children:"A few months later as the RFC settled, we resumed work and followed up with an initial implementation. At this point there were still a lot of details in the design to figure out, especially as we started looking at how our existing plugins and services fit into this new system. We identified a lot of aspects that we inevitably didn\u2019t consider in the initial design, and started exploring technical solutions to those problems. There was a lot of zooming in and out, both implementing details and then stepping back and looking at how that affects the broader system and where to go next. This ended up being the most time consuming stage, and we spent several months iterating on this."}),"\n",(0,s.jsx)(t.p,{children:"We wrapped up this work just before KubeCon NA 2022, with the full system implemented. The state of the system at this point was presented in our talk on the topic, which you can see just below. Except for a few API tweaks, this is what the system still looks like today."}),"\n","\n","\n",(0,s.jsxs)(t.p,{children:["The final stage was all about polish, which we picked up at the beginning of this year. By leaving a bit of space between the main implementation, or phase two, and the polish phase, phase three, it was much easier to properly scrutinize our past solutions. We forget a lot of the low level reasoning for changes, and it is easier to step back and reconsider parts of the system. For example, we found that our initial design of the ",(0,s.jsx)(t.code,{children:"createServiceFactory"})," function was unnecessarily complex, and could be made much simpler for most usages. In addition to reviewing all the APIs, we also wrote more documentation to help users, ensured that the local development and testing experience was solid, and double checked that there was a smooth migration path from the old system."]}),"\n",(0,s.jsx)(t.h2,{id:"architecture",children:"Architecture"}),"\n",(0,s.jsxs)(t.p,{children:["Now that you\u2019ve learned about the journey of designing the new system, let\u2019s review the new architecture. This blog includes a brief introduction to the architecture of the new system. If you want to dive deeper, check out our ",(0,s.jsx)(t.a,{href:"https://backstage.io/docs/backend-system/architecture/",children:"architecture documentation"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"The backend system has five major building blocks:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Backend instances act as dependency injection containers and are the unit of deployment in which you install plugins and modules that you want to use."}),"\n",(0,s.jsx)(t.li,{children:"Plugins implement the actual features and main business logic, for example the service catalog."}),"\n",(0,s.jsx)(t.li,{children:"Services provide shared utilities for plugins to use, for example logging, database access, and serving HTTP. Services are provided by the backend and can be customized in each backend instance."}),"\n",(0,s.jsx)(t.li,{children:"Extension Points serve as an optional API surface for plugins to provide deeper customization, such as installing custom processors in the catalog. It is up to each plugin to define their own extension points."}),"\n",(0,s.jsx)(t.li,{children:"Modules extend individual plugins with additional features by interacting with the extension points that the plugins expose. A module might for example implement a single entity provider for the catalog."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"backend system architecture",src:a(527979).Z+"",width:"825",height:"419"})}),"\n",(0,s.jsx)(t.h2,{id:"benefits-of-the-new-system",children:"Benefits of the New System"}),"\n",(0,s.jsx)(t.p,{children:"This new system reduced the size of a typical backend installation from hundreds of lines of code to just about two dozen, more than an order of magnitude. This reduction comes from shifting complexity away from the backend installation and into the plugins, services, and the backend system itself. Not only does this make a typical backend setup much easier to maintain, but it also makes it much easier to build plugins and modules, and leaves fewer patterns to be unnecessarily invented."}),"\n",(0,s.jsx)(t.p,{children:"As part of this shift, we\u2019ve moved many concepts from being coding patterns to being features built into the framework. This will allow us to further evolve the backend system in much more interesting ways, and still bring along the entire Backstage plugin ecosystem. It also helps align Backstage plugins around a couple of extensibility patterns, rather than each plugin having their own bespoke patterns for how extensions are installed."}),"\n",(0,s.jsx)(t.h2,{id:"alpha-what-does-it-mean",children:"Alpha, what does it mean?"}),"\n",(0,s.jsxs)(t.p,{children:["With the release of the backend system into alpha, we are confident enough in the design of the system that we encourage plugin owners to add support for the new system in their plugins. This means following the ",(0,s.jsx)(t.a,{href:"https://backstage.io/docs/backend-system/building-plugins-and-modules/migrating",children:"plugin migration guide"})," and exporting a plugin instance. Do not remove support for the old system yet \u2013 keep your existing ",(0,s.jsx)(t.code,{children:"createRouter"})," export intact."]}),"\n",(0,s.jsx)(t.p,{children:"While we encourage migration of plugins, we do not yet recommend migrating your backend installations to the new system. We want to create space to gather and address feedback from the plugin migration experience, and to make changes if necessary."}),"\n",(0,s.jsxs)(t.p,{children:["If you are worried about the upcoming backend migration, you can ",(0,s.jsx)(t.a,{href:"https://backstage.io/docs/backend-system/building-backends/migrating#migrating-the-index-file",children:"take a peek"})," at our ",(0,s.jsx)(t.code,{children:"legacyPlugin"})," helper. It allows you to forklift over all existing plugin setups to the new backend system, and then migrate plugins one by one."]}),"\n",(0,s.jsx)(t.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,s.jsx)(t.p,{children:"During the next release we will keep working on migrating the core plugins, as well as addressing any feedback that we receive. We don\u2019t want to rush a stable release though, and won\u2019t encourage broad adoption until we\u2019re confident that we won\u2019t have to follow it up with immediate breaking changes. Yet, we are excited about where we are today, and are looking forward to the future stable release!"}),"\n",(0,s.jsx)(t.p,{children:"Useful Links:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://backstage.io/docs/backend-system/architecture/",children:"Architecture Docs"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://backstage.io/docs/backend-system/building-plugins-and-modules/",children:"Building Plugins"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://backstage.io/docs/backend-system/core-services/",children:"Core Services"})}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://discord.com/channels/687207715902193673/1034089724664610938",children:"#backend-system"})," channel in Discord"]}),"\n"]})]})}const d=function(e={}){const{wrapper:t}=Object.assign({},(0,n.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(c,e)})):c(e)}},831743:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/backend-system-alpha-2d913db2a5bace86c4583f6b1afe0273.gif"},527979:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/backend-system-architecture-166ab098e397ba6cd0b729eb72cf4301.png"},511151:(e,t,a)=>{a.d(t,{Zo:()=>r,ah:()=>i});var s=a(667294);const n=s.createContext({});function i(e){const t=s.useContext(n);return s.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const o={};function r({components:e,children:t,disableParentContext:a}){let r;return r=a?"function"==typeof e?e({}):e||o:i(e),s.createElement(n.Provider,{value:r},t)}}}]);