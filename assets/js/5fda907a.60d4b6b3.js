"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2805],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=l(n),g=a,m=f["".concat(c,".").concat(g)]||f[g]||u[g]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7574:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return g}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=n(8952),s=n(7025),c=(n(4627),n(7545),n(2810),n(9037),n(8602),n(7848),n(6802),n(9787),["components"]),l={slug:"anycost",title:"Anycost GANs for Interactive Image Synthesis and Editing",description:"\ud558\ub098\uc758 GAN Training\uc73c\ub85c \uc5ec\ub7ec \ud574\uc0c1\ub3c4\uc758 \uc774\ubbf8\uc9c0\ub97c \uc0dd\uc131\ud560 \uc218 \uc788\uac8c \ud55c \uc5f0\uad6c\ub97c \uc18c\uac1c\ud569\ub2c8\ub2e4.",image:"img/default.png",authors:["hkyu"],tags:["paper-review","gan","compression"]},p=void 0,u={permalink:"/papers/anycost",source:"@site/papers/2021-05-14-paper-review-anycostgan/index.mdx",title:"Anycost GANs for Interactive Image Synthesis and Editing",description:"\ud558\ub098\uc758 GAN Training\uc73c\ub85c \uc5ec\ub7ec \ud574\uc0c1\ub3c4\uc758 \uc774\ubbf8\uc9c0\ub97c \uc0dd\uc131\ud560 \uc218 \uc788\uac8c \ud55c \uc5f0\uad6c\ub97c \uc18c\uac1c\ud569\ub2c8\ub2e4.",date:"2021-05-14T00:00:00.000Z",formattedDate:"May 14, 2021",tags:[{label:"paper-review",permalink:"/papers/tags/paper-review"},{label:"gan",permalink:"/papers/tags/gan"},{label:"compression",permalink:"/papers/tags/compression"}],readingTime:4.22,truncated:!0,authors:[{name:"Hyoung-Kyu Song",title:"AI Researcher (Vision)",url:"https://github.com/deepkyu",imageURL:"https://github.com/deepkyu.png",key:"hkyu"}],frontMatter:{slug:"anycost",title:"Anycost GANs for Interactive Image Synthesis and Editing",description:"\ud558\ub098\uc758 GAN Training\uc73c\ub85c \uc5ec\ub7ec \ud574\uc0c1\ub3c4\uc758 \uc774\ubbf8\uc9c0\ub97c \uc0dd\uc131\ud560 \uc218 \uc788\uac8c \ud55c \uc5f0\uad6c\ub97c \uc18c\uac1c\ud569\ub2c8\ub2e4.",image:"img/default.png",authors:["hkyu"],tags:["paper-review","gan","compression"]},prevItem:{title:"Activate or Not: Learning Customized Activation",permalink:"/papers/acon"},nextItem:{title:"Differentiable Augmentation for Data-Efficient GAN Training",permalink:"/papers/diffaugment"}},f={authorsImageUrls:[void 0]},g=[{value:"Contribution",id:"contribution",level:2}],m={toc:g};function d(e){var t=e.components,n=(0,a.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mit-han-lab/anycost-gan"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/static/v1?message=Official%20Repo&logo=Github&labelColor=grey&color=blue&logoColor=white&label=%20&style=flat-square",alt:"githubio"}))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},'Lin, Ji, et al. "Anycost gans for interactive image synthesis and editing."\nProceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition. 2021.')),(0,i.kt)("p",null,"Song Han (Network Compression \ucd5c\uac15) + Jun-Yan Zhu (GAN \ucd5c\uac15)"),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"contribution"},"Contribution"),(0,i.kt)("img",{className:o.Z.figCenter,src:s.Z,alt:"model-general"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Intermediate Layer\ub3c4 Generation\uc758 \uacb0\uacfc\ubb3c\uc774 \ub420 \uc218 \uc788\ub2e4\ub294 \ubd80\ubd84\uc744 \uc2dc\uc0ac\ud55c \uc5f0\uad6c\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"Low Resolution Preview\ub97c \ucd94\ucd9c\ud558\ub294 \ub370\uc5d0 \ubcc4\ub3c4\uc758 \ub124\ud2b8\uc6cc\ud06c\ub97c \uad6c\uc131\ud558\uac70\ub098, \uc18d\ub3c4 \uce21\uba74\uc5d0\uc11c \uc190\ud574\ubcf4\ub294 \uac83 \uc5c6\uc774 \uad6c\ud604\uc744 \ud588\ub2e4\ub294 \uc810\uc5d0\uc11c \uc55e\uc73c\ub85c\uc758 \uc4f0\uc784\uc0c8\uac00 \uae30\ub300\ub418\ub294 \ub17c\ubb38\uc774\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"Depth Search\ub97c \ud558\ub294 \ubc29\uc2dd\uc73c\ub85c \uc77c\uc885\uc758 \ub124\ud2b8\uc6cc\ud06c \uacbd\ub7c9\ud654\ub97c \ud574\ub0b8\ub2e4\ub294 \uc544\uc774\ub514\uc5b4\ub294 \uae30\uc874\uc5d0\ub3c4 \ub9ce\uc774 \uc788\uc5c8\ub294\ub370, \uc774\ub97c Image Generation\uc5d0 \uc801\uc6a9\ud55c \uba87 \uc548 \ub418\ub294 \ub17c\ubb38\uc77c \uac83\uc774\uace0 G-conditioned Dsicriminator\ub97c \ud1b5\ud574 Discriminator\ub97c \uc0c1\ud669\uc5d0 \ub9de\uac8c \ud559\uc2b5\uc2dc\ud0a4\ub294 \ubc29\ubc95\uc740 \uc55e\uc73c\ub85c\ub3c4 \ub9ce\uc774 \ucc28\uc6a9\ud560 \uc218 \uc788\ub2e4.")))}d.isMDXComponent=!0},8952:function(e,t){t.Z={small:"small_f2c9",medium:"medium_sJ4m",figCenter:"figCenter__7gH"}},7025:function(e,t,n){t.Z=n.p+"assets/images/fig1_model-general-62740d0c269966dfdc9a85ef63ebe71e.png"},4627:function(e,t,n){t.Z=n.p+"assets/images/fig2_architecture-314f2800e56a423ec81bd3fea41efc25.png"},7545:function(e,t,n){t.Z=n.p+"assets/images/fig3_table1-1b32ebd7dec52b2a39f48b5fce944053.png"},2810:function(e,t,n){t.Z=n.p+"assets/images/fig4_adaptive_channel_training-294e78a2a6b7aa246008ca798a35f33d.png"},9037:function(e,t,n){t.Z=n.p+"assets/images/fig5_result_graph-e5be35f19bf280b9fb03dcb0be25c9f5.png"},8602:function(e,t,n){t.Z=n.p+"assets/images/fig6_channel_diff_result-6813eba3a496f2451b7e3f0ea187e767.png"},7848:function(e,t,n){t.Z=n.p+"assets/images/fig7_LSUN_result-c4596f6685b2f5030854437d9d36c5a1.png"},6802:function(e,t,n){t.Z=n.p+"assets/images/fig8_result_multiresolution-9f60088fd608b5b216ad3ea11462eaeb.png"},9787:function(e,t,n){t.Z=n.p+"assets/images/fig9_latent_space_result-3ffc95163028fe2cab41765ba082a20c.png"}}]);