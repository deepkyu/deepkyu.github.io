"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3089],{8665:function(e,t,a){a.d(t,{Z:function(){return E}});var r=a(3366),n=a(7294),l=a(6010),i=a(7014),m=a(9960),s="sidebar_a9qW",o="sidebarItemTitle_uKok",c="sidebarItemList_Kvuv",g="sidebarItem_CF0Q",d="sidebarItemLink_miNk",u="sidebarItemLinkActive_RRTD",p=a(5999);function v(e){var t=e.sidebar;return 0===t.items.length?null:n.createElement("nav",{className:(0,l.Z)(s,"thin-scrollbar"),"aria-label":(0,p.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,l.Z)(o,"margin-bottom--md")},t.title),n.createElement("ul",{className:c},t.items.map((function(e){return n.createElement("li",{key:e.permalink,className:g},n.createElement(m.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:u},e.title))}))))}var h=["sidebar","toc","children"];function E(e){var t=e.sidebar,a=e.toc,m=e.children,s=(0,r.Z)(e,h),o=t&&t.items.length>0;return n.createElement(i.Z,s,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},o&&n.createElement("aside",{className:"col col--3"},n.createElement(v,{sidebar:t})),n.createElement("main",{className:(0,l.Z)("col",{"col--7":o,"col--9 col--offset-1":!o}),itemScope:!0,itemType:"http://schema.org/Blog"},m),a&&n.createElement("div",{className:"col col--2"},a))))}},7329:function(e,t,a){a.r(t),a.d(t,{default:function(){return o}});var r=a(7294),n=a(2263),l=a(8665),i=a(8902),m=a(6299),s=a(9366);function o(e){var t=e.metadata,a=e.items,o=e.sidebar,c=(0,n.Z)().siteConfig.title,g=t.blogDescription,d=t.blogTitle,u="/"===t.permalink?c:d;return r.createElement(l.Z,{title:u,description:g,wrapperClassName:s.kM.wrapper.blogPages,pageClassName:s.kM.page.blogListPage,searchMetadata:{tag:"blog_posts_list"},sidebar:o},a.map((function(e){var t=e.content;return r.createElement(i.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:t.metadata.truncated},r.createElement(t,null))})),r.createElement(m.Z,{metadata:t}))}},6299:function(e,t,a){a.d(t,{Z:function(){return i}});var r=a(7294),n=a(5999),l=a(1750);function i(e){var t=e.metadata,a=t.previousPage,i=t.nextPage;return r.createElement("nav",{className:"pagination-nav","aria-label":(0,n.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},r.createElement("div",{className:"pagination-nav__item"},a&&r.createElement(l.Z,{permalink:a,title:r.createElement(n.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")})),r.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},i&&r.createElement(l.Z,{permalink:i,title:r.createElement(n.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")})))}},8902:function(e,t,a){a.d(t,{Z:function(){return M}});var r=a(7294),n=a(6010),l=a(3905),i=a(5999),m=a(9960),s=a(4996),o=a(9366),c=a(8780),g=a(66),d=a(7462),u=a(3366),p="iconEdit_dcUD",v=["className"];function h(e){var t=e.className,a=(0,u.Z)(e,v);return r.createElement("svg",(0,d.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,n.Z)(p,t),"aria-hidden":"true"},a),r.createElement("g",null,r.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function E(e){var t=e.editUrl;return r.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:o.kM.common.editThisPage},r.createElement(h,null),r.createElement(i.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var b="blogPostTitle_rzP5",f="blogPostData_Zg1s",_="blogPostDetailsFull_h6_j",N=a(7774),Z="tags_XVD_",k="tag_JSN8";function P(e){var t=e.tags;return r.createElement(r.Fragment,null,r.createElement("b",null,r.createElement(i.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),r.createElement("ul",{className:(0,n.Z)(Z,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return r.createElement("li",{key:a,className:k},r.createElement(N.Z,{name:t,permalink:a}))}))))}var T="image_o0gy";function w(e){return e.href?r.createElement(m.Z,e):r.createElement(r.Fragment,null,e.children)}function y(e){var t=e.author,a=t.name,n=t.title,l=t.url,i=t.imageURL,m=t.email,s=l||m&&"mailto:"+m||void 0;return r.createElement("div",{className:"avatar margin-bottom--sm"},i&&r.createElement("span",{className:"avatar__photo-link avatar__photo"},r.createElement(w,{href:s},r.createElement("img",{className:T,src:i,alt:a}))),a&&r.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},r.createElement("div",{className:"avatar__name"},r.createElement(w,{href:s,itemProp:"url"},r.createElement("span",{itemProp:"name"},a))),n&&r.createElement("small",{className:"avatar__subtitle",itemProp:"description"},n)))}var I="authorCol_FlmR",L="imageOnlyAuthorRow_trpF",C="imageOnlyAuthorCol_S2np";function R(e){var t=e.authors,a=e.assets;if(0===t.length)return null;var l=t.every((function(e){return!e.name}));return r.createElement("div",{className:(0,n.Z)("margin-top--md margin-bottom--sm",l?L:"row")},t.map((function(e,t){var i;return r.createElement("div",{className:(0,n.Z)(!l&&"col col--6",l?C:I),key:t},r.createElement(y,{author:Object.assign({},e,{imageURL:null!=(i=a.authorsImageUrls[t])?i:e.imageURL})}))})))}function M(e){var t,a,d,u=(d=(0,o.c2)().selectMessage,function(e){var t=Math.ceil(e);return d(t,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),p=(0,s.C)().withBaseUrl,v=e.children,h=e.frontMatter,N=e.assets,Z=e.metadata,k=e.truncated,T=e.isBlogPostPage,w=void 0!==T&&T,y=Z.date,I=Z.formattedDate,L=Z.permalink,C=Z.tags,M=Z.readingTime,A=Z.title,D=Z.editUrl,U=Z.authors,x=null!=(t=N.image)?t:h.image,B=!w&&k,F=C.length>0,O=w?"h1":"h2";return r.createElement("article",{className:w?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},r.createElement("header",null,r.createElement(O,{className:b,itemProp:"headline"},w?A:r.createElement(m.Z,{itemProp:"url",to:L},A)),r.createElement("div",{className:(0,n.Z)(f,"margin-vert--md")},r.createElement("time",{dateTime:y,itemProp:"datePublished"},I),void 0!==M&&r.createElement(r.Fragment,null," \xb7 ",u(M))),r.createElement(R,{authors:U,assets:N})),x&&r.createElement("meta",{itemProp:"image",content:p(x,{absolute:!0})}),r.createElement("div",{id:w?c.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody"},r.createElement(l.Zo,{components:g.Z},v)),(F||k)&&r.createElement("footer",{className:(0,n.Z)("row docusaurus-mt-lg",(a={},a[_]=w,a))},F&&r.createElement("div",{className:(0,n.Z)("col",{"col--9":B})},r.createElement(P,{tags:C})),w&&D&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(E,{editUrl:D})),B&&r.createElement("div",{className:(0,n.Z)("col text--right",{"col--3":F})},r.createElement(m.Z,{to:Z.permalink,"aria-label":(0,i.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:A})},r.createElement("b",null,r.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},1750:function(e,t,a){a.d(t,{Z:function(){return l}});var r=a(7294),n=a(9960);function l(e){var t=e.permalink,a=e.title,l=e.subLabel;return r.createElement(n.Z,{className:"pagination-nav__link",to:t},l&&r.createElement("div",{className:"pagination-nav__sublabel"},l),r.createElement("div",{className:"pagination-nav__label"},a))}},7774:function(e,t,a){a.d(t,{Z:function(){return o}});var r=a(7294),n=a(6010),l=a(9960),i="tag_hD8n",m="tagRegular_D6E_",s="tagWithCount_i0QQ";function o(e){var t,a=e.permalink,o=e.name,c=e.count;return r.createElement(l.Z,{href:a,className:(0,n.Z)(i,(t={},t[m]=!c,t[s]=c,t))},o,c&&r.createElement("span",null,c))}}}]);