/*! For license information please see 3178de69.bc915e20.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[466949],{675251:(e,t,a)=>{a(727418);var s=a(667294),i=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var n=Symbol.for;i=n("react.element"),t.Fragment=n("react.fragment")}var o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,r=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,a){var s,n={},l=null,d=null;for(s in void 0!==a&&(l=""+a),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)r.call(t,s)&&!c.hasOwnProperty(s)&&(n[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===n[s]&&(n[s]=t[s]);return{$$typeof:i,type:e,key:l,ref:d,props:n,_owner:o.current}}t.jsx=l,t.jsxs=l},785893:(e,t,a)=>{e.exports=a(675251)},173683:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>n,metadata:()=>r,toc:()=>l});var s=a(785893),i=a(511151);const n={title:"What the heck is Backstage anyway?",author:"Stefan \xc5lund, Spotify",authorURL:"http://twitter.com/stalund",authorImageURL:"https://pbs.twimg.com/profile_images/121166861/6919c047c0d0edaace78c3009b28e917-user-full-200-130.generated_400x400.jpg"},o=void 0,r={permalink:"/blog/2020/03/18/what-is-backstage",source:"@site/blog/2020-03-18-what-is-backstage.md",title:"What the heck is Backstage anyway?",description:"img",date:"2020-03-18T00:00:00.000Z",formattedDate:"March 18, 2020",tags:[],readingTime:5,hasTruncateMarker:!0,authors:[{name:"Stefan \xc5lund, Spotify",url:"http://twitter.com/stalund",imageURL:"https://pbs.twimg.com/profile_images/121166861/6919c047c0d0edaace78c3009b28e917-user-full-200-130.generated_400x400.jpg"}],frontMatter:{title:"What the heck is Backstage anyway?",author:"Stefan \xc5lund, Spotify",authorURL:"http://twitter.com/stalund",authorImageURL:"https://pbs.twimg.com/profile_images/121166861/6919c047c0d0edaace78c3009b28e917-user-full-200-130.generated_400x400.jpg"},unlisted:!1,prevItem:{title:"Introducing Lighthouse for Backstage",permalink:"/blog/2020/04/06/lighthouse-plugin"},nextItem:{title:"Announcing Backstage",permalink:"/blog/2020/03/16/announcing-backstage"}},c={authorsImageUrls:[void 0]},l=[{value:"What\u2019s the big infrastructure problem?",id:"whats-the-big-infrastructure-problem",level:2},{value:"What\u2019s the fix?",id:"whats-the-fix",level:2},{value:"Why did we build it?",id:"why-did-we-build-it",level:2},{value:"What are examples of how Backstage is used at Spotify?",id:"what-are-examples-of-how-backstage-is-used-at-spotify",level:2},{value:"1. Creating a new microservice",id:"1-creating-a-new-microservice",level:3},{value:"2. Following a pull request from review to production",id:"2-following-a-pull-request-from-review-to-production",level:3},{value:"3. Centralised technical documentation",id:"3-centralised-technical-documentation",level:3},{value:"4. Review performance of your team\u2019s mobile features",id:"4-review-performance-of-your-teams-mobile-features",level:3},{value:"Why did we make Backstage open source?",id:"why-did-we-make-backstage-open-source",level:2},{value:"What\u2019s next?",id:"whats-next",level:2}];function d(e){const t=Object.assign({p:"p",img:"img",a:"a",h2:"h2",ol:"ol",li:"li",h3:"h3",em:"em"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"img",src:a(314552).Z+"",width:"3030",height:"765"})}),"\n",(0,s.jsxs)(t.p,{children:["Two days ago, we released the open source version of ",(0,s.jsx)(t.a,{href:"https://backstage.io/",children:"Backstage"}),", our homegrown developer portal. And we learned a thing or two via the feedback we received. So, I wanted to take this opportunity to further explain what we\u2019re trying to do with Backstage \u2014 and more importantly, what we want to give to the greater engineering community beyond Spotify."]}),"\n",(0,s.jsx)(t.p,{children:"{/* truncate */}"}),"\n",(0,s.jsx)(t.h2,{id:"whats-the-big-infrastructure-problem",children:"What\u2019s the big infrastructure problem?"}),"\n",(0,s.jsx)(t.p,{children:"As companies grow, their infrastructure systems get messier. Consider a team that wants to deploy something to the cloud. While Spotify has many awesome engineers, not every engineer is well-versed in our chosen cloud-provider tooling. Yet everyone is required to know and understand Terraform, GCP/AWS/Azure CLIs, GitLab CI, Prometheus, Kubernetes, Docker, various monitoring and alerting tools, and much, much more. Once other resources come into play (databases, queueing, etc.), each engineer requires even more tools and domain-specific knowledge (or \u201cdisciplines\u201d), from backend to machine learning, to mobile and data."}),"\n",(0,s.jsx)(t.h2,{id:"whats-the-fix",children:"What\u2019s the fix?"}),"\n",(0,s.jsx)(t.p,{children:"Backstage unifies all your infrastructure tooling, services, and documentation with a single, consistent UI. All of it! Imagine if all your tools \u2014 GCP, Bigtable, CI pipelines, TensorFlow Extended, and whatever else is hiding in your stack \u2014 all had the same, easy-to-use interface. That\u2019s Backstage. One front end for all your infrastructure."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"img",src:a(605220).Z+"",width:"640",height:"392"})}),"\n",(0,s.jsx)(t.p,{children:"Backstage gives developers a uniform overview of all their resources, regardless of how and where they are running, as well as an easy way to onboard and start using those tools. It also allows the creation of new resources, such as backend services running in Kubernetes, with a few clicks of a button \u2014 all without having to leave the same, familiar interface of Backstage."}),"\n",(0,s.jsx)(t.h2,{id:"why-did-we-build-it",children:"Why did we build it?"}),"\n",(0,s.jsxs)(t.p,{children:["To some observers, it may seem odd that a music company is launching a best-in-class developer portal. But if you ",(0,s.jsx)(t.a,{href:"https://backstage.io/background",children:"dig deeper"}),", you\u2019ll find that since the very beginning, Spotify has been known for its agile, autonomous engineering culture. More than music, we\u2019re a tech company that has always put engineers first, empowering our developers with the ability to innovate quickly and at scale. Backstage is the natural result of that focus."]}),"\n",(0,s.jsx)(t.h2,{id:"what-are-examples-of-how-backstage-is-used-at-spotify",children:"What are examples of how Backstage is used at Spotify?"}),"\n",(0,s.jsx)(t.p,{children:"Our internal installation of Backstage has over 100 different integrations \u2014 we call them \u201cplugins\u201d. Since the open-source version currently does not have any end-to-end use cases, it can be challenging to understand what problems Backstage can solve for you. To make things more tangible, let\u2019s have a look at four of the common use-cases:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Creating a new microservice"}),"\n",(0,s.jsx)(t.li,{children:"Following a pull request from review to production"}),"\n",(0,s.jsx)(t.li,{children:"Centralised technical documentation"}),"\n",(0,s.jsx)(t.li,{children:"Review performance of your team\u2019s mobile features"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"These are just a few examples. Expect us to continue providing examples of how Backstage is used inside Spotify while we build out more end-2-end use-cases in the open."}),"\n",(0,s.jsx)(t.h3,{id:"1-creating-a-new-microservice",children:"1. Creating a new microservice"}),"\n",(0,s.jsx)(t.p,{children:"Creating any new software component at Spotify, such as a new microservice, is done with a few clicks in Backstage. Developers choose between a number of standard templates \u2014 all with best-practices built in."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"img",src:a(436347).Z+"",width:"596",height:"369"})}),"\n",(0,s.jsxs)(t.p,{children:["After inputting some metadata about your service, a new repository is created with a \u201chello world\u201d service that automatically builds and deploys in production on Kubernetes (",(0,s.jsx)(t.a,{href:"https://cloud.google.com/kubernetes-engine",children:"GKE"}),"). Ownership information is automatically captured in our service/software catalog and users can see a list of all the services they own."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"img",src:a(493219).Z+"",width:"512",height:"348"})}),"\n",(0,s.jsx)(t.h3,{id:"2-following-a-pull-request-from-review-to-production",children:"2. Following a pull request from review to production"}),"\n",(0,s.jsx)(t.p,{children:"As soon as you submit a pull request to Spotify\u2019s GitHub Enterprise, our CI system automatically posts a link to the CI/CD view in Backstage. The view provides you with all the information you need: build progress, test coverage changes, a re-trigger button, etc., so that you don\u2019t have to look for this information across different systems."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"img",src:a(663627).Z+"",width:"596",height:"380"})}),"\n",(0,s.jsx)(t.p,{children:"Our homegrown CI system uses Jenkins under the hood, but Spotify engineers don\u2019t need to know that. They interact directly with GitHub Enterprise and Backstage."}),"\n",(0,s.jsx)(t.h3,{id:"3-centralised-technical-documentation",children:"3. Centralised technical documentation"}),"\n",(0,s.jsxs)(t.p,{children:["Spotify uses a ",(0,s.jsx)(t.a,{href:"https://www.youtube.com/watch?v=uFGCaZmA6d4",children:"docs-like-code"})," approach. Engineers write technical documentation in Markdown files that live together with the code. During CI, a beautiful-looking documentation site is created using ",(0,s.jsx)(t.a,{href:"https://www.mkdocs.org/",children:"MkDocs"}),", and all sites are rendered centrally in a Backstage plugin."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"img",src:a(751654).Z+"",width:"596",height:"380"})}),"\n",(0,s.jsx)(t.p,{children:"On top of the static documentation we also incorporate additional metadata about the documentation site \u2014 such as owner, open issue and related Stack Overflow tags."}),"\n",(0,s.jsx)(t.h3,{id:"4-review-performance-of-your-teams-mobile-features",children:"4. Review performance of your team\u2019s mobile features"}),"\n",(0,s.jsx)(t.p,{children:"Our mobile apps are developed by many different teams. The codebase is divided up into different features, each owned and maintained by a separate team. If an app developer on one team wants to understand how their feature is affecting overall app performance, there\u2019s a plugin for that:"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.img,{alt:"img",src:a(704064).Z+"",width:"596",height:"380"}),"\n",(0,s.jsx)(t.em,{children:"Figures above for illustrative purposes only."})]}),"\n",(0,s.jsx)(t.p,{children:"Developers can also look at crashes, releases, test coverage over time and many more tools in the same location."}),"\n",(0,s.jsx)(t.h2,{id:"why-did-we-make-backstage-open-source",children:"Why did we make Backstage open source?"}),"\n",(0,s.jsx)(t.p,{children:"When discussing infrastructure challenges with peer companies, it\u2019s clear that we are not alone in struggling with fragmentation across our developer ecosystem. As companies adopt more open-source tooling, and build more infrastructure internally, the complexity grows. It gets harder for individual engineers to find and use all these distinct tools."}),"\n",(0,s.jsx)(t.p,{children:"Similar to how Backstage ties together all of Spotify\u2019s infrastructure, our ambition is to make the open-source version of Backstage the standard UX layer across the broader infrastructure landscape. We decided to release Backstage early so we could collaborate more closely with companies that have a similar problem \u2014 and that want to provide a better developer experience to their teams."}),"\n",(0,s.jsx)(t.h2,{id:"whats-next",children:"What\u2019s next?"}),"\n",(0,s.jsxs)(t.p,{children:["We are envisioning ",(0,s.jsx)(t.a,{href:"https://github.com/backstage/backstage/milestones",children:"three phases"})," of the project (so far), and we have already begun work on various aspects of these phases. The best way to track the work and see where you can jump in and help out is:"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://github.com/backstage/backstage/milestones",children:"https://github.com/backstage/backstage/milestones"})}),"\n",(0,s.jsxs)(t.p,{children:["Want to discuss the project or need support? Join us on ",(0,s.jsx)(t.a,{href:"https://discord.gg/backstage-687207715902193673",children:"Discord"})," or reach out on ",(0,s.jsx)(t.a,{href:"mailto:backstage-interest@spotify.com",children:"backstage-interest@spotify.com"}),"."]})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},436347:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/1-073fb6643dd3ed94a67f5b32b2803510.png"},493219:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/2-60e11d7e89b6189858356856592b0f2c.png"},663627:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/3-991dfcb18cf4e3c51ceef636ac22a85f.png"},751654:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/4-748ff63b316b041d67cf06082c41deb1.png"},704064:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/5-ad42426b7b0a0642be4c49ba3df60b6d.png"},605220:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/screen-b6c3288bb38dc51f0b90a344b08e0470.gif"},314552:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/spotify-labs-header-fa7cc7fbc23cf01390bd905628a0165f.png"},511151:(e,t,a)=>{a.d(t,{Zo:()=>r,ah:()=>n});var s=a(667294);const i=s.createContext({});function n(e){const t=s.useContext(i);return s.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const o={};function r({components:e,children:t,disableParentContext:a}){let r;return r=a?"function"==typeof e?e({}):e||o:n(e),s.createElement(i.Provider,{value:r},t)}}}]);