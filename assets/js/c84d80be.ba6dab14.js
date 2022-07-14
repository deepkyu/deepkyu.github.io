"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2004],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),g=c(n),m=a,f=g["".concat(s,".").concat(m)]||g[m]||p[m]||r;return n?i.createElement(f,o(o({ref:t},u),{},{components:n})):i.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},508:function(e,t,n){n.r(t),n.d(t,{assets:function(){return v},contentTitle:function(){return k},default:function(){return C},frontMatter:function(){return h},metadata:function(){return y},toc:function(){return _}});var i=n(7462),a=n(3366),r=(n(7294),n(3905)),o=n(8952),l=n(7025),s=n(4627),c=n(7545),u=n(2810),p=n(9037),g=n(8602),m=n(7848),f=n(6802),d=n(9787),b=["components"],h={slug:"anycost",title:"Anycost GANs for Interactive Image Synthesis and Editing",description:"\ud558\ub098\uc758 GAN Training\uc73c\ub85c \uc5ec\ub7ec \ud574\uc0c1\ub3c4\uc758 \uc774\ubbf8\uc9c0\ub97c \uc0dd\uc131\ud560 \uc218 \uc788\uac8c \ud55c \uc5f0\uad6c\ub97c \uc18c\uac1c\ud569\ub2c8\ub2e4.",image:"img/default.png",authors:["hkyu"],tags:["paper-review","gan","compression"]},k=void 0,y={permalink:"/papers/anycost",source:"@site/papers/2021-05-14-paper-review-anycostgan/index.mdx",title:"Anycost GANs for Interactive Image Synthesis and Editing",description:"\ud558\ub098\uc758 GAN Training\uc73c\ub85c \uc5ec\ub7ec \ud574\uc0c1\ub3c4\uc758 \uc774\ubbf8\uc9c0\ub97c \uc0dd\uc131\ud560 \uc218 \uc788\uac8c \ud55c \uc5f0\uad6c\ub97c \uc18c\uac1c\ud569\ub2c8\ub2e4.",date:"2021-05-14T00:00:00.000Z",formattedDate:"May 14, 2021",tags:[{label:"paper-review",permalink:"/papers/tags/paper-review"},{label:"gan",permalink:"/papers/tags/gan"},{label:"compression",permalink:"/papers/tags/compression"}],readingTime:4.22,truncated:!0,authors:[{name:"Hyoung-Kyu Song",title:"AI Researcher (Vision)",url:"https://github.com/deepkyu",imageURL:"https://github.com/deepkyu.png",key:"hkyu"}],frontMatter:{slug:"anycost",title:"Anycost GANs for Interactive Image Synthesis and Editing",description:"\ud558\ub098\uc758 GAN Training\uc73c\ub85c \uc5ec\ub7ec \ud574\uc0c1\ub3c4\uc758 \uc774\ubbf8\uc9c0\ub97c \uc0dd\uc131\ud560 \uc218 \uc788\uac8c \ud55c \uc5f0\uad6c\ub97c \uc18c\uac1c\ud569\ub2c8\ub2e4.",image:"img/default.png",authors:["hkyu"],tags:["paper-review","gan","compression"]},prevItem:{title:"Activate or Not: Learning Customized Activation",permalink:"/papers/acon"},nextItem:{title:"Differentiable Augmentation for Data-Efficient GAN Training",permalink:"/papers/diffaugment"}},v={authorsImageUrls:[void 0]},_=[{value:"Contribution",id:"contribution",level:2},{value:"Main Method",id:"main-method",level:2},{value:"Sampling-based Multi-resolution Training",id:"sampling-based-multi-resolution-training",level:3},{value:"Adaptive Channel Training",id:"adaptive-channel-training",level:3},{value:"Generator-conditioned discriminator",id:"generator-conditioned-discriminator",level:3},{value:"Result",id:"result",level:2}],N={toc:_};function C(e){var t=e.components,n=(0,a.Z)(e,b);return(0,r.kt)("wrapper",(0,i.Z)({},N,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/mit-han-lab/anycost-gan"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/static/v1?message=Official%20Repo&logo=Github&labelColor=grey&color=blue&logoColor=white&label=%20&style=flat-square",alt:"githubio"}))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'Lin, Ji, et al. "Anycost gans for interactive image synthesis and editing."\nProceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition. 2021.')),(0,r.kt)("p",null,"Song Han (Network Compression \ucd5c\uac15) + Jun-Yan Zhu (GAN \ucd5c\uac15)"),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"contribution"},"Contribution"),(0,r.kt)("img",{className:o.Z.figCenter,src:l.Z,alt:"model-general"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Intermediate Layer\ub3c4 Generation\uc758 \uacb0\uacfc\ubb3c\uc774 \ub420 \uc218 \uc788\ub2e4\ub294 \ubd80\ubd84\uc744 \uc2dc\uc0ac\ud55c \uc5f0\uad6c\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"Low Resolution Preview\ub97c \ucd94\ucd9c\ud558\ub294 \ub370\uc5d0 \ubcc4\ub3c4\uc758 \ub124\ud2b8\uc6cc\ud06c\ub97c \uad6c\uc131\ud558\uac70\ub098, \uc18d\ub3c4 \uce21\uba74\uc5d0\uc11c \uc190\ud574\ubcf4\ub294 \uac83 \uc5c6\uc774 \uad6c\ud604\uc744 \ud588\ub2e4\ub294 \uc810\uc5d0\uc11c \uc55e\uc73c\ub85c\uc758 \uc4f0\uc784\uc0c8\uac00 \uae30\ub300\ub418\ub294 \ub17c\ubb38\uc774\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"Depth Search\ub97c \ud558\ub294 \ubc29\uc2dd\uc73c\ub85c \uc77c\uc885\uc758 \ub124\ud2b8\uc6cc\ud06c \uacbd\ub7c9\ud654\ub97c \ud574\ub0b8\ub2e4\ub294 \uc544\uc774\ub514\uc5b4\ub294 \uae30\uc874\uc5d0\ub3c4 \ub9ce\uc774 \uc788\uc5c8\ub294\ub370, \uc774\ub97c Image Generation\uc5d0 \uc801\uc6a9\ud55c \uba87 \uc548 \ub418\ub294 \ub17c\ubb38\uc77c \uac83\uc774\uace0 G-conditioned Dsicriminator\ub97c \ud1b5\ud574 Discriminator\ub97c \uc0c1\ud669\uc5d0 \ub9de\uac8c \ud559\uc2b5\uc2dc\ud0a4\ub294 \ubc29\ubc95\uc740 \uc55e\uc73c\ub85c\ub3c4 \ub9ce\uc774 \ucc28\uc6a9\ud560 \uc218 \uc788\ub2e4.")),(0,r.kt)("h2",{id:"main-method"},"Main Method"),(0,r.kt)("img",{className:o.Z.figCenter,src:s.Z,alt:"architecture"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\uc88c\uce21: Generator\uc758 Decoder, \uc6b0\uce21: Discriminator")),(0,r.kt)("h3",{id:"sampling-based-multi-resolution-training"},"Sampling-based Multi-resolution Training"),(0,r.kt)("img",{className:o.Z.figCenter,src:c.Z,alt:"table"}),(0,r.kt)("p",null,"MSG-GAN\uc740 Generator\ub97c \ud559\uc2b5\ud558\ub294 \ub370 \uc788\uc5b4 \ub2e4\ub978 \ud574\uc0c1\ub3c4\ub97c \uc9c0\uc6d0\ud558\ub3c4\ub85d \ud559\uc2b5\ud558\uae30 \uc704\ud574 \ubaa8\ub4e0 \ud574\uc0c1\ub3c4\uc5d0 \ub300\ud55c Discriminator\ub97c \uac01\uac01 \ub9cc\ub4e4\uc5b4\uc11c \uc774\ub97c \ubaa8\ub450 \uc0ac\uc6a9\ud588\ub2e4. \ud558\uc9c0\ub9cc, \uc774\ub7ec\ud55c All-resolution training \ubc29\uc2dd\uc740 FFHQ \ucc98\ub7fc \ud070 \ub370\uc774\ud130\uc14b\uc5d0 \ub300\ud574 \uac01\uac01\uc744 single-resolution\uc73c\ub85c \ud559\uc2b5\ud558\ub294 \uac83\ubcf4\ub2e4 \uc88b\uc9c0 \uc54a\uc740 \uacb0\uacfc\ub97c \ub9cc\ub4e4\uc5c8\ub2e4."),(0,r.kt)("p",null,"\ubcf8 \ubaa8\ub378\uc740 \uc774\ub97c Multi-resolution\uc73c\ub85c \ud559\uc2b5\ud560 \uc218 \uc788\uac8c sampling \ud558\ub294 \ubc29\ud5a5\uc73c\ub85c \uc9c4\ud589\ud55c\ub2e4."),(0,r.kt)("h3",{id:"adaptive-channel-training"},"Adaptive Channel Training"),(0,r.kt)("img",{className:o.Z.figCenter,src:u.Z,alt:"adaptive_channel"}),(0,r.kt)("p",null,"\ubc14\ub77c\ub294 \uac83(\uc804\uc81c): Important Channel\ub4e4\uc758 \uacbd\uc6b0 sampling \ud558\ub294 \ub3d9\uc548 \ubcf4\uc874\ub420 \uac83\uc774\ub2e4."),(0,r.kt)("p",null,"\ubc29\uc2dd"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc774\uc804 stage\ub85c\ubd80\ud130 \ubaa8\ub378 Initialize\ub97c \uc9c4\ud589\ud55c\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc774 \ub54c, Kernel Magnitude\ub97c \uae30\uc900\uc73c\ub85c High to Low\ub85c sorting"),(0,r.kt)("li",{parentName:"ul"},"0.25, 0.5, 0.75, 1 x\uc758 \ube44\uc728 \uc911 \ud558\ub098\ub85c random\ud558\uac8c sampling \ud558\ub3c4\ub85d \ud568.")),(0,r.kt)("p",null,"\uc774\ub97c \ud1b5\ud574 \ubaa8\ub4e0 sub-network\uac00 fewer channel\ub9cc \uac00\uc9c0\uace0 \uc788\uc5b4\ub3c4 \uc2e4\uc7ac\uc801\uc778 \uc774\ubbf8\uc9c0\ub97c \uc0dd\uc131\ud558\ub3c4\ub85d \ud588\ub2e4. \ub2e4\ub9cc, \uc774\uac8c \uc2e4\uc81c full network\ub85c \uc0dd\uc131\ud55c \uc774\ubbf8\uc9c0\uc640\ub294 \ub2e4\ub97c \uc218 \ubc16\uc5d0 \uc5c6\uc5c8\ub294\ub370 \uc774\ub97c \uc704\ud574 consistent\ub97c \uc720\uc9c0\ud574\uc8fc\ub294 loss\ub97c \ucd94\uac00\ud588\ub2e4. (MSE (L2), LPIPS (Perceptual) Loss \uae30\ubc18)"),(0,r.kt)("h3",{id:"generator-conditioned-discriminator"},"Generator-conditioned discriminator"),(0,r.kt)("p",null,"\uac00\uc7a5 \uc26c\uc6b4 \ubc29\ubc95\uc740 Discriminator\uc758 channel \uc218\ub97c Generator\uc5d0 \ub9de\ucdb0 \uac00\uba70 \uc904\uc774\ub294 \ubc29\uc2dd\uc77c \uac83\uc774\ub2e4. \ub2e4\ub9cc, \uc774\ub7ec\ud55c \ubc29\uc2dd\uc740 Uniform\ud55c channel ratio\uc5d0\ub9cc \uc801\uc6a9\ub418\uace0, channel \uc218\uac00 \uc791\uc544\uc9c8 \ub54c\uc5d0\ub9cc \uc131\ub2a5 \ud5a5\uc0c1\uc5d0 \ub3c4\uc6c0\uc774 \ub418\ub294 \ubc29\ubc95\ub4e4\uc774\uc5c8\ub2e4."),(0,r.kt)("p",null,"\uadf8\ub798\uc11c \uc774\ub97c \ub300\uc2e0\ud574\uc11c FC Layer\ub97c \ucd94\uac00\ud558\uc5ec learnable\ud558\uac8c \uad6c\uc870\ub97c \ub9cc\ub4e4\uc5c8\ub2e4."),(0,r.kt)("p",null,"\uc6b0\uc120 Channel Configuration\uc744 Encoding \ud558\ub3c4\ub85d \ud55c\ub2e4. One-hot Encoding\uc73c\ub85c \uc704\uc5d0 0.25, 0.5, 0.75, 1 \uc911 \uac01 resolution\uc5d0 \ud574\ub2f9\ud558\ub294 layer\uac00 \ubb34\uc5c7\uc744 \uc120\ud0dd\ud588\ub294 \uc9c0\ub97c \ub098\ud0c0\ub0b4\ub294 \ubc29\uc2dd\uc774\ub2e4. \uc5ec\uae30\uc11c \uc774\ub97c G Architecture Vector (g_arch)\ub77c\uace0 \ubd80\ub978\ub2e4. \uadf8\ub9ac\uace0 \uc774\ub97c FC\uc5d0 \uc2e4\uc5b4 per-channel modulation\uc744 \ud560 \uc218 \uc788\ub3c4\ub85d Discrminator\uc5d0 \ub118\uaca8 \uc900\ub2e4. Real Image\ub97c Discriminator\uc5d0 \ub123\uc744 \ub54c\uc5d0\ub294 g_arch\ub97c random\ud558\uac8c \ubd80\uc5ec\ud55c\ub2e4."),(0,r.kt)("p",null,"Stablized Training \ud558\uae30 \uc704\ud574 \uc774\ub97c \uc804\uccb4 Discriminator\uc5d0 \uc801\uc6a9\ud558\ub294 \uac83\uc740 \uc544\ub2c8\uace0, Discriminator\uc758 \ub9c8\uc9c0\ub9c9 \ub450 Block\uc5d0\ub9cc \uc801\uc6a9\ud558\ub3c4\ub85d \ud588\ub2e4."),(0,r.kt)("h2",{id:"result"},"Result"),(0,r.kt)("img",{className:o.Z.figCenter,src:p.Z,alt:"fig5_result_graph"}),(0,r.kt)("img",{className:o.Z.figCenter,src:g.Z,alt:"fig6_channel_diff_result"}),(0,r.kt)("img",{className:o.Z.figCenter,src:m.Z,alt:"fig7_LSUN_result"}),(0,r.kt)("img",{className:o.Z.figCenter,src:f.Z,alt:"fig8_result_multiresolution"}),(0,r.kt)("img",{className:o.Z.figCenter,src:d.Z,alt:"fig9_latent_space_result"}))}C.isMDXComponent=!0},8952:function(e,t){t.Z={small:"small_f2c9",medium:"medium_sJ4m",figCenter:"figCenter__7gH"}},7025:function(e,t,n){t.Z=n.p+"assets/images/fig1_model-general-62740d0c269966dfdc9a85ef63ebe71e.png"},4627:function(e,t,n){t.Z=n.p+"assets/images/fig2_architecture-314f2800e56a423ec81bd3fea41efc25.png"},7545:function(e,t,n){t.Z=n.p+"assets/images/fig3_table1-1b32ebd7dec52b2a39f48b5fce944053.png"},2810:function(e,t,n){t.Z=n.p+"assets/images/fig4_adaptive_channel_training-294e78a2a6b7aa246008ca798a35f33d.png"},9037:function(e,t,n){t.Z=n.p+"assets/images/fig5_result_graph-e5be35f19bf280b9fb03dcb0be25c9f5.png"},8602:function(e,t,n){t.Z=n.p+"assets/images/fig6_channel_diff_result-6813eba3a496f2451b7e3f0ea187e767.png"},7848:function(e,t,n){t.Z=n.p+"assets/images/fig7_LSUN_result-c4596f6685b2f5030854437d9d36c5a1.png"},6802:function(e,t,n){t.Z=n.p+"assets/images/fig8_result_multiresolution-9f60088fd608b5b216ad3ea11462eaeb.png"},9787:function(e,t,n){t.Z=n.p+"assets/images/fig9_latent_space_result-3ffc95163028fe2cab41765ba082a20c.png"}}]);