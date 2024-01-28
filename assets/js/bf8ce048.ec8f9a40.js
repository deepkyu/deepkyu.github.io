"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[7560],{2121:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>f,contentTitle:()=>j,default:()=>v,frontMatter:()=>x,metadata:()=>u,toc:()=>N});var a=n(5893),i=n(1151),t=n(6010),l=n(8952),r=n(4716),m=n(8076),c=(n(1488),n(3440)),o=n(3723),h=n(2026),d=(n(1451),n(8087)),p=n(7558),g=n(63);const x={slug:"diffaugment",title:"Differentiable Augmentation for Data-Efficient GAN Training",description:"\uc801\uc740 \ub370\uc774\ud130\ub85c \ud6a8\uc728\uc801\uc73c\ub85c GAN \ud559\uc2b5\ud558\ub294 \ubc29\ubc95\uc744 \ud655\uc778\ud574\ubd05\ub2c8\ub2e4.",image:"img/default.png",authors:["hkyu"],tags:["paper-review","gan"]},j=void 0,u={permalink:"/papers/diffaugment",source:"@site/papers/2021-05-03-paper-review-diffaugment/index.mdx",title:"Differentiable Augmentation for Data-Efficient GAN Training",description:"\uc801\uc740 \ub370\uc774\ud130\ub85c \ud6a8\uc728\uc801\uc73c\ub85c GAN \ud559\uc2b5\ud558\ub294 \ubc29\ubc95\uc744 \ud655\uc778\ud574\ubd05\ub2c8\ub2e4.",date:"2021-05-03T00:00:00.000Z",formattedDate:"May 3, 2021",tags:[{label:"paper-review",permalink:"/papers/tags/paper-review"},{label:"gan",permalink:"/papers/tags/gan"}],readingTime:6.865,hasTruncateMarker:!0,authors:[{name:"Hyoung-Kyu Song",title:"AI Researcher (Vision)",url:"https://github.com/deepkyu",imageURL:"https://github.com/deepkyu.png",key:"hkyu"}],frontMatter:{slug:"diffaugment",title:"Differentiable Augmentation for Data-Efficient GAN Training",description:"\uc801\uc740 \ub370\uc774\ud130\ub85c \ud6a8\uc728\uc801\uc73c\ub85c GAN \ud559\uc2b5\ud558\ub294 \ubc29\ubc95\uc744 \ud655\uc778\ud574\ubd05\ub2c8\ub2e4.",image:"img/default.png",authors:["hkyu"],tags:["paper-review","gan"]},unlisted:!1,prevItem:{title:"Anycost GANs for Interactive Image Synthesis and Editing",permalink:"/papers/anycost"},nextItem:{title:"FreezeD: a Simple Baseline for Fine-tuning GANs",permalink:"/papers/freezed"}},f={authorsImageUrls:[void 0]},N=[{value:"\ubc30\uacbd \uc9c0\uc2dd",id:"\ubc30\uacbd-\uc9c0\uc2dd",level:2},{value:"\uae30\uc874\uc758 Regularization",id:"\uae30\uc874\uc758-regularization",level:3},{value:"D\ub294 \uc9c0\uae08\uae4c\uc9c0 Overfitting \ud574\uc654\ub2e4",id:"d\ub294-\uc9c0\uae08\uae4c\uc9c0-overfitting-\ud574\uc654\ub2e4",level:3},{value:"Training Method",id:"training-method",level:2},{value:"Result",id:"result",level:2},{value:"StyleGAN2\uc640 \ube44\uad50",id:"stylegan2\uc640-\ube44\uad50",level:3},{value:"Low-Shot Generation",id:"low-shot-generation",level:3},{value:"Result",id:"result-1",level:2},{value:"Training Performance",id:"training-performance",level:3},{value:"Interpolation\ub3c4 \uac00\ub2a5\ud558\ub2e4",id:"interpolation\ub3c4-\uac00\ub2a5\ud558\ub2e4",level:3},{value:"Model Size\uc5d0 \ub300\ud55c \ubd84\uc11d",id:"model-size\uc5d0-\ub300\ud55c-\ubd84\uc11d",level:3},{value:"Regularization",id:"regularization",level:3},{value:"Ablation for Augmentation",id:"ablation-for-augmentation",level:3}];function y(e){const s={a:"a",admonition:"admonition",annotation:"annotation",blockquote:"blockquote",br:"br",h2:"h2",h3:"h3",img:"img",li:"li",math:"math",mfrac:"mfrac",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msub:"msub",msup:"msup",p:"p",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.p,{children:(0,a.jsx)(s.a,{href:"https://github.com/mit-han-lab/data-efficient-gans",children:(0,a.jsx)(s.img,{src:"https://img.shields.io/static/v1?message=Official%20Repo&logo=Github&labelColor=grey&color=blue&logoColor=white&label=%20&style=flat-square",alt:"githubio"})})}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsxs)(s.p,{children:['Zhao, Shengyu, et al. "Differentiable augmentation for data-efficient gan training."',(0,a.jsx)(s.br,{}),"\n","Advances in Neural Information Processing Systems 33 (2020): 7559-7570."]}),"\n"]}),"\n",(0,a.jsx)(s.p,{children:"\ucc38\uace0\ub85c Song Han \uc5f0\uad6c\uc2e4\uc740 Neural Network Compression \ubd84\uc57c\uc5d0 \uc788\uc5b4 Top\uc744 \ub2ec\ub9ac\uace0 \uc788\ub294 \uc5f0\uad6c\uc2e4\uc774\ub2e4. \ud6c4\uc5d0 \uc18c\uac1c\ud560 AnycostGAN\uc5d0\uc11c\ub3c4 DiffAugment\uac00 \uc5b8\uae09\uc774 \ub41c\ub2e4."}),"\n",(0,a.jsx)(s.p,{children:"Han Lab\uc740 \uae30\uc874\uc5d0\ub294 \ubc29\ubc95\ub860\uc5d0 \uc788\uc5b4 Network Pruning, KD(Knowledge Distillation) \ub4f1\uc5d0 \uc9d1\uc911\uc744 \ud588\uace0, TinyTL \ub4f1 Activation\uc5d0 \ub300\ud55c \uacbd\ub7c9\ud654\ub3c4 \uc5f0\uad6c\ub97c \uc9c4\ud589\ud588\ub2e4. \ub2e4\ub9cc, \ub300\ubd80\ubd84 Task\uac00 Image Recognition\uc5d0 \uad6d\ud55c\ub418\uc5b4 \uc788\uc5c8\ub2e4. Song Han\uc740 CVPR2020\uc5d0\uc11c GAN Compression\uc774\ub77c\ub294 \ub17c\ubb38\uc744 \ud1b5\ud574 Image Generation\uc5d0 \ub300\ud55c Compression \ub17c\ubb38\uc744 \uc2dc\uc791\uc73c\ub85c, GAN \uad00\ub828 \uc5f0\uad6c\ub97c \uc9c0\uc18d\ud574\uc11c \uc774\uc5b4\uc624\uace0 \uc788\ub2e4."}),"\n","\n",(0,a.jsx)(s.h2,{id:"\ubc30\uacbd-\uc9c0\uc2dd",children:"\ubc30\uacbd \uc9c0\uc2dd"}),"\n",(0,a.jsx)(s.h3,{id:"\uae30\uc874\uc758-regularization",children:"\uae30\uc874\uc758 Regularization"}),"\n",(0,a.jsx)(s.p,{children:"GAN Training \uc790\uccb4\uac00 \uad49\uc7a5\ud788 Unstable\ud55c Process\uc774\uae30 \ub54c\ubb38\uc5d0, \ucd94\uac00\uc801\uc778 Regularization\uc774 \ub9ce\uc774 \ud544\uc694\ud558\ub2e4. \uc9c0\uae08\uae4c\uc9c0 \uc5ec\ub7ec\uac00\uc9c0 Regularization \ubc29\uc2dd\ub4e4\uc774 \ub4f1\uc7a5\ud588\ub2e4."}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"Instance Noise"}),"\n",(0,a.jsx)(s.li,{children:"Jensen-Shannon Regularization"}),"\n",(0,a.jsx)(s.li,{children:"Gradient Penalty"}),"\n",(0,a.jsx)(s.li,{children:"Spectral Normalization"}),"\n",(0,a.jsx)(s.li,{children:"Adversarial Defense Regularization"}),"\n",(0,a.jsx)(s.li,{children:"Consistency Regularization"}),"\n"]}),"\n",(0,a.jsx)(s.p,{children:"\uc774\ub7ec\ud55c Regularization Method\ub4e4\uc740 Input \uc774\ubbf8\uc9c0\uc5d0 \ub300\ud574 \ub300\uc751\ud558\ub294 \uac83\uc774\uc9c0, augmentation\uc5d0 \ub300\ud574 \uc18c\ud654\ud560 \uc218 \uc788\ub294 \ubc29\ubc95\ub4e4\uc774 \uc544\ub2c8\ub2e4."}),"\n",(0,a.jsx)(s.p,{children:"\uc800\uc790\ub294 \uc5ec\ub7ec \uac00\uc9c0 Augmentation\uc5d0 \ub300\ud574\uc11c\ub3c4 \uc798 working \ud558\ub294 Discriminator\ub97c \uad6c\ucd95\ud558\uace0\uc790 \ud588\ub2e4."}),"\n",(0,a.jsx)(s.h3,{id:"d\ub294-\uc9c0\uae08\uae4c\uc9c0-overfitting-\ud574\uc654\ub2e4",children:"D\ub294 \uc9c0\uae08\uae4c\uc9c0 Overfitting \ud574\uc654\ub2e4"}),"\n",(0,a.jsx)("img",{className:l.Z.figCenter,src:c.Z,alt:"d_overfitting"}),"\n",(0,a.jsx)(s.p,{children:"BigGAN\uc744 \uc801\uc740 \ub370\uc774\ud130\uc5d0 \ub300\ud574 \ud559\uc2b5\ud588\uc744 \ub54c, \ud559\uc2b5\uc744 \ud558\ub2e4\uac00 collapse\ud558\ub294 \uac78 \ubcf4\uc5ec\uc8fc\ub294 Figure\ub2e4. \uc67c\ucabd\uc5d0\uc11c \ubcf4\uba74 \ube68\uac04\uc0c9(CIFAR-10 10%\ub9cc \uac00\uc9c0\uace0 \ud559\uc2b5) \uadf8\ub798\ud504\uac00 \ud280\uc5b4\ubc84\ub9ac\ub294 \uac78 \ubcfc \uc218 \uc788\ub2e4. \uc774\uac8c \uc65c \uadf8\ub7f4\uae4c \ud558\uace0 Discriminator\ub97c \ubcf4\uba74, \uc544\ub2c8\ub098 \ub2e4\ub97c\uae4c Training Accuracy\uac00 \ube60\ub974\uac8c \ud559\uc2b5\uc774 \ub3fc\uc11c \uadf8\ub807\ub2e4."}),"\n",(0,a.jsx)(s.p,{children:"\uadf8\ub7f0\ub370 D\uc5d0 \ub300\ud574 \uac01 Iteration\uc5d0 \ub300\ud55c Validation Acc.\ub97c \uce21\uc815\ud574\ubcf4\uba74, mode collapse\uac00 \ub418\uc5c8\ub2e4\ub294 \uac78 \ubcfc \uc218 \uc788\ub2e4. \uc989, D\uac00 training set \uc744 memorize \ud574\uc654\uace0, \uc774\ub85c \uc778\ud574 generalize\uac00 \uc548\ub410\ub2e4\ub294 \uac78 \ubcf4\uc5ec\uc900\ub2e4."}),"\n",(0,a.jsx)(s.h2,{id:"training-method",children:"Training Method"}),"\n",(0,a.jsx)("img",{className:(0,t.Z)(l.Z.figCenter,l.Z.medium),src:p.Z,alt:"training_method"}),"\n",(0,a.jsx)(s.p,{children:"DiffAugment\uc758 \ud559\uc2b5 \ubc29\ubc95\uc744 \ubcf4\uc5ec\uc8fc\ub294 \uadf8\ub9bc."}),"\n",(0,a.jsx)(s.p,{children:"\uc6d0\ubcf8 \uc774\ubbf8\uc9c0(x), \uc0dd\uc131\ud55c \uc774\ubbf8\uc9c0(G(z)) \ubaa8\ub450\uc5d0 augmentation(T)\uc744 \uc801\uc6a9\ud55c\ub2e4."}),"\n",(0,a.jsx)(s.p,{children:"Augmentation Senario\uc5d0 \ub530\ub77c\uc11c \uc5ec\ub7ec \uac00\uc9c0 Case\ub85c \ub098\ub20c \uc218 \uc788\ub2e4."}),"\n",(0,a.jsx)(s.p,{children:"Augment Reals Only: Real \uc774\ubbf8\uc9c0\uc5d0 \ub300\ud574\ub9cc Augmentation\uc744 \uc9c4\ud589\ud568 (i\ub9cc \uc9c4\ud589.)\n\u2192 Augmentation \ud55c \uac78 \uadf8\ub300\ub85c \ubaa8\ubc29\ud558\uc5ec \uc0dd\uc131\ud55c\ub2e4."}),"\n",(0,a.jsx)(s.p,{children:"Augment D Only: Discriminator\uc5d0 \ub123\ub294 Input\ub4e4\uc5d0 \ub300\ud574 \uc9c4\ud589\ud568 (i, ii \ub9cc \uc9c4\ud589. iii\ub294 \uadf8\ub300\ub85c)\n\u2192 Unbalanced Optimization \uc5d0 \uc758\ud574 Diverge \ud574\ubc84\ub9b0\ub2e4."}),"\n",(0,a.jsx)(s.p,{children:"D perfectly classifies the augmented images (both T(x) and T(G(z)) but barely\nrecognizes G(z) (i.e., fake images without augmentation)\n\uc774 \ub54c\ubb38\uc5d0 G\uc758 gradient update\ub97c \ud560 \ub54c, Discriminator\uac00 \uc798 working \ud558\uc9c0 \ubabb\ud558\uba74\uc11c, G\uc5d0 \ub300\ud55c \ud559\uc2b5\uc5d0 \ubc29\ud574\uac00 \ub428."}),"\n",(0,a.jsx)(s.h2,{id:"result",children:"Result"}),"\n",(0,a.jsx)(s.h3,{id:"stylegan2\uc640-\ube44\uad50",children:"StyleGAN2\uc640 \ube44\uad50"}),"\n",(0,a.jsx)("img",{className:l.Z.figCenter,src:g.Z,alt:"vs_stylegan2"}),"\n",(0,a.jsxs)(s.p,{children:["\uae30\uc874 StyleGAN2\uacfc \ubcf8 \ub17c\ubb38\uc5d0\uc11c \uc81c\uc2dc\ud558\ub294 DiffAugment\ub97c \uc801\uc6a9\ud588\uc744 \ub54c\ub97c \ube44\uad50\ud558\ub294 Figure.",(0,a.jsx)(s.br,{}),"\n","StyleGAN2\ub294 \ub370\uc774\ud130\uac00 \uc791\uc544\uc9c8\uc218\ub85d, FID, IS \uac12\uc758 \ubcc0\ud654\uac00 dramatic\ud55c\ub370, DiffAugment\ub294 \uc0c1\ub300\uc801\uc73c\ub85c \uc801\uc740 \ub370\uc774\ud130\uc5d0 \ub300\ud574\uc11c\ub3c4 generalize\ub418\uc5b4 \uc788\ub2e4\ub294 \uac78 \ubcfc \uc218 \uc788\ub2e4. StyleGAN2\uac00 \uc791\uc740 \ub370\uc774\ud130\uc5d0 generalize\uac00 \uc548\ub41c\ub2e4\ub294 \uac74 \uc880 \uc54c\ub824\uc9c4 \uc0ac\uc2e4\uc774\uc5c8\uc73c\ub2c8, Discriminator Training Method\uc5d0 \uc9d1\uc911\ud55c ADA\ub098 Freeze D\uc640 \ube44\uad50\ud558\ub294 Figure\ub97c \uc790\uc5f0\uc2a4\ub7fd\uac8c \uae30\ub300\ud558\uac8c \ub41c\ub2e4."]}),"\n",(0,a.jsx)(s.h3,{id:"low-shot-generation",children:"Low-Shot Generation"}),"\n",(0,a.jsx)("img",{className:l.Z.figCenter,src:d.Z,alt:"result_compare"}),"\n",(0,a.jsx)(s.p,{children:"Low-shot generation without pre-training."}),"\n",(0,a.jsx)(s.p,{children:"\uac01\uac01 \uc624\ubc14\ub9c8 100\uc7a5, \uace0\uc591\uc774 160\uc7a5, \uac15\uc544\uc9c0 389\uc7a5\ub9cc\uc744 \uac00\uc9c0\uace0 \ud559\uc2b5\uc744 \ud558\uc5ec \uc0dd\uc131\ud574\ub0b8 \uc774\ubbf8\uc9c0\ub4e4\uc774\ub2e4. (w/o pre-training)"}),"\n",(0,a.jsx)(s.h2,{id:"result-1",children:"Result"}),"\n",(0,a.jsx)(s.h3,{id:"training-performance",children:"Training Performance"}),"\n",(0,a.jsx)("img",{className:l.Z.figCenter,src:m.Z,alt:"augmentation_type_result"}),"\n",(0,a.jsx)(s.p,{children:"Augmentation \uc870\ud569\uc5d0 \ub530\ub77c \ub2ec\ub77c\uc9c0\ub294 DiffAugment Training Performance (CIFAR-10 Data 100% \uc0ac\uc6a9)"}),"\n",(0,a.jsx)(s.p,{children:"BigGAN \ub300\ube44 Discriminator\uac00 Validation\uc5d0 \uc788\uc5b4\uc11c\ub3c4 generalize \ud558\uc5ec \ud559\uc2b5\ub418\uc5c8\ub2e4\uace0 \ubcfc \uc218 \uc788\ub2e4. DiffAugment \uc790\uccb4\ub294 Low Dataset\uc5d0 \ub300\ud574\uc11c\ub3c4 Generation\uc744 \uc548\uc815\uc801\uc73c\ub85c \ud560 \uc218 \uc788\ub2e4\ub294 Novelty\ub97c \uac00\uc9c0\uace0 \uc788\uc9c0\ub9cc, \ubcf8 Figure\ub294 BigGAN\ub3c4 \ud559\uc2b5\ud588\ub2e4\uace0 \ud558\ub294 \ub370\uc774\ud130\uac00 CIFAR-10 \uc804\uccb4\ub97c \uc0ac\uc6a9\ud55c \uac83\uc774\uc5c8\uc73c\ub2c8, \ud574\ub2f9 \uc870\uac74\uc73c\ub85c Comparison\uc744 \ud55c \uac83\uc73c\ub85c \ud574\uc11d\ud560 \uc218 \uc788\ub2e4."}),"\n",(0,a.jsx)(s.h3,{id:"interpolation\ub3c4-\uac00\ub2a5\ud558\ub2e4",children:"Interpolation\ub3c4 \uac00\ub2a5\ud558\ub2e4"}),"\n",(0,a.jsx)("img",{className:l.Z.figCenter,src:o.Z,alt:"interpolation"}),"\n",(0,a.jsx)(s.p,{children:"Style Space\uc5d0\uc11c Interpolation\uc774 \uac00\ub2a5\ud568\uc744 \ubcf4\uc5ec\uc8fc\ub294 Figure."}),"\n",(0,a.jsx)(s.p,{children:"\uc801\uc740 \ub370\uc774\ud130\uc600\uc9c0\ub9cc (\uc624\ubc14\ub9c8, \uace0\uc591\uc774, \uac15\uc544\uc9c0 \ucc38\uc870), Interpolation\uc774 \uac00\ub2a5\ud560 \uc815\ub3c4\ub85c generalize\ud558\uac8c \ud559\uc2b5\uc774 \ub418\uc5c8\ub2e4."}),"\n",(0,a.jsx)(s.h3,{id:"model-size\uc5d0-\ub300\ud55c-\ubd84\uc11d",children:"Model Size\uc5d0 \ub300\ud55c \ubd84\uc11d"}),"\n",(0,a.jsx)("img",{className:l.Z.figCenter,src:h.Z,alt:"model_size_fid"}),"\n",(0,a.jsx)(s.p,{children:"Model size\uac00 FID\uc5d0 \uc5bc\ub9c8\ub098 \uc601\ud5a5\uc744 \uc8fc\ub294\uac00\uc5d0 \ub300\ud55c Figure"}),"\n",(0,a.jsx)(s.p,{children:"CIFAR-10 \ub370\uc774\ud130 10%\uc5d0 \ub300\ud574\uc11c\ub9cc \ud559\uc2b5\uc744 \ud588\uc744 \ub54c, generalize\uac00 \ub420 \uc218 \uc788\ub294 \uac00\ub97c \ub2e4\ub8ec \ubd80\ubd84\uc774\ub2e4. BigGAN \ub300\ube44 channel size\ub97c \uc904\uc5ec\uac00\uba70 \ube44\uad50\ub97c \ud574\ubd10\ub3c4, \uc5b4\ub5a4 capacity\ub4e0 \uc0c1\uad00\uc5c6\uc774 \ub354 \uc88b\uc740 \uc131\ub2a5\uc744 \ubcf4\uc5ec\uc900\ub2e4. StyleGAN2\uc5d0\uc11c \uc0ac\uc6a9\ud558\ub294 R1 Regularization \uad00\ub828\ud574\uc11c\ub3c4, hyperparameter\uac00 \ub3d9\uc77c\ud55c \uc138\ud305\uc77c \ub54c \ub354 \ub098\uc740 FID\ub97c \ubcf4\uc5ec\uc92c\ub2e4."}),"\n",(0,a.jsx)(s.h3,{id:"regularization",children:"Regularization"}),"\n",(0,a.jsxs)(s.admonition,{type:"tip",children:[(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"R1 Regularization"}),(0,a.jsx)(s.br,{}),"\n","Gradient Penalty\ub85c regularize \ud558\ub294 \ubc29\uc2dd\uc73c\ub85c, Discriminator\uc758 Real Data\uc5d0 \ub300\ud574 Penalize\ub97c \uc900\ub2e4."]}),(0,a.jsx)(s.span,{className:"katex-display",children:(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsxs)(s.msub,{children:[(0,a.jsx)(s.mi,{children:"R"}),(0,a.jsx)(s.mn,{children:"1"})]}),(0,a.jsx)(s.mo,{stretchy:"false",children:"("}),(0,a.jsx)(s.mi,{children:"\u03c8"}),(0,a.jsx)(s.mo,{stretchy:"false",children:")"}),(0,a.jsx)(s.mo,{children:":"}),(0,a.jsx)(s.mo,{children:"="}),(0,a.jsxs)(s.mfrac,{children:[(0,a.jsx)(s.mi,{children:"\u03b3"}),(0,a.jsx)(s.mn,{children:"2"})]}),(0,a.jsxs)(s.msub,{children:[(0,a.jsx)(s.mi,{mathvariant:"normal",children:"E"}),(0,a.jsxs)(s.mrow,{children:[(0,a.jsxs)(s.msub,{children:[(0,a.jsx)(s.mi,{children:"p"}),(0,a.jsx)(s.mi,{mathvariant:"script",children:"D"})]}),(0,a.jsx)(s.mo,{stretchy:"false",children:"("}),(0,a.jsx)(s.mi,{children:"x"}),(0,a.jsx)(s.mo,{stretchy:"false",children:")"})]})]}),(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mo,{fence:"true",children:"["}),(0,a.jsxs)(s.msup,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mo,{fence:"true",children:"\u2225"}),(0,a.jsx)(s.mi,{mathvariant:"normal",children:"\u2207"}),(0,a.jsxs)(s.msub,{children:[(0,a.jsx)(s.mi,{children:"D"}),(0,a.jsx)(s.mi,{children:"\u03c8"})]}),(0,a.jsx)(s.mo,{stretchy:"false",children:"("}),(0,a.jsx)(s.mi,{children:"x"}),(0,a.jsx)(s.mo,{stretchy:"false",children:")"}),(0,a.jsx)(s.mo,{fence:"true",children:"\u2225"})]}),(0,a.jsx)(s.mn,{children:"2"})]}),(0,a.jsx)(s.mo,{fence:"true",children:"]"})]})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"R_{1}(\\psi):=\\frac{\\gamma}{2} \\mathrm{E}_{p_{\\mathcal{D}}(x)}\\left[\\left\\|\\nabla D_{\\psi}(x)\\right\\|^{2}\\right]"})]})})}),(0,a.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsxs)(s.span,{className:"mord",children:[(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.00773em"},children:"R"}),(0,a.jsx)(s.span,{className:"msupsub",children:(0,a.jsxs)(s.span,{className:"vlist-t vlist-t2",children:[(0,a.jsxs)(s.span,{className:"vlist-r",children:[(0,a.jsx)(s.span,{className:"vlist",style:{height:"0.3011em"},children:(0,a.jsxs)(s.span,{style:{top:"-2.55em",marginLeft:"-0.0077em",marginRight:"0.05em"},children:[(0,a.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(s.span,{className:"mord mtight",children:(0,a.jsx)(s.span,{className:"mord mtight",children:"1"})})})]})}),(0,a.jsx)(s.span,{className:"vlist-s",children:"\u200b"})]}),(0,a.jsx)(s.span,{className:"vlist-r",children:(0,a.jsx)(s.span,{className:"vlist",style:{height:"0.15em"},children:(0,a.jsx)(s.span,{})})})]})})]}),(0,a.jsx)(s.span,{className:"mopen",children:"("}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"\u03c8"}),(0,a.jsx)(s.span,{className:"mclose",children:")"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,a.jsx)(s.span,{className:"mrel",children:":="}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"1.836em",verticalAlign:"-0.686em"}}),(0,a.jsxs)(s.span,{className:"mord",children:[(0,a.jsx)(s.span,{className:"mopen nulldelimiter"}),(0,a.jsx)(s.span,{className:"mfrac",children:(0,a.jsxs)(s.span,{className:"vlist-t vlist-t2",children:[(0,a.jsxs)(s.span,{className:"vlist-r",children:[(0,a.jsxs)(s.span,{className:"vlist",style:{height:"1.1076em"},children:[(0,a.jsxs)(s.span,{style:{top:"-2.314em"},children:[(0,a.jsx)(s.span,{className:"pstrut",style:{height:"3em"}}),(0,a.jsx)(s.span,{className:"mord",children:(0,a.jsx)(s.span,{className:"mord",children:"2"})})]}),(0,a.jsxs)(s.span,{style:{top:"-3.23em"},children:[(0,a.jsx)(s.span,{className:"pstrut",style:{height:"3em"}}),(0,a.jsx)(s.span,{className:"frac-line",style:{borderBottomWidth:"0.04em"}})]}),(0,a.jsxs)(s.span,{style:{top:"-3.677em"},children:[(0,a.jsx)(s.span,{className:"pstrut",style:{height:"3em"}}),(0,a.jsx)(s.span,{className:"mord",children:(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.05556em"},children:"\u03b3"})})]})]}),(0,a.jsx)(s.span,{className:"vlist-s",children:"\u200b"})]}),(0,a.jsx)(s.span,{className:"vlist-r",children:(0,a.jsx)(s.span,{className:"vlist",style:{height:"0.686em"},children:(0,a.jsx)(s.span,{})})})]})}),(0,a.jsx)(s.span,{className:"mclose nulldelimiter"})]}),(0,a.jsxs)(s.span,{className:"mord",children:[(0,a.jsx)(s.span,{className:"mord mathrm",children:"E"}),(0,a.jsx)(s.span,{className:"msupsub",children:(0,a.jsxs)(s.span,{className:"vlist-t vlist-t2",children:[(0,a.jsxs)(s.span,{className:"vlist-r",children:[(0,a.jsx)(s.span,{className:"vlist",style:{height:"0.3448em"},children:(0,a.jsxs)(s.span,{style:{top:"-2.5198em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,a.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsxs)(s.span,{className:"mord mtight",children:[(0,a.jsxs)(s.span,{className:"mord mtight",children:[(0,a.jsx)(s.span,{className:"mord mathnormal mtight",children:"p"}),(0,a.jsx)(s.span,{className:"msupsub",children:(0,a.jsxs)(s.span,{className:"vlist-t vlist-t2",children:[(0,a.jsxs)(s.span,{className:"vlist-r",children:[(0,a.jsx)(s.span,{className:"vlist",style:{height:"0.3448em"},children:(0,a.jsxs)(s.span,{style:{top:"-2.3567em",marginLeft:"0em",marginRight:"0.0714em"},children:[(0,a.jsx)(s.span,{className:"pstrut",style:{height:"2.5em"}}),(0,a.jsx)(s.span,{className:"sizing reset-size3 size1 mtight",children:(0,a.jsx)(s.span,{className:"mord mtight",children:(0,a.jsx)(s.span,{className:"mord mathcal mtight",style:{marginRight:"0.02778em"},children:"D"})})})]})}),(0,a.jsx)(s.span,{className:"vlist-s",children:"\u200b"})]}),(0,a.jsx)(s.span,{className:"vlist-r",children:(0,a.jsx)(s.span,{className:"vlist",style:{height:"0.1433em"},children:(0,a.jsx)(s.span,{})})})]})})]}),(0,a.jsx)(s.span,{className:"mopen mtight",children:"("}),(0,a.jsx)(s.span,{className:"mord mathnormal mtight",children:"x"}),(0,a.jsx)(s.span,{className:"mclose mtight",children:")"})]})})]})}),(0,a.jsx)(s.span,{className:"vlist-s",children:"\u200b"})]}),(0,a.jsx)(s.span,{className:"vlist-r",children:(0,a.jsx)(s.span,{className:"vlist",style:{height:"0.3552em"},children:(0,a.jsx)(s.span,{})})})]})})]}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsxs)(s.span,{className:"minner",children:[(0,a.jsx)(s.span,{className:"mopen delimcenter",style:{top:"0em"},children:(0,a.jsx)(s.span,{className:"delimsizing size2",children:"["})}),(0,a.jsxs)(s.span,{className:"minner",children:[(0,a.jsxs)(s.span,{className:"minner",children:[(0,a.jsx)(s.span,{className:"mopen delimcenter",style:{top:"0em"},children:"\u2225"}),(0,a.jsx)(s.span,{className:"mord",children:"\u2207"}),(0,a.jsxs)(s.span,{className:"mord",children:[(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"D"}),(0,a.jsx)(s.span,{className:"msupsub",children:(0,a.jsxs)(s.span,{className:"vlist-t vlist-t2",children:[(0,a.jsxs)(s.span,{className:"vlist-r",children:[(0,a.jsx)(s.span,{className:"vlist",style:{height:"0.3361em"},children:(0,a.jsxs)(s.span,{style:{top:"-2.55em",marginLeft:"-0.0278em",marginRight:"0.05em"},children:[(0,a.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(s.span,{className:"mord mtight",children:(0,a.jsx)(s.span,{className:"mord mathnormal mtight",style:{marginRight:"0.03588em"},children:"\u03c8"})})})]})}),(0,a.jsx)(s.span,{className:"vlist-s",children:"\u200b"})]}),(0,a.jsx)(s.span,{className:"vlist-r",children:(0,a.jsx)(s.span,{className:"vlist",style:{height:"0.2861em"},children:(0,a.jsx)(s.span,{})})})]})})]}),(0,a.jsx)(s.span,{className:"mopen",children:"("}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"x"}),(0,a.jsx)(s.span,{className:"mclose",children:")"}),(0,a.jsx)(s.span,{className:"mclose delimcenter",style:{top:"0em"},children:"\u2225"})]}),(0,a.jsx)(s.span,{className:"msupsub",children:(0,a.jsx)(s.span,{className:"vlist-t",children:(0,a.jsx)(s.span,{className:"vlist-r",children:(0,a.jsx)(s.span,{className:"vlist",style:{height:"0.954em"},children:(0,a.jsxs)(s.span,{style:{top:"-3.2029em",marginRight:"0.05em"},children:[(0,a.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(s.span,{className:"mord mtight",children:(0,a.jsx)(s.span,{className:"mord mtight",children:"2"})})})]})})})})})]}),(0,a.jsx)(s.span,{className:"mclose delimcenter",style:{top:"0em"},children:(0,a.jsx)(s.span,{className:"delimsizing size2",children:"]"})})]})]})]})]})}),(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"when the generator distribution produces the true data distribution and the discriminator is equal to 0 on the data manifold, the gradient penalty ensures that the discriminator cannot create a non-zero gradient orthogonal to the data manifold without suffering a loss in the GAN game."}),"\n"]})]}),"\n",(0,a.jsx)(s.h3,{id:"ablation-for-augmentation",children:"Ablation for Augmentation"}),"\n",(0,a.jsx)("img",{className:l.Z.figCenter,src:r.Z,alt:"ablation_augmentation"}),"\n",(0,a.jsx)(s.p,{children:"\uc5ec\ub7ec \uac00\uc9c0 Augmentation\uc5d0 \ub300\ud574 FID\ub97c \ud655\uc778\ud574\ubcf8 \uacb0\uacfc\ub2e4.\nAblation\uc744 \uc9c4\ud589\ud55c \ub05d\uc5d0, color distortion, translation, cutout\ub9cc \uc900 \uac83\uc73c\ub85c \ud655\uc778\ud588\ub2e4. (\uba3c\uc800 \uc0dd\uac01\ud558\uace0 \uc900 \uac74 \uc544\ub2cc \uac83\uc73c\ub85c \ud655\uc778\ud588\ub2e4.)\nStyleGAN2\uc758 FID\uc774\uace0, CIFAR-10 10% \ub370\uc774\ud130\ub9cc\uc744 \uac00\uc9c0\uace0 Training \ud588\uc744 \ub54c\uc758 \uacb0\uacfc\ub2e4."})]})}function v(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(y,{...e})}):y(e)}},6010:(e,s,n)=>{function a(e){var s,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(s=0;s<e.length;s++)e[s]&&(n=a(e[s]))&&(i&&(i+=" "),i+=n);else for(s in e)e[s]&&(i&&(i+=" "),i+=s);return i}function i(){for(var e,s,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(s=a(e))&&(i&&(i+=" "),i+=s);return i}n.d(s,{Z:()=>i})},8952:(e,s,n)=>{n.d(s,{Z:()=>a});const a={small:"small_f2c9",medium:"medium_sJ4m",figCenter:"figCenter__7gH"}},4716:(e,s,n)=>{n.d(s,{Z:()=>a});const a=n.p+"assets/images/ablation_augmentation-6fad8d2422af1ae0b528dfa994cf5049.png"},1488:(e,s,n)=>{n.p},8076:(e,s,n)=>{n.d(s,{Z:()=>a});const a=n.p+"assets/images/augmentation_type_result-e03bdd14ef6248c21157d69ba3f953af.png"},3440:(e,s,n)=>{n.d(s,{Z:()=>a});const a=n.p+"assets/images/d_overfitting-0fde96f1fa39bd9365ce7230b620fffb.png"},3723:(e,s,n)=>{n.d(s,{Z:()=>a});const a=n.p+"assets/images/interpolation-a37d53f43c37be1bde34d1839ecf1837.png"},2026:(e,s,n)=>{n.d(s,{Z:()=>a});const a=n.p+"assets/images/model_size_fid-b395637cdd2677201a79958933acd29f.png"},1451:(e,s,n)=>{n.p},8087:(e,s,n)=>{n.d(s,{Z:()=>a});const a=n.p+"assets/images/result_compare-acc36d84cc9ea455714866e23cef7a61.png"},7558:(e,s,n)=>{n.d(s,{Z:()=>a});const a=n.p+"assets/images/training_method-182e7e89d5035fa3118b77161271b12b.png"},63:(e,s,n)=>{n.d(s,{Z:()=>a});const a=n.p+"assets/images/vs_stylegan2-f1b3f845a404ca098b35e023e87f8a99.png"},1151:(e,s,n)=>{n.d(s,{Z:()=>r,a:()=>l});var a=n(7294);const i={},t=a.createContext(i);function l(e){const s=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),a.createElement(t.Provider,{value:s},e.children)}}}]);