"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4618],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,k=m["".concat(s,".").concat(d)]||m[d]||p[d]||a;return n?i.createElement(k,l(l({ref:t},c),{},{components:n})):i.createElement(k,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<a;u++)l[u]=n[u];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5657:function(e,t,n){n.r(t),n.d(t,{assets:function(){return g},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return m},metadata:function(){return k},toc:function(){return v}});var i=n(3117),r=(n(7294),n(3905)),a=n(6010),l=n(8952),o=n(2379),s=n(3906),u=n(3895),c=n(5493),p=n(8396);const m={slug:"convnext",title:"A ConvNet for the 2020s (ConvNeXt)",description:"Convolution\uc774 \ub9d0\ud569\ub2c8\ub2e4. \ud615 \uc544\uc9c1 \uc8fd\uc9c0 \uc54a\uc558\uc5b4 \uc784\ub9c8.",image:"img/default.png",authors:["hkyu"],tags:["paper-review"]},d=void 0,k={permalink:"/papers/convnext",source:"@site/papers/2022-08-31-convnext/index.mdx",title:"A ConvNet for the 2020s (ConvNeXt)",description:"Convolution\uc774 \ub9d0\ud569\ub2c8\ub2e4. \ud615 \uc544\uc9c1 \uc8fd\uc9c0 \uc54a\uc558\uc5b4 \uc784\ub9c8.",date:"2022-08-31T00:00:00.000Z",formattedDate:"August 31, 2022",tags:[{label:"paper-review",permalink:"/papers/tags/paper-review"}],readingTime:17.19,hasTruncateMarker:!0,authors:[{name:"Hyoung-Kyu Song",title:"AI Researcher (Vision)",url:"https://github.com/deepkyu",imageURL:"https://github.com/deepkyu.png",key:"hkyu"}],frontMatter:{slug:"convnext",title:"A ConvNet for the 2020s (ConvNeXt)",description:"Convolution\uc774 \ub9d0\ud569\ub2c8\ub2e4. \ud615 \uc544\uc9c1 \uc8fd\uc9c0 \uc54a\uc558\uc5b4 \uc784\ub9c8.",image:"img/default.png",authors:["hkyu"],tags:["paper-review"]},nextItem:{title:"Activate or Not: Learning Customized Activation",permalink:"/papers/acon"}},g={authorsImageUrls:[void 0]},v=[{value:"Main Idea",id:"main-idea",level:2},{value:"Background Knowledge",id:"background-knowledge",level:2},{value:"Examples of Representative ConvNet",id:"examples-of-representative-convnet",level:3},{value:"ConvNet \uc758 \uc8fc\uc694 \ud2b9\uc9d5\ub4e4",id:"convnet-\uc758-\uc8fc\uc694-\ud2b9\uc9d5\ub4e4",level:3},{value:"\ubcc0\ud6541: Training Methodology",id:"\ubcc0\ud6541-training-methodology",level:2},{value:"\ubcc0\ud6542: \ud070 \ud2c0\uc5d0\uc11c\uc758 \uad6c\uc870 \ubcc0\uacbd",id:"\ubcc0\ud6542-\ud070-\ud2c0\uc5d0\uc11c\uc758-\uad6c\uc870-\ubcc0\uacbd",level:2},{value:"Stage Compute Ratio\ub97c (3, 3, 9, 3)\uc73c\ub85c \ubcc0\uacbd",id:"stage-compute-ratio\ub97c-3-3-9-3\uc73c\ub85c-\ubcc0\uacbd",level:3},{value:"Patch\ub97c \ub9cc\ub4dc\ub294 \uccab stem layer\uc744 Conv(ks=4, stride=4)\ub85c \ubcc0\uacbd (non-overlapping conv.)",id:"patch\ub97c-\ub9cc\ub4dc\ub294-\uccab-stem-layer\uc744-convks4-stride4\ub85c-\ubcc0\uacbd-non-overlapping-conv",level:3},{value:"\ubcc0\ud6543: ResNeXt \uc544\uc774\ub514\uc5b4 \uc801\uc6a9\ud558\uae30",id:"\ubcc0\ud6543-resnext-\uc544\uc774\ub514\uc5b4-\uc801\uc6a9\ud558\uae30",level:2},{value:"\ubcc0\ud6544: Inverted Bottleneck \uc801\uc6a9\ud558\uae30",id:"\ubcc0\ud6544-inverted-bottleneck-\uc801\uc6a9\ud558\uae30",level:2},{value:"\ubcc0\ud6545: \ud070 \uc0ac\uc774\uc988\uc758 Kernel\uc744 \uc774\uc6a9\ud558\uae30",id:"\ubcc0\ud6545-\ud070-\uc0ac\uc774\uc988\uc758-kernel\uc744-\uc774\uc6a9\ud558\uae30",level:2},{value:"\ubcc0\ud6546: Activation, Normalization Layer \ubcc0\uacbd\ud558\uae30",id:"\ubcc0\ud6546-activation-normalization-layer-\ubcc0\uacbd\ud558\uae30",level:2},{value:"ReLU\ub97c GELU\ub85c \ubcc0\uacbd",id:"relu\ub97c-gelu\ub85c-\ubcc0\uacbd",level:3},{value:"Activation Function\uc744 \uc801\uac8c \uc4f0\uae30",id:"activation-function\uc744-\uc801\uac8c-\uc4f0\uae30",level:3},{value:"Normalization\ub3c4 \uc801\uac8c \uc4f0\uae30",id:"normalization\ub3c4-\uc801\uac8c-\uc4f0\uae30",level:3},{value:"Batch Normalization \ub300\uc2e0 Layer Normalization",id:"batch-normalization-\ub300\uc2e0-layer-normalization",level:3},{value:"Separate Downsampling Layer \uc0ac\uc6a9",id:"separate-downsampling-layer-\uc0ac\uc6a9",level:3},{value:"Training Details",id:"training-details",level:2},{value:"(Pre-)Training Settings",id:"pre-training-settings",level:3},{value:"Finetuning Settings",id:"finetuning-settings",level:3}],f={toc:v};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/2201.03545"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/arXiv-2201.03545-brightgreen.svg?style=flat-square",alt:"arXiv"})),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebookresearch/ConvNeXt"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/static/v1?message=Official%20Repo&logo=Github&labelColor=grey&color=blue&logoColor=white&label=%20&style=flat-square",alt:"githubio"}))),(0,r.kt)("h2",{id:"main-idea"},"Main Idea"),(0,r.kt)("p",null,"Vision Task\uc5d0 Transformer \uae30\ubc18 Architecture\ub97c \uc811\ubaa9\ud558\ub294 ViT\uc758 \ub4f1\uc7a5 \uc774\ud6c4, classification task\uc5d0 \ub300\ud574 \uc88b\uc740 \uc131\ub2a5\uc744 \ubcf4\uc600\uc2b5\ub2c8\ub2e4. ViT \uc774\ud6c4\uc5d0 Swim Transformers \ub4f1\uc758 \ubc29\ubc95\ub860 \ub4f1\uc740 segmentation\uc774\ub098 object detection\uc5d0\ub3c4 transformer\ub97c \uc801\uc6a9\ud558\uae30 \uc704\ud574 \ub4f1\uc7a5\ud55c \ubc29\ubc95\ub4e4\uc774\uc5c8\uc2b5\ub2c8\ub2e4. Swim Transformer\uc758 \uacbd\uc6b0, \uc5ec\ub7ec ConvNet\uc744 prior\ub85c \uc0bc\ub294 hybrid\ud55c \ubc29\ubc95\uc73c\ub85c \uc774\ub97c \ud574\uacb0\ud55c \uac83\uc774 \ud2b9\uc9d5\uc785\ub2c8\ub2e4. \ud558\uc9c0\ub9cc, hybrid\ud558\ub2e4\uace0 \ud558\uae30\uc5d0\ub294 \uae30\uc874 Transformer\uc758 \ud798\uc744 \ube4c\ub9b0 \uac83\uc77c \ubfd0, ConvNet \uc790\uccb4\uac00 \uac00\uc9c0\uace0 \uc788\ub294 inductive bias\ub97c \ucd5c\ub300\ud55c \uc0ac\uc6a9\ud55c \ubc29\ubc95\uc740 \uc544\ub2d9\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc800\uc790\ub294 \uc21c\uc218\ud55c ConvNet(Transformer \uad6c\uc870\ub97c \uacc1\ub4e4\uc774\uc9c0 \uc54a\uc740)\uc758 \ud798\uc744 \ud655\uc778\ud558\uace0\uc790 \uae30\uc874\uc758 standard ResNet(architecture + \ud559\uc2b5 \ubc29\ubc95\ub860)\uc5d0\uc11c vision Transformer\ucc98\ub7fc \ud559\uc2b5\ud560 \uc218 \uc788\uac8c\ub054 \uc9c0\uae08\uae4c\uc9c0 \ub4f1\uc7a5\ud574\uc628 \uc5ec\ub7ec Novelty\ub4e4\uc744 \uc811\ubaa9\ud574\ubcf4\uace0\uc790 \uc2dc\ub3c4\ud569\ub2c8\ub2e4. \ud2b9\ud788, vision Transformer \ubaa8\ub378\ub4e4\uc774 \ub4f1\uc7a5\ud560 \ub54c \ud56d\uc0c1 \uc0c8\ub85c\uc6b4 \ud559\uc2b5 \ubc29\ubc95\ub860\uc744 \ud568\uaed8 \ub4e4\uace0 \ub098\uc640\uc11c \uc131\ub2a5 \ud5a5\uc0c1\uc744 \uc8fc\uc7a5\ud558\uace0\ub294 \ud558\ub294\ub370, \uadf8 \ud559\uc2b5 \ubc29\ubc95\ub860\ub4e4\uc744 \uae30\uc874 ConvNet\ub4e4\uc5d0 \uc801\uc6a9\ud574\ubcf8 \uc0ac\ub840\uac00 \ub9ce\uc774 \uc5c6\uc2b5\ub2c8\ub2e4. \uc5ec\ub7ec \uc2e4\ud5d8\uc744 \ud1b5\ud574 \ucd5c\uadfc\uc5d0 \ub4f1\uc7a5\ud55c \ud559\uc2b5 \ubc29\ubc95\ub860\uc744 \uc801\uc6a9\ud558\uace0 convolution block design\uc744 \uc0c8\ub86d\uac8c \ub514\uc790\uc778\ud558\uba74 \ub354 \uc9c1\uad00\uc801\uc778 \uad6c\uc870\ub85c Transformer\uc5d0 \uadfc\uc811\ud55c \uc131\ub2a5\uc744 \ubcf4\uc77c \uc218 \uc788\uc74c\uc744 \ubcf4\uc5ec\uc90d\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uac00\ub054 ConvNeXt \ub17c\ubb38\uc744 \ub4e4\uc5b4\ubcf4\uae30\ub9cc \ud558\uace0 \ucc29\uac01\ud558\ub294 \uac83 \uc911 \ud558\ub098\uac00, ConvNeXt\uc758 FLOPs \uac00 Transformer\ubcf4\ub2e4 \ud604\uc800\ud788 \uc791\uc740 \ucc44\ub85c \uc131\ub2a5\uc744 \ube44\ub4f1\ud558\uac8c \ub0b8 \uac83\uc73c\ub85c \uc544\uc2dc\ub294 \ubd84\ub4e4\uc774 \uc788\uc2b5\ub2c8\ub2e4. ConvNeXt\ub294 architecture\uac00 (inductive bias\uc5d0\uc11c \ub4f1\uc7a5\ud588\ub358) ConvNet\uc744 \uc21c\uc218\ud558\uac8c \uae30\ubc18\uc73c\ub85c \ud588\uc744 \ubfd0, \uadf8 \ubaa8\ub378 \uc0ac\uc774\uc988\uac00 Transformers \ubcf4\ub2e4 \uc808\ub300 \uc791\uc9c0\ub294 \uc54a\uc2b5\ub2c8\ub2e4. \ub2e4\ub9cc, \uc0c1\ub300\uc801\uc73c\ub85c Transformer\ubcf4\ub2e4\ub294 convolution layer\uc5d0 \ub300\ud55c compression \ubc29\ubc95\ub860\ub4e4\uc774 \ub354 \ub9ce\uc774 \uace0\uc548\ub41c\ub9cc\ud07c, \uadf8 \uc9c1\uad00\uc801\uc778 \uad6c\uc870\uc5d0 \uc758\ud574 \ub4f1\uc7a5\ud588\ub358 compression \ubc29\ubc95\ub860\ub4e4\uc744 \ub450\ub8e8 \uc801\uc6a9\ud558\uc5ec \uc55e\uc73c\ub85c \uacbd\ub7c9\ud654\ud560 \uc218 \uc788\ub294 \uac00\ub2a5\uc131\uc774 \uc880 \ub354 \uc788\ub2e4\ub294 \uac8c \uc81c \uac1c\uc778\uc801\uc778 \uc0dd\uac01\uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc8fc\ub85c ResNet 50 \uc744 \uae30\uc900\uc73c\ub85c \uc131\ub2a5 report\ub97c \uc9c4\ud589\ud558\uace0, \uac01 accuracy\ub294 random seed\ub97c \ub2e4\ub974\uac8c \ud558\uc5ec 3\ubc88\uc529 \uc2e4\ud5d8\ud55c \uacb0\uacfc\uc785\ub2c8\ub2e4. \uc694\uc998 \ub17c\ubb38\uce58\uace0 \ucca0\uc800\ud558\ub2e4\uace0 \ubcf4\ub294 \ubd84\ub3c4 \uacc4\uc2dc\uace0, \ud1b5\uacc4\uc801\uc73c\ub85c \ubb34\uc2a8 \uc758\ubbf8\uac00 \uc788\ub0d0\uace0 \ud558\uc2dc\ub294 \ubd84\ub3c4 \uc788\ub354\ub77c\uace0\uc694 \u314e\u314e \ub2e4\ub9cc, publish \uc774\ud6c4 \ud559\uacc4\uc5d0\uc11c \uac80\uc99d\ud558\uba74\uc11c ConvNeXt \uc2e4\ud5d8 \uacb0\uacfc\uac00 \uc798\ubabb\ub410\ub2e4\uace0 \ud558\ub294 \ub17c\ubb38\uc740 \ubcf8 \uc801\uc774 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h2",{id:"background-knowledge"},"Background Knowledge"),(0,r.kt)("h3",{id:"examples-of-representative-convnet"},"Examples of Representative ConvNet"),(0,r.kt)("p",null,"VGGNet, Inceptions, ResNe(X)t, DenseNet, MobileNet, EfficientNet and RegNet"),(0,r.kt)("h3",{id:"convnet-\uc758-\uc8fc\uc694-\ud2b9\uc9d5\ub4e4"},"ConvNet \uc758 \uc8fc\uc694 \ud2b9\uc9d5\ub4e4"),(0,r.kt)("p",null,'\uc544\ub798\ub294 "sliding window"\ub97c \uc0ac\uc6a9\ud558\ub294 convolution\uc5d0\uc11c \uace0\uc548\ub418\uc5c8\uae30 \ub54c\ubb38\uc5d0 \uc0dd\uaca8\ub098\ub294 \ud2b9\uc9d5\ub4e4\uc785\ub2c8\ub2e4.'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Translation equivariant",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Object detection \ub4f1\uc758 Task\uc5d0 \uc788\uc5b4\uc11c \ud2b9\ud788 \uc720\uc6a9\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uac00\ub054 equivariance, invariance \ud5f7\uac08\ub824 \ud558\uc2dc\ub294 \ubd84\ub4e4 \uacc4\uc154\uc11c \ub9d0\uc500\ub4dc\ub9ac\uba74, Patch\ub97c \uc774\ub3d9\ud558\ub4e0, \uadf8 \uacb0\uacfc\uac12\uc744 \uc774\ub3d9\ud55c\ub2e4\uace0 feature vector \uac12\uc774 \ubc14\ub00c\ub294 \uac74 \uc544\ub2c8\uc5ec\uc11c invariant \ud558\ub2e4\uace0\ub3c4 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4. (g: Identity Mapping)"))),(0,r.kt)("li",{parentName:"ul"},"Weight Sharing")),(0,r.kt)("h2",{id:"\ubcc0\ud6541-training-methodology"},"\ubcc0\ud6541: Training Methodology"),(0,r.kt)("p",null,"\uc800\uc790\ub294 ResNet 50 \uc5d0 DeiT, Swim Transformer\uc640 \uc720\uc0ac\ud55c training recipe\ub97c \uc801\uc6a9\ud558\uc5ec \uc131\ub2a5 \ud5a5\uc0c1\uc774 \uc5bc\ub9c8\ub098 \uc77c\uc5b4\ub098\ub294 \uc9c0\ub97c \uc0b4\ud3b4\ubd05\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Training epoch \uc99d\uac00",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"90 -> 300"))),(0,r.kt)("li",{parentName:"ul"},"Optimizer \ubcc0\uacbd",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Adam -> AdamW"))),(0,r.kt)("li",{parentName:"ul"},"Data augmentation",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Mixup, Cutmix, RandAugment, Random Erasing\uc744 \ucd94\uac00"))),(0,r.kt)("li",{parentName:"ul"},"Regularization scheme \ucd94\uac00",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Stochastic depth",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Depth\ub97c \uc774\ub8e8\ub294 ResBlocks \uc911 \uc77c\ubd80\ub97c random\ud558\uac8c drop\ud558\uba74\uc11c \ud559\uc2b5\ud558\ub294 \ubc29\ubc95\uc785\ub2c8\ub2e4. \uc5ec\uae30\uc11c drop \ud55c\ub2e4\ub294 \uc758\ubbf8\ub294 \uad6c\ud604\uc5d0\uc11c \ubd24\uc744 \ub54c\ub294 ResBlock\uacfc identity mapping(skip connection) \uc911 \uc120\ud0dd\ud558\ub294 \uac83\uacfc \uac19\uc2b5\ub2c8\ub2e4.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'"... Aims to shrink the depth of a network during training, while keeping it unchanged during testing. This is achieved by randomly dropping entire\xa0ResBlocks\xa0during training and bypassing their transformations through skip connections."'))))),(0,r.kt)("li",{parentName:"ul"},"Label smoothing")))),(0,r.kt)("p",null,"\uc774 \ubc29\ubc95\ub860 \ubcc0\uacbd\uc744 \ud1b5\ud574 \uc544\ub798\uc640 \uac19\uc740 \uc131\ub2a5 \ud5a5\uc0c1\uc774 \uc788\uc5c8\uc2b5\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ResNet-50: 76.1% -> 78.8% (+2.7%)")),(0,r.kt)("p",null,"\uc5b4\uca4c\uba74 traditional ConvNets\uc640 vision Transformers\uc758 \ucc28\uc774\ub294 \ud559\uc2b5 \ubc29\ubc95\uc5d0\uc11c \uc8fc\ub85c \uae30\uc778\ud55c \uac8c \uc544\ub2d0\uae4c \uc2f6\uc744 \uc815\ub3c4\uc758 \ucc28\uc774\uc77c \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4.",(0,r.kt)("br",{parentName:"p"}),"\n","\uc800\uc790\ub294 \uc774 \ud30c\ud2b8\uc5d0\uc11c \ucc3e\uc740 training recipe\ub97c hyperparameter\uc640 \ud568\uaed8 \uc720\uc9c0\ud558\uba74\uc11c \uc544\ub798\uc758 design \ubcc0\uacbd\ub4e4\uc744 \uc9c4\ud589\ud569\ub2c8\ub2e4."),(0,r.kt)("h2",{id:"\ubcc0\ud6542-\ud070-\ud2c0\uc5d0\uc11c\uc758-\uad6c\uc870-\ubcc0\uacbd"},"\ubcc0\ud6542: \ud070 \ud2c0\uc5d0\uc11c\uc758 \uad6c\uc870 \ubcc0\uacbd"),(0,r.kt)("h3",{id:"stage-compute-ratio\ub97c-3-3-9-3\uc73c\ub85c-\ubcc0\uacbd"},"Stage Compute Ratio\ub97c (3, 3, 9, 3)\uc73c\ub85c \ubcc0\uacbd"),(0,r.kt)("p",null,"\uae30\uc874 ResNet\uc758 stage\ubcc4 \ub514\uc790\uc778\uc740 \ub9e4\uc6b0 \uacbd\ud5d8\uc801\uc73c\ub85c \uacb0\uc815\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),(0,r.kt)("img",{className:l.Z.figCenter,src:o.Z,alt:"imagenet1k"}),(0,r.kt)("p",null,"4\ubc88\uc9f8 stage\uc5d0 layer\uac00 \ub9ce\uae30 \ub54c\ubb38\uc5d0(ResNet50 \uae30\uc900 6), object detection \ub4f1\uc758 downstream task\uc5d0 \uc811\ubaa9\ub418\uae30 \uc704\ud55c backbone\uc73c\ub85c \ub9ce\uc774 \uc4f0\uc77c \uc218 \uc788\uc5c8\uace0, \ud2b9\ud788 \uc774 \ub54c\uc758 feature map \uc0ac\uc774\uc988\uac00 14 x 14 \uc774\uae30\uc5d0 detector head\ub85c\uc11c\uc758 \uc5ed\ud560\ub3c4 \uacb8\ud560 \uc218 \uc788\uc5c8\uc2b5\ub2c8\ub2e4. Swim Transformer\ub294 \uc774\uc640\ub294 \ube44\uc2b7\ud558\ub098 \uc870\uae08 \ub2e4\ub978 stage ratio\ub97c \ubcf4\uc5ec\uc8fc\ub294\ub370, \uc791\uc740 \ubaa8\ub378\uc758 \uacbd\uc6b0 (1, 1, 3, 1), \ud070 \ubaa8\ub378\uc758 \uacbd\uc6b0 (1, 1, 9, 1)\uc758 \ube44\uc728\uc744 \ubcf4\uc5ec\uc90d\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc800\uc790\ub294 Swim-T\uc640\uc758 FLOPs\ub97c \uc720\uc0ac\ud55c \ube44\uc728\ub85c \uac00\uc838\uac00\uae30 \uc704\ud574, \uae30\uc874\uc758 stage ratio (3, 4, 6, 3)\uc744 (3, 3, 9, 3)\uc73c\ub85c \ubcc0\uacbd\ud588\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc774 \ubc29\ubc95\ub860 \ubcc0\uacbd\uc744 \ud1b5\ud574 \uc544\ub798\uc640 \uac19\uc740 \uc131\ub2a5 \ud5a5\uc0c1\uc774 \uc788\uc5c8\uc2b5\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ResNet-50: 78.8% -> 79.4 (+0.6%, \ub204\uc801: +3.3%)")),(0,r.kt)("p",null,"Network design space\uc5d0 \uad00\ud55c \uc5f0\uad6c\ub4e4\uc744 \uc0b4\ud3b4\ubcf4\uba74, \uc774\ubcf4\ub2e4 \ucda9\ubd84\ud788 \ub354 \uc88b\uc740 stage compute ratio\uac00 \uc788\uc744 \uc218\ub3c4 \uc788\ub2e4\uace0 \uc800\uc790\ub294 \ub9d0\ud569\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"patch\ub97c-\ub9cc\ub4dc\ub294-\uccab-stem-layer\uc744-convks4-stride4\ub85c-\ubcc0\uacbd-non-overlapping-conv"},"Patch\ub97c \ub9cc\ub4dc\ub294 \uccab stem layer\uc744 Conv(ks=4, stride=4)\ub85c \ubcc0\uacbd (non-overlapping conv.)"),(0,r.kt)("p",null,"Stem cell design\uc740 \uc544\ud0a4\ud14d\uccd0 \uac00\uc7a5 \ucc98\uc74c\uc5d0 input image\ub97c \uc5b4\ub5bb\uac8c \ucc98\ub9ac\ud574\uc904 \uc9c0\ub97c \ub2f4\uace0 \uc788\uc2b5\ub2c8\ub2e4. ResNet\uc5d0\uc11c\ub294 kernel size 7x7, stride 2 \uc758 Conv layer(2x downsample)\uacfc max-pooling(2x downsample)\uc744 \ud1b5\ud574 4x downsample \uc2dc\ud0a4\ub294 stem cell design\uc744 \uc0ac\uc6a9\ud588\uc2b5\ub2c8\ub2e4. vision Transformer \ub4e4\uc740 \uc774\ubcf4\ub2e4\ub3c4 \ub354 \uacfc\uac10\ud558\uac8c patch\ub97c \ub9cc\ub4dc\ub294 \uc804\ub7b5\uc744 \uc0ac\uc6a9\ud558\ub294 \ub370, 14x14 \ub610\ub294 16x16\uc758 \uc544\uc8fc \ud070 kernel size\ub97c \uac00\uc9c4 Conv layer\ub97c \uacb9\uce58\ub294 \ubd80\ubd84\uc774 \uc5c6\uac8c\ub054(kernel size\uc640 stride\uac00 \ub3d9\uc77c) \uc124\uc815\ud569\ub2c8\ub2e4. Swim Transformer\uc758 \uacbd\uc6b0, \uc774 design\uc5d0 \ucd94\uac00\ub85c multi-stage design\uc744 \uc704\ud574 4x4 patch size\uc758 layer\ub97c \ubcc4\uac1c\ub85c \ub450\uc5c8\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc800\uc790\ub294 ResNet-style stem cell\ub85c\uc11c kernel size 4x4, stride 4\ub85c \uc124\uc815\ud55c conv. layer(4x downsample)\ub97c stem cell design\uc73c\ub85c \uc120\uc815\ud588\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc774 \ubc29\ubc95\ub860 \ubcc0\uacbd\uc744 \ud1b5\ud574 \uc544\ub798\uc640 \uac19\uc740 \uc131\ub2a5 \ud5a5\uc0c1\uc774 \uc788\uc5c8\uc2b5\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ResNet-50: 79.4% -> 79.5% (+0.1%, \ub204\uc801: +3.4%)")),(0,r.kt)("p",null,"ResNet\uc5d0\uc11c patch\ub97c \ub9cc\ub4dc\ub294 \ubc29\ubc95\uc5d0 \uc788\uc5b4\uc11c\ub294 \uc774\ub807\uac8c ViT \ub4f1\uc5d0\uc11c \ubcf4\uc5ec\uc900 \ub354 \uc26c\uc6b4 \ubc29\ubc95\ub4e4\uc744 \uc0ac\uc6a9\ud558\ub294 \uac83\uc73c\ub85c \uad50\uccb4 \uac00\ub2a5\ud560 \uc218 \uc788\uc74c\uc744 \uc2dc\uc0ac\ud569\ub2c8\ub2e4."),(0,r.kt)("h2",{id:"\ubcc0\ud6543-resnext-\uc544\uc774\ub514\uc5b4-\uc801\uc6a9\ud558\uae30"},"\ubcc0\ud6543: ResNeXt \uc544\uc774\ub514\uc5b4 \uc801\uc6a9\ud558\uae30"),(0,r.kt)("p",null,"ResNeXt \uc5d0\uc11c\ub294 bottleneck block\uc5d0\uc11c grouped convolution\uc744 \uc0ac\uc6a9\ud568\uc73c\ub85c\uc11c, FLOPs\ub97c \uc904\uc774\uace0 network width(# channel in hidden layers) \ub97c \ub298\ub9b4 \uc218 \uc788\uc5c8\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc800\uc790\ub294 grouped convolution\uc758 \ub9e5\ub77d\uc5d0\uc11c depthwise convolution\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4. Depthwise convolution\uc740 per-channel\ub85c self-attention\uc758 weighted sum\uacfc \ub3d9\uc77c\ud55c \uc5ed\ud560\uc744 \ud558\uac8c \ub418\ub294\ub370\uc694. \uc989, spatial dimension\uc73c\ub85c\ub9cc \uc815\ubcf4\ub97c \uc11e\ub294 \uc5ed\ud560\uc744 \ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc774\ub97c \ud1b5\ud574 FLOPs\ub294 \ud6a8\uacfc\uc801\uc73c\ub85c \uc904\uc774\uba74\uc11c\ub3c4 \uc815\ud655\ub3c4\ub294 \ub354\uc6b1 \uc5bb\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. Width\ub97c \ud655\uc7a5\ud560 \uc218 \uc788\uac8c \ub41c \ub9cc\ud07c, width\ub97c Swim Transformer\ub97c \ub530\ub77c 64\uc5d0\uc11c 96\uc73c\ub85c \ub298\ub9ac\uac8c \ub418\uc5c8\ub2e4. \uadf8\ub9ac\uace0 \uc774\ub97c \ud1b5\ud574 \uc544\ub798\uc640 \uac19\uc740 \uc131\ub2a5 \ud5a5\uc0c1\uc774 \uc788\uc5c8\uc2b5\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ResNet-50: 79.5% -> 80.5% (+1.0%, \ub204\uc801: +4.4%)")),(0,r.kt)("img",{className:(0,a.Z)(l.Z.figCenter,l.Z.medium),src:s.Z,alt:"block"}),(0,r.kt)("p",null,"(a): ResNeXt block / (b): inverted bottleneck / (c): position switch of depthwise conv layer"),(0,r.kt)("h2",{id:"\ubcc0\ud6544-inverted-bottleneck-\uc801\uc6a9\ud558\uae30"},"\ubcc0\ud6544: Inverted Bottleneck \uc801\uc6a9\ud558\uae30"),(0,r.kt)("p",null,"Transformer\uc5d0\uc11c\uc758 inverted bottleneck\uc740 MLP block \uc911 hidden layer\uc758 dimension\uc774 input dimensionqhek 4\ubc30 \ud06c\uac8c \ub514\uc790\uc778 \ub41c \uac83\uc744 \ub9d0\ud569\ub2c8\ub2e4. ConvNet\uc5d0\uc11c\ub3c4 inverted bottleneck\uc740 MobileNetV2\uc5d0\uc11c \ub4f1\uc7a5\ud55c \uc774\ud6c4 \ub450\ub8e8 \uc4f0\uc774\uace0 \uc788\ub294\ub370, layer\uc758 \ud615\ud0dc\ub9cc \ub2e4\ub97c \ubfd0 Transformer\uc5d0\uc11c \uc0ac\uc6a9\ud558\ub294 inverted block\uacfc \uc720\uc0ac\ud558\ub2e4\uace0 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub97c \ubc18\uc601\ud558\uba74, \uc704 figure \ub0b4 (a)\uc5d0\uc11c (b)\ub85c\uc758 \ubcc0\ud654\ub77c\uace0 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4. Depthwise convolution(\ubcf4\ub77c\uc0c9)\uc758 FLOPs \ub294 \ub298\uc5b4\ub098\uc9c0\ub9cc \uc804\uccb4 \ub124\ud2b8\uc6cc\ud06c\uc758 FLOPs\ub294 \uc904\uc5b4\ub4dc\ub294\ub370, \uc774\ub294 downsampling\uc744 \uc9c4\ud589\ud558\ub294 residual block \ub0b4\uc758 1x1 conv layer (shortcut layer) \uc758 FLOPs\uac00 \uc904\uc5b4\ub4e4\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4(layer \ubcc4: (384 -> 384) 1x1 conv -> (96 -> 96) 1x1 conv)."),(0,r.kt)("p",null,"\uc800\uc790\ub294 inverted bottleneck \uad6c\uc870\ub97c \uc801\uc6a9\ud588\uace0, \uc544\ub798\uc640 \uac19\uc740 \uc131\ub2a5 \ud5a5\uc0c1\uc774 \uc788\uc5c8\uc2b5\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ResNet-50: 80.5% -> 80.6% (+0.1%, \ub204\uc801: +4.5%)")),(0,r.kt)("h2",{id:"\ubcc0\ud6545-\ud070-\uc0ac\uc774\uc988\uc758-kernel\uc744-\uc774\uc6a9\ud558\uae30"},"\ubcc0\ud6545: \ud070 \uc0ac\uc774\uc988\uc758 Kernel\uc744 \uc774\uc6a9\ud558\uae30"),(0,r.kt)("p",null,"Vision Transformer\uc5d0\uc11c \uc0ac\uc6a9\ud558\ub294 self-attention\uc740 non-local\ud55c \ud2b9\uc131\uc744 \uac00\uc9c0\uace0 \uc788\uc5b4, \uc0ac\uc2e4\uc0c1 receptive field\uac00 global\ud558\ub2e4\uace0 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\uc640\ub294 \ubc18\ub300\ub85c ConvNet\uc5d0\uc11c\ub294 GPU\uc758 \ud2b9\uc131\uc744 \uace0\ub824\ud558\uc5ec \ud6a8\uc728\uc801\uc778 \uc5f0\uc0b0\uc744 \uc704\ud574 VGG network\ub97c \uc2dc\uc791\uc73c\ub85c 3x3\uc758 \uc791\uc740 \uc0ac\uc774\uc988\uc758 kernel \uc0ac\uc774\uc988\ub97c \uc0ac\uc6a9\ud588\uc2b5\ub2c8\ub2e4. Swim Transformer\ub294 self-attention\uc744 \uc0ac\uc6a9\ud558\ub294 \ub370\uc5d0 \uc788\uc5b4 local window\ub97c \uc801\uc6a9\ud558\ub294\ub370, \uc5ec\uae30\uc11c\ub294 kernel size\ub97c \ucd5c\uc18c 7x7 \ub85c \uc7a1\uc544\uc11c \uc0ac\uc6a9\ud588\uc5c8\uc2b5\ub2c8\ub2e4. \uc800\uc790\ub294 ConvNet\uc5d0\ub3c4 large kernel size\ub97c \uc801\uc6a9\ud574\ubcf4\uace0\uc790 \ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc6b0\uc120 kernel size\ub97c \ud0a4\uc6b0\uae30 \uc704\ud574\uc11c\ub294 depthwise conv. \uc758 \uc704\uce58\ub97c 1x1 conv. \uc55e\uc73c\ub85c \uac00\uc838\uc640\uc57c \ud569\ub2c8\ub2e4. \uc774\ub294 Transformer\uc5d0\uc11c MSA(Multi-head Self Attention)\uac00 MLP layer \uc55e\uc5d0 \uc788\ub294 \uad6c\uc870\uc640 \uc720\uc0ac\ud558\uac8c \uac00\uc838\uac00\uae30 \uc704\ud568\uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc774 \uc0c1\ud0dc\uc5d0\uc11c \uc800\uc790\ub294 kernel size\ub97c 3, 5, 7, 9, 11 \ub4f1\uc758 \ud06c\uae30\ub85c \ubc14\uafd4\uac00\uba74\uc11c \uc2e4\ud5d8\uc744 \uc9c4\ud589\ud588\uc2b5\ub2c8\ub2e4. Kernel size\uac00 \ub2ec\ub77c\uc9c4\ub2e4\uace0 FLOPs\uc5d0 \ubbf8\uce58\ub294 \uc601\ud5a5\uc740 \ubbf8\ubbf8\ud569\ub2c8\ub2e4. \uc800\uc790\ub4e4\uc758 \uc2e4\ud5d8\uc744 \ud1b5\ud574 7x7\ubcf4\ub2e4 \ud070 kernel\uc5d0\uc11c\ub294 \uc131\ub2a5\uc774 \ub354 \uc99d\uac00\ud558\uc9c0 \uc54a\uace0 saturate \ub418\ub294 \uac83\uc744 \ud655\uc778\ud588\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc774\ub97c \ud1b5\ud574 inverted bottleneck\uae4c\uc9c0 \uc801\uc6a9\ud588\uc744 \ub54c\uc640 \ub3d9\uc77c\ud55c accuracy\ub97c \ubcf4\uc774\uba74\uc11c\ub3c4 FLOPs\ub294 4.6G\uc5d0\uc11c 4.2G\ub85c \ub0ae\ucd9c \uc218 \uc788\uc5c8\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h2",{id:"\ubcc0\ud6546-activation-normalization-layer-\ubcc0\uacbd\ud558\uae30"},"\ubcc0\ud6546: Activation, Normalization Layer \ubcc0\uacbd\ud558\uae30"),(0,r.kt)("img",{className:(0,a.Z)(l.Z.figCenter,l.Z.medium),src:u.Z,alt:"block-design"}),(0,r.kt)("p",null,"\uac00\uc7a5 \uc6b0\uce21 ConvNeXt block\uc774 \uc800\uc790\uac00 \ucd5c\uc885\uc801\uc73c\ub85c \ub514\uc790\uc778\ud55c \ud615\ud0dc\uc785\ub2c8\ub2e4. \uc544\ub798 \ub0b4\uc6a9\uc744 \ubaa8\ub450 \ud655\uc778\ud558\uc2dc\uace0 \uc800 block\uc5d0 \ud574\ub2f9\ud558\ub294 \ub0b4\uc6a9\ub4e4\uc774 \uc798 \ubc18\uc601\ub418\uc5c8\ub294\uc9c0 \ud655\uc778\ud574\ubcf4\uc138\uc694\ud83d\ude0a."),(0,r.kt)("h3",{id:"relu\ub97c-gelu\ub85c-\ubcc0\uacbd"},"ReLU\ub97c GELU\ub85c \ubcc0\uacbd"),(0,r.kt)("p",null,"ConvNet\uc5d0\uc11c\ub294 \uc544\uc9c1\ub3c4 ReLU\uac00 \ub450\ub8e8 \uc4f0\uc774\uace0, original Transformer \ub17c\ubb38\uc5d0\uc11c\ub3c4 ReLU\ub97c \uc0ac\uc6a9\ud558\uc9c0\ub9cc, \uadf8 \uc774\ud6c4 \ub4f1\uc7a5\ud55c NLP Transformer(BERT, GPT-2)\uc640 ViT\uc5d0\uc11c\ub294 GELU(Gaussian Error Linear Unit)\uc744 \ub9ce\uc774 \uc0ac\uc6a9\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc774\ub97c \uc801\uc6a9\ud588\uc744 \ub54c, \ubcc4\ub3c4\uc758 \uc131\ub2a5 \ud5a5\uc0c1\uc740 \uc5c6\uc5c8\uc9c0\ub9cc, GELU\uac00 ConvNet\uc5d0\ub3c4 \uc801\uc6a9\ub420 \uc218 \uc788\uc74c\uc744 \ubcf4\uc5ec\uc900 \ubcc0\ud654\uc810\uc774\ub77c\uace0 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"activation-function\uc744-\uc801\uac8c-\uc4f0\uae30"},"Activation Function\uc744 \uc801\uac8c \uc4f0\uae30"),(0,r.kt)("p",null,"Transformer block\uc5d0\uc11c\ub3c4 MLP block \ub0b4 activation 1\ubc88 \uc4f0\uc774\ub294 \uac83 \uc678\ub85c\ub294 \uc4f0\uc774\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uc774\ub294 1x1 conv. \ub4a4\uc5d0\uae4c\uc9c0 activation\uc744 \ubd99\uc774\ub294 ConvNet\uc5d0\uc11c\uc758 \ud589\ud0dc\uc640\ub294 \ub9e4\uc6b0 \ub2e4\ub985\ub2c8\ub2e4. \uc800\uc790\ub294 Transformer block design\uc744 \ub530\ub77c, residual block \ub0b4\uc5d0 \ubaa8\ub4e0 GELU activation\uc744 \uc9c0\uc6b0\uace0, 1x1 layer \uc0ac\uc774\uc5d0 activation \ud558\ub098\ub9cc \ub0a8\uaca8\ub450\uc5c8\uc2b5\ub2c8\ub2e4. \uc774\uc640 \uac19\uc740 \ubcc0\ud654\ub97c \ud1b5\ud574 \uc544\ub798\uc640 \uac19\uc740 \uc131\ub2a5 \ud5a5\uc0c1\uc774 \uc788\uc5c8\uc2b5\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ResNet-50: 80.6% -> 81.3% (+0.7%, \ub204\uc801: +5.2%)")),(0,r.kt)("p",null,"\uc774 \uc131\ub2a5\uc740 Swim-T\uc640 \ub3d9\uc77c\ud55c \uc131\ub2a5\uc785\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"normalization\ub3c4-\uc801\uac8c-\uc4f0\uae30"},"Normalization\ub3c4 \uc801\uac8c \uc4f0\uae30"),(0,r.kt)("p",null,"Transformer\uc5d0\uc11c\ub294 normalization layer\ub3c4 \uc801\uac8c \uc0ac\uc6a9\ud569\ub2c8\ub2e4. \uc800\uc790\ub294 \uc774\ub97c \ub530\ub77c 1x1 conv \uc55e\uc5d0 \ud558\ub098\uc758 BN(Batch Normalization)\ub9cc\uc744 \ub194\ub450\uace0, \ub098\uba38\uc9c0 normalization layer\ub97c \uc9c0\uc6e0\uc2b5\ub2c8\ub2e4. \uc774\ub97c \ud1b5\ud574 \uc544\ub798\uc640 \uac19\uc740 \uc131\ub2a5 \ud5a5\uc0c1\uc774 \uc788\uc5c8\uc2b5\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ResNet-50: 81.3% -> 81.4% (+0.1%, \ub204\uc801: +5.3%)")),(0,r.kt)("p",null,"\uc7ac\ubc0c\ub294 \uc810\uc740 \uc774\ub7ec\ud55c \ubcc0\ud654\ub97c \ud1b5\ud574 Transfomer\ubcf4\ub2e4\ub3c4 \uc624\ud788\ub824 normalization layer\uac00 \uc801\uc5b4\uc84c\uc2b5\ub2c8\ub2e4. \uc774\ub294 Transformer layer\ub294 block \ucd08\uc785\uc5d0 LN((Layer Normalization) \uc744 \ucde8\ud558\ub294\ub370, \uc800\uc790\ub294 BN\uc744 \ubd99\uc778\ub2e4\uace0 \uc131\ub2a5\uc774 \uc88b\uc544\uc9c0\uc9c0 \uc54a\uc544\uc11c \uadf8\ub0e5 \uc9c0\uc6e0\ub2e4\uace0 \ud569\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"batch-normalization-\ub300\uc2e0-layer-normalization"},"Batch Normalization \ub300\uc2e0 Layer Normalization"),(0,r.kt)("p",null,"\ub9ce\uc740 vision task\uc5d0\uc11c BN\uc774 \uc0ac\ub791\ubc1b\uace0 \uc788\ub294 \uac83\uc740 \uc0ac\uc2e4\uc778\ub370\uc694. \ud558\uc9c0\ub9cc, Transformer\uc5d0\uc11c\ub294 \uc774\ubbf8 LN\uc744 \uc4f0\uba74\uc11c \uc88b\uc740 \uc131\ub2a5\uc744 \ubcf4\uc778 \uacbd\uc6b0\uac00 \ub9ce\uc558\uc2b5\ub2c8\ub2e4. \uc800\uc790\ub294 \uc774 \uc0c1\ud0dc\uc5d0\uc11c LN\uc744 \uc801\uc6a9\ud574\uc11c\ub3c4 \ud559\uc2b5\ud558\ub294 \ub370 \ubb34\ub9ac\uac00 \uc5c6\uc74c\uc744 \ud655\uc778\ud588\uace0 \uc624\ud788\ub824 \uc544\ub798\uc640 \uac19\uc740 \uc131\ub2a5 \ud5a5\uc0c1\uc774 \uc788\uc5c8\uc2b5\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ResNet-50: 81.4% -> 81.5% (+0.1%, \ub204\uc801: +5.4%)")),(0,r.kt)("h3",{id:"separate-downsampling-layer-\uc0ac\uc6a9"},"Separate Downsampling Layer \uc0ac\uc6a9"),(0,r.kt)("p",null,"\uc774 \ub0b4\uc6a9\uc740 block \ub0b4\ubd80\uc5d0 \ubc18\uc601\ub41c \ub0b4\uc6a9\uc774 \uc544\ub2c8\ub77c, stage \ub118\uc5b4\uac00\uba74\uc11c downsample\uc744 \ud560 \ub54c\uc5d0 \ud574\ub2f9\ud558\ub294 \ub0b4\uc6a9\uc785\ub2c8\ub2e4. \uc704 diagram\uc5d0\ub294 \ub4dc\ub7ec\ub098\uc9c0 \uc54a\ub294 \ubd80\ubd84\uc774\ub2c8 \ucc38\uace0\ud574\uc8fc\uc138\uc694~",(0,r.kt)("br",{parentName:"p"}),"\n","Swim Transformer\uac00 patch merging\uc744 \ud560 \ub54c 2x2 neighborhood patch\ub4e4\uc758 channel\uc744 concat\ud558\uc5ec(4C) \uc774\uc5d0 \ub300\ud574 2C \uc758 channel size\uac00 \ub418\ub3c4\ub85d \ub0b4\ubc49\uc2b5\ub2c8\ub2e4. \uc774\ub97c Conv. \ub85c \ud45c\ud604\ud558\uba74 channel size\uac00 2\ubc30\uac00 \ub418\uace0, kernel size\ub294 2x2, stride 2\uc778 \uac83\uc785\ub2c8\ub2e4. \uc800\uc790\ub294 ResNet\uc5d0\uc11c kernel size 3x3, stride 2, padding 1 \ub85c \ub9c8\uce58 \uacf5\uc2dd\ucc98\ub7fc \uc4f0\uc774\ub358 downsample\ud558\ub294 conv. layer \ub300\uc2e0\uc5d0 Swim Transformer\uc5d0\uc11c\uc758 downsample \ubc29\uc2dd\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4. \uadf8\ub0e5 \uc774\ub97c \ub300\uce58\uc2dc\ud0a4\uba74 \ud559\uc2b5\uc774 diverge \ub418\ub294\ub370, block-level\uc5d0\uc11c spatial resolution\uc774 \ubcc0\uacbd\ub418\ub294 \uc9c0\uc810\uc5d0 LN\uc744 \uc801\ub2f9\ud788 \ub123\uc5b4\uc8fc\uba74 \uc774\uc5d0 \ub300\ud574 \ud559\uc2b5\uc774 stabilize \ub418\ub294 \uac83\uc744 \ucc3e\uc544\ub0c5\ub2c8\ub2e4. \uc774\ub294 Swim Transformer\ub3c4 \uc801\uc6a9\ub41c \ubc29\uc2dd\uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uadf8\ub9ac\uace0 \uc774\ub97c \ud1b5\ud574 \ucd5c\uc885\uc801\uc73c\ub85c ConvNeXt\ub294 \uc544\ub798\uc758 \uc131\ub2a5 \ud5a5\uc0c1\uc744 \ubcf4\uc600\uc2b5\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ResNet-50: 81.5% -> 82.0% (+0.5%, \ub204\uc801: +5.9%)")),(0,r.kt)("h2",{id:"training-details"},"Training Details"),(0,r.kt)("p",null,"\uc800\uc790\ub294 \ubcf8 \ubaa8\ub378\uc744 \uc5b4\ub5bb\uac8c \ud559\uc2b5\ud588\ub294 \uc9c0 Hyperparameter\uc640 \ud559\uc2b5 \uc138\ud305\ub3c4 \ud568\uaed8 \ubcf4\uc5ec\uc8fc\uace0 \uc788\uc2b5\ub2c8\ub2e4.",(0,r.kt)("br",{parentName:"p"}),"\n","Augmentation, optimizer \ub4f1 \uc5ec\ub7ec \ubd80\ubd84\uc5d0\uc11c \ub4f1\uc7a5\ud55c \ucd5c\uc2e0\uc758 \ud559\uc2b5 \ubc29\ubc95\ub860\ub4e4\uc744 \ud55c \uacf3\uc5d0 \ubaa8\uc544\ub454 \ub290\ub08c\uc785\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"pre-training-settings"},"(Pre-)Training Settings"),(0,r.kt)("img",{className:(0,a.Z)(l.Z.figCenter,l.Z.small),src:c.Z,alt:"pretrain"}),(0,r.kt)("h3",{id:"finetuning-settings"},"Finetuning Settings"),(0,r.kt)("img",{className:(0,a.Z)(l.Z.figCenter,l.Z.small),src:p.Z,alt:"finetune"}))}h.isMDXComponent=!0},6010:function(e,t,n){function i(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=i(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=i(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})},8952:function(e,t){t.Z={small:"small_f2c9",medium:"medium_sJ4m",figCenter:"figCenter__7gH"}},2379:function(e,t,n){t.Z=n.p+"assets/images/figure1-imagenet1k-4c92a355f2805984792477b06d558009.png"},3906:function(e,t,n){t.Z=n.p+"assets/images/figure2-block-0c4373a08e91dae993b0c579624d7da8.png"},3895:function(e,t,n){t.Z=n.p+"assets/images/figure3-block-design-60ac24931c3b5b08d1bcb0b361c1debf.png"},5493:function(e,t,n){t.Z=n.p+"assets/images/figure4-pretrain-abd6f5f77e98f8c2066000329b278825.png"},8396:function(e,t,n){t.Z=n.p+"assets/images/figure5-finetune-062a17c7c12e0d895436abd6ecdcb8a2.png"}}]);