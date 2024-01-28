"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6103],{5203:(e,t,n)=>{n.r(t),n.d(t,{default:()=>v});n(7294);var s=n(4334),i=n(1944),a=n(5281),o=n(9460),r=n(7846),l=n(995),c=n(5999),d=n(2244),u=n(5893);function m(e){const{nextItem:t,prevItem:n}=e;return(0,u.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,c.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"}),children:[n&&(0,u.jsx)(d.Z,{...n,subLabel:(0,u.jsx)(c.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post",children:"Newer Post"})}),t&&(0,u.jsx)(d.Z,{...t,subLabel:(0,u.jsx)(c.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post",children:"Older Post"}),isNext:!0})]})}function g(){const{assets:e,metadata:t}=(0,o.C)(),{title:n,description:s,date:a,tags:r,authors:l,frontMatter:c}=t,{keywords:d}=c,m=e.image??c.image;return(0,u.jsxs)(i.d,{title:n,description:s,keywords:d,image:m,children:[(0,u.jsx)("meta",{property:"og:type",content:"article"}),(0,u.jsx)("meta",{property:"article:published_time",content:a}),l.some((e=>e.url))&&(0,u.jsx)("meta",{property:"article:author",content:l.map((e=>e.url)).filter(Boolean).join(",")}),r.length>0&&(0,u.jsx)("meta",{property:"article:tag",content:r.map((e=>e.label)).join(",")})]})}var h=n(794),f=n(2212);function p(e){let{sidebar:t,children:n}=e;const{metadata:s,toc:i}=(0,o.C)(),{nextItem:a,prevItem:c,frontMatter:d,unlisted:g}=s,{hide_table_of_contents:p,toc_min_heading_level:v,toc_max_heading_level:x}=d;return(0,u.jsxs)(r.Z,{sidebar:t,toc:!p&&i.length>0?(0,u.jsx)(h.Z,{toc:i,minHeadingLevel:v,maxHeadingLevel:x}):void 0,children:[g&&(0,u.jsx)(f.Z,{}),(0,u.jsx)(l.Z,{children:n}),(a||c)&&(0,u.jsx)(m,{nextItem:a,prevItem:c})]})}function v(e){const t=e.content;return(0,u.jsx)(o.n,{content:e.content,isBlogPostPage:!0,children:(0,u.jsxs)(i.FG,{className:(0,s.Z)(a.k.wrapper.blogPages,a.k.page.blogPostPage),children:[(0,u.jsx)(g,{}),(0,u.jsx)(p,{sidebar:e.sidebar,children:(0,u.jsx)(t,{})})]})})}},794:(e,t,n)=>{n.d(t,{Z:()=>j});var s=n(7294),i=n(4334),a=n(6668);function o(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const s=n.slice(2,e.level);e.parentIndex=Math.max(...s),n[e.level]=t}));const s=[];return t.forEach((e=>{const{parentIndex:n,...i}=e;n>=0?t[n].children.push(i):s.push(i)})),s}function r(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:s}=e;return t.flatMap((e=>{const t=r({toc:e.children,minHeadingLevel:n,maxHeadingLevel:s});return function(e){return e.level>=n&&e.level<=s}(e)?[{...e,children:t}]:t}))}function l(e){const t=e.getBoundingClientRect();return t.top===t.bottom?l(e.parentNode):t}function c(e,t){let{anchorTopOffset:n}=t;const s=e.find((e=>l(e).top>=n));if(s){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(l(s))?s:e[e.indexOf(s)-1]??null}return e[e.length-1]??null}function d(){const e=(0,s.useRef)(0),{navbar:{hideOnScroll:t}}=(0,a.L)();return(0,s.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function u(e){const t=(0,s.useRef)(void 0),n=d();(0,s.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:s,linkActiveClassName:i,minHeadingLevel:a,maxHeadingLevel:o}=e;function r(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(s),r=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const s=[];for(let i=t;i<=n;i+=1)s.push(`h${i}.anchor`);return Array.from(document.querySelectorAll(s.join()))}({minHeadingLevel:a,maxHeadingLevel:o}),l=c(r,{anchorTopOffset:n.current}),d=e.find((e=>l&&l.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(i),e.classList.add(i),t.current=e):e.classList.remove(i)}(e,e===d)}))}return document.addEventListener("scroll",r),document.addEventListener("resize",r),r(),()=>{document.removeEventListener("scroll",r),document.removeEventListener("resize",r)}}),[e,n])}var m=n(9960),g=n(5893);function h(e){let{toc:t,className:n,linkClassName:s,isChild:i}=e;return t.length?(0,g.jsx)("ul",{className:i?void 0:n,children:t.map((e=>(0,g.jsxs)("li",{children:[(0,g.jsx)(m.Z,{to:`#${e.id}`,className:s??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,g.jsx)(h,{isChild:!0,toc:e.children,className:n,linkClassName:s})]},e.id)))}):null}const f=s.memo(h);function p(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:i="table-of-contents__link",linkActiveClassName:l,minHeadingLevel:c,maxHeadingLevel:d,...m}=e;const h=(0,a.L)(),p=c??h.tableOfContents.minHeadingLevel,v=d??h.tableOfContents.maxHeadingLevel,x=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:i}=e;return(0,s.useMemo)((()=>r({toc:o(t),minHeadingLevel:n,maxHeadingLevel:i})),[t,n,i])}({toc:t,minHeadingLevel:p,maxHeadingLevel:v});return u((0,s.useMemo)((()=>{if(i&&l)return{linkClassName:i,linkActiveClassName:l,minHeadingLevel:p,maxHeadingLevel:v}}),[i,l,p,v])),(0,g.jsx)(f,{toc:x,className:n,linkClassName:i,...m})}const v={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"},x="table-of-contents__link toc-highlight",b="table-of-contents__link--active";function j(e){let{className:t,...n}=e;return(0,g.jsx)("div",{className:(0,i.Z)(v.tableOfContents,"thin-scrollbar",t),children:(0,g.jsx)(p,{...n,linkClassName:x,linkActiveClassName:b})})}},2212:(e,t,n)=>{n.d(t,{Z:()=>g});n(7294);var s=n(4334),i=n(5999),a=n(5742),o=n(5893);function r(){return(0,o.jsx)(i.Z,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function l(){return(0,o.jsx)(i.Z,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,o.jsx)(a.Z,{children:(0,o.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=n(5281),u=n(9047);function m(e){let{className:t}=e;return(0,o.jsx)(u.Z,{type:"caution",title:(0,o.jsx)(r,{}),className:(0,s.Z)(t,d.k.common.unlistedBanner),children:(0,o.jsx)(l,{})})}function g(e){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(c,{}),(0,o.jsx)(m,{...e})]})}},995:(e,t,n)=>{n.d(t,{Z:()=>r});var s=n(7294),i=n(2438),a=n(2949),o=n(5893);const r=function(e){const t="dark"===(0,a.I)().colorMode?"github-dark":"github-light",n=(0,s.useRef)(null);return(0,s.useEffect)((()=>{if(!e.isBlogPostPage)return;const s=n.current.querySelector("iframe.utterances-frame");s?(()=>{const e={type:"set-theme",theme:t};s.contentWindow.postMessage(e,"https://utteranc.es")})():(()=>{const e=document.createElement("script");e.src="https://utteranc.es/client.js",e.setAttribute("repo","deepkyu/deepkyu.github.io"),e.setAttribute("issue-term","pathname"),e.setAttribute("label","comments\ud83d\udcac"),e.setAttribute("theme",t),e.crossOrigin="anonymous",e.async=!0,n.current.appendChild(e)})()}),[t]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.Z,{...e}),e.isBlogPostPage&&(0,o.jsx)("div",{ref:n})]})}}}]);