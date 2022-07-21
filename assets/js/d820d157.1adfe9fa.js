"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4143],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return g}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=p(n),g=i,m=f["".concat(u,".").concat(g)]||f[g]||c[g]||a;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3071:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return g}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=n(8952),l=n(3583),u=(n(9245),["components"]),p={slug:"freezed",title:"FreezeD: a Simple Baseline for Fine-tuning GANs",description:"GAN Finetuning \uc2dc\uc5d0 Discriminator\ub97c Freezing \ud558\uba74 \uc5b4\ub5bb\uac8c \ub420\uae4c\uc694?",image:"img/default.png",authors:["hkyu"],tags:["paper-review","gan"]},s=void 0,c={permalink:"/papers/freezed",source:"@site/papers/2020-09-24-paper-review-freezed/index.mdx",title:"FreezeD: a Simple Baseline for Fine-tuning GANs",description:"GAN Finetuning \uc2dc\uc5d0 Discriminator\ub97c Freezing \ud558\uba74 \uc5b4\ub5bb\uac8c \ub420\uae4c\uc694?",date:"2020-09-24T00:00:00.000Z",formattedDate:"September 24, 2020",tags:[{label:"paper-review",permalink:"/papers/tags/paper-review"},{label:"gan",permalink:"/papers/tags/gan"}],readingTime:7.665,truncated:!0,authors:[{name:"Hyoung-Kyu Song",title:"AI Researcher (Vision)",url:"https://github.com/deepkyu",imageURL:"https://github.com/deepkyu.png",key:"hkyu"}],frontMatter:{slug:"freezed",title:"FreezeD: a Simple Baseline for Fine-tuning GANs",description:"GAN Finetuning \uc2dc\uc5d0 Discriminator\ub97c Freezing \ud558\uba74 \uc5b4\ub5bb\uac8c \ub420\uae4c\uc694?",image:"img/default.png",authors:["hkyu"],tags:["paper-review","gan"]},prevItem:{title:"Differentiable Augmentation for Data-Efficient GAN Training",permalink:"/papers/diffaugment"}},f={authorsImageUrls:[void 0]},g=[{value:"Contribution",id:"contribution",level:2}],m={toc:g};function d(e){var t=e.components,n=(0,i.Z)(e,u);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/sangwoomo/FreezeD"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/static/v1?message=Official%20Repo&logo=Github&labelColor=grey&color=blue&logoColor=white&label=%20&style=flat-square",alt:"githubio"}))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'Mo, Sangwoo, et al. "Freeze the discriminator: a simple baseline for fine-tuning gans."',(0,a.kt)("br",{parentName:"p"}),"\n","CVPR AI for Content Creation Workshop (2020).")),(0,a.kt)("h2",{id:"contribution"},"Contribution"),(0,a.kt)("p",null,"GAN\uc744\xa0fine-tuning\ud558\ub294\xa0\ub370\uc5d0\xa0\uc788\uc5b4, discriminator\uc758\xa0lower layer\ub4e4(classifier\xa0\ub9d0\uace0\xa0visul repr. (=visual feature) extractor)\uc5d0 \ub300\ud574\xa0freeze\ud558\uace0\xa0G/D\uc5d0\xa0\ub300\ud574\xa0fine-tuning\uc744\xa0\uc9c4\ud589\ud558\uba74, limited data\ub85c\xa0\ud6a8\uacfc\uc801\uc778\xa0transfer learning\uc744\xa0\ud560\xa0\uc218\xa0\uc788\ub2e4."),(0,a.kt)("p",null,"\uc989, image classification \ub4f1 recognition(\ub610\ub294 understanding)\uc5d0\uc11c \uc0ac\uc6a9\ud558\ub294 fine-tuning \ubc29\uc2dd (visual representation\uc740 freeze, classifier\ub9cc use_gradient)\uc774 GAN \ubaa8\ub378\uc5d0\uc11c\ub3c4 \uc720\uc6a9\ud558\uac8c \uc0ac\uc6a9\ub420 \uc218 \uc788\ub2e4."),(0,a.kt)("img",{className:o.Z.figCenter,src:l.Z,alt:"result_graph"}))}d.isMDXComponent=!0},8952:function(e,t){t.Z={small:"small_f2c9",medium:"medium_sJ4m",figCenter:"figCenter__7gH"}},3583:function(e,t,n){t.Z=n.p+"assets/images/result_graph-131a4e1493d0c89f7b52e6d88ab11441.png"},9245:function(e,t,n){t.Z=n.p+"assets/images/table-8729e8237c9747aac68039866747ac52.png"}}]);