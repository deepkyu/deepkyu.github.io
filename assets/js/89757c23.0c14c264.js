"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6340],{6642:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>g,contentTitle:()=>d,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var t=n(5893),r=n(1151),a=n(8952),s=n(3583),l=n(9245);const o={slug:"freezed",title:"FreezeD: a Simple Baseline for Fine-tuning GANs",description:"GAN Finetuning \uc2dc\uc5d0 Discriminator\ub97c Freezing \ud558\uba74 \uc5b4\ub5bb\uac8c \ub420\uae4c\uc694?",image:"img/default.png",authors:["hkyu"],tags:["paper-review","gan"]},d=void 0,c={permalink:"/papers/freezed",source:"@site/papers/2020-09-24-paper-review-freezed/index.mdx",title:"FreezeD: a Simple Baseline for Fine-tuning GANs",description:"GAN Finetuning \uc2dc\uc5d0 Discriminator\ub97c Freezing \ud558\uba74 \uc5b4\ub5bb\uac8c \ub420\uae4c\uc694?",date:"2020-09-24T00:00:00.000Z",formattedDate:"September 24, 2020",tags:[{label:"paper-review",permalink:"/papers/tags/paper-review"},{label:"gan",permalink:"/papers/tags/gan"}],readingTime:7.675,hasTruncateMarker:!0,authors:[{name:"Hyoung-Kyu Song",title:"AI Researcher (Vision)",url:"https://github.com/deepkyu",imageURL:"https://github.com/deepkyu.png",key:"hkyu"}],frontMatter:{slug:"freezed",title:"FreezeD: a Simple Baseline for Fine-tuning GANs",description:"GAN Finetuning \uc2dc\uc5d0 Discriminator\ub97c Freezing \ud558\uba74 \uc5b4\ub5bb\uac8c \ub420\uae4c\uc694?",image:"img/default.png",authors:["hkyu"],tags:["paper-review","gan"]},unlisted:!1,prevItem:{title:"Differentiable Augmentation for Data-Efficient GAN Training",permalink:"/papers/diffaugment"}},g={authorsImageUrls:[void 0]},u=[{value:"Contribution",id:"contribution",level:2},{value:"Background",id:"background",level:2},{value:"Previous Methods for GAN transfer learning",id:"previous-methods-for-gan-transfer-learning",level:3},{value:"Fine-tuning",id:"fine-tuning",level:4},{value:"Scale/Shift",id:"scaleshift",level:4},{value:"Generative latent optimization (GLO)",id:"generative-latent-optimization-glo",level:4},{value:"MineGAN",id:"minegan",level:4},{value:"Suggested Methods",id:"suggested-methods",level:3},{value:"FreezeD",id:"freezed",level:4},{value:"L2-SP",id:"l2-sp",level:4},{value:"Feature Distillation",id:"feature-distillation",level:4},{value:"Result",id:"result",level:2},{value:"\ud2b9\uc774\uc810",id:"\ud2b9\uc774\uc810",level:2}];function p(e){const i={a:"a",blockquote:"blockquote",br:"br",h2:"h2",h3:"h3",h4:"h4",img:"img",p:"p",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.p,{children:(0,t.jsx)(i.a,{href:"https://github.com/sangwoomo/FreezeD",children:(0,t.jsx)(i.img,{src:"https://img.shields.io/static/v1?message=Official%20Repo&logo=Github&labelColor=grey&color=blue&logoColor=white&label=%20&style=flat-square",alt:"githubio"})})}),"\n",(0,t.jsxs)(i.blockquote,{children:["\n",(0,t.jsxs)(i.p,{children:['Mo, Sangwoo, et al. "Freeze the discriminator: a simple baseline for fine-tuning gans."',(0,t.jsx)(i.br,{}),"\n","CVPR AI for Content Creation Workshop (2020)."]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"contribution",children:"Contribution"}),"\n",(0,t.jsx)(i.p,{children:"GAN\uc744\xa0fine-tuning\ud558\ub294\xa0\ub370\uc5d0\xa0\uc788\uc5b4, discriminator\uc758\xa0lower layer\ub4e4(classifier\xa0\ub9d0\uace0\xa0visul repr. (=visual feature) extractor)\uc5d0 \ub300\ud574\xa0freeze\ud558\uace0\xa0G/D\uc5d0\xa0\ub300\ud574\xa0fine-tuning\uc744\xa0\uc9c4\ud589\ud558\uba74, limited data\ub85c\xa0\ud6a8\uacfc\uc801\uc778\xa0transfer learning\uc744\xa0\ud560\xa0\uc218\xa0\uc788\ub2e4."}),"\n",(0,t.jsx)(i.p,{children:"\uc989, image classification \ub4f1 recognition(\ub610\ub294 understanding)\uc5d0\uc11c \uc0ac\uc6a9\ud558\ub294 fine-tuning \ubc29\uc2dd (visual representation\uc740 freeze, classifier\ub9cc use_gradient)\uc774 GAN \ubaa8\ub378\uc5d0\uc11c\ub3c4 \uc720\uc6a9\ud558\uac8c \uc0ac\uc6a9\ub420 \uc218 \uc788\ub2e4."}),"\n",(0,t.jsx)("img",{className:a.Z.figCenter,src:s.Z,alt:"result_graph"}),"\n","\n",(0,t.jsx)(i.h2,{id:"background",children:"Background"}),"\n",(0,t.jsx)(i.p,{children:"\ucd5c\uadfc\xa0SotA GAN\ub4e4\uc740\xa0\ub9ce\uc740\xa0\uc591\uc758\xa0training data\ub97c\xa0\uc694\uad6c\ud560\xa0\ubfd0\ub9cc\xa0\uc544\ub2c8\ub77c,\xa0\ub9e4\uc6b0\xa0\ud070 computational resource\ub97c\xa0\uc694\uad6c\ud558\ub294\xa0\uacbd\uc6b0\uac00\xa0\ub9ce\uc544,\xa0\uc2e4\uc9c8\uc801\uc778\xa0senario\uc5d0\xa0\ub300\uc785\ud558\ub294\xa0\ub370\uc5d0\xa0\uc5b4\ub824\uc6c0\uc774\xa0\ub9ce\ub2e4."}),"\n",(0,t.jsx)(i.p,{children:"\uadf8\ub798\uc11c\xa0\uc774\ub97c\xa0\ud574\uacb0\ud558\uace0\uc790\xa0\ub9ce\uc740\xa0\uc811\uadfc\ubc95\ub4e4\uc774\xa0recogntion task\uc5d0\uc11c\uc758\xa0\uc131\uacf5\uc801\uc778\xa0\uc0ac\ub840\ub4e4\uc744\xa0\ubc14\ud0d5\uc73c\ub85c\xa0GAN\uc5d0\uc11c\uc758\xa0transfer learning\uc744\xa0\uc2dc\ub3c4\ud558\uace0\xa0\uc788\uace0,\xa0\uc774\ub97c\xa0\ud1b5\ud574\xa0\ud55c\uc815\ub41c\xa0\ub370\uc774\ud130\ub97c\xa0\uac00\uc9c0\uace0 image generation\xa0\ud558\ub294\xa0\ubc29\ubc95\ub4e4\uc744\xa0\uc5f0\uad6c\ud558\uace0\xa0\uc788\ub2e4."}),"\n",(0,t.jsx)(i.p,{children:"\ud558\uc9c0\ub9cc\xa0\ud604\uc7ac\uae4c\uc9c0\xa0Transfer Learning\uc744\xa0\uc9c4\ud589\ud55c\xa0\ub9ce\uc740\xa0\uc0ac\ub840\ub4e4\uc774\xa0\ud55c\uc815\ub41c\xa0training data\ub85c\xa0\uc9c4\ud589\ud588\uc744\xa0\ub54c, overfitting\uc774\xa0\ub418\ub294\xa0\uacbd\uc6b0\uac00\ub9ce\uc558\uace0,\xa0\ud2b9\ud788\xa0dataset\uc758\xa0distribution\uc774\xa0pre-training\uc744\xa0\ud560\xa0\ub54c\xa0\uc0ac\uc6a9\ud55c\xa0large dataset\uacfc\xa0\ub9ce\uc774\xa0\ub2e4\ub97c\xa0\uacbd\uc6b0, robust\ud558\uc9c0\xa0\ubabb\ud558\ub294\xa0\uc77c\uc774\xa0\ub9ce\uc558\ub2e4 (not robust in learning a significant distribution shift)."}),"\n",(0,t.jsx)(i.h3,{id:"previous-methods-for-gan-transfer-learning",children:"Previous Methods for GAN transfer learning"}),"\n",(0,t.jsx)(i.p,{children:"\uc6b0\uc120 \uae30\uc874\uc758 GAN Finetuning\uc73c\ub85c \uc2dc\ub3c4\ub41c \ubc29\uc2dd\uc740 \uc544\ub798\uc640 \uac19\uc774 \ub098\uc5f4\ud560 \uc218 \uc788\ub2e4."}),"\n",(0,t.jsx)(i.h4,{id:"fine-tuning",children:"Fine-tuning"}),"\n",(0,t.jsx)(i.p,{children:"Target Model(=limited data\uc5d0 \ub300\ud55c model)\uc758 generator\uc640 discriminator \uac01\uac01\uc5d0 \ub300\ud574 Source Model(=trained with large dataset)\uc758 pre-trained weight\ub97c load\ud558\uc5ec, \ud574\ub2f9 checkpoint\ubd80\ud130 training\uc744 \uc9c4\ud589\ud55c\ub2e4."}),"\n",(0,t.jsx)(i.p,{children:"\ud558\uc9c0\ub9cc, \uc774\ub7ec\ud55c fine-tuning \ubc29\uc2dd\uc740 overfit\ub418\ub294 \ubb38\uc81c\uc810\uc744 \ud56d\uc0c1 \uac00\uc9c0\uace0 \uc788\uace0, \uc774\ub97c \uc704\ud574 \uc801\uc808\ud55c regularization\uc774 \ub9e4\ubc88 \ud544\uc694\ud558\ub2e4."}),"\n",(0,t.jsx)(i.h4,{id:"scaleshift",children:"Scale/Shift"}),"\n",(0,t.jsx)(i.p,{children:"\uc704\uc640 \uac19\uc740 naive fine-tuning\uc774 overfit\uc5d0 \ube60\uc9c0\uae30 \uc27d\ub2e4\ub294 \ub2e8\uc810\uc774 \uc788\uae30\uc5d0, scale + shift\ub294 \ub2e4\ub978 weight\ub294 \uadf8\ub300\ub85c \ub194\ub450\uace0 batchnorm \ub4f1 normalization layer\ub9cc update\ud558\ub294 \ubc29\uc2dd\uc73c\ub85c \uc774\ub97c \uc9c4\ud589\ud558\uace0\uc790 \uc2dc\ub3c4\ud588\ub2e4. \ud558\uc9c0\ub9cc, \uc774\ub294 restriction\uc774 \uba85\ud655\ud574\uc11c \uadf8\ub9ac \uc88b\uc740 \uacb0\uacfc\ub97c \ubcf4\uc5ec\uc8fc\uc9c0 \uc54a\uc558\uace0, \ud2b9\ud788 source dataset(=large dataset)\uacfc target dataset(=limited dataset) \uac04 distribution shift\uac00 \uadf9\uba85\ud560 \uacbd\uc6b0, \uacb0\uacfc\uac00 \ub354\uc6b1 \uc548 \uc88b\uac8c \ub098\uc654\ub2e4."}),"\n",(0,t.jsx)(i.h4,{id:"generative-latent-optimization-glo",children:"Generative latent optimization (GLO)"}),"\n",(0,t.jsx)(i.p,{children:"GAN loss\ub294 discriminator\ub85c\ubd80\ud130 \uc8fc\uc5b4\uc9c0\ub294 loss\uc774\ub2e4\ubcf4\ub2c8, limited data\uc5d0 reliable \ud558\uc9c0 \uc54a\ub2e4. GLO\ub294 \uc774\ub85c\ubd80\ud130 source data\ub85c \ud559\uc2b5\ud55c generator\ub9cc \ub5bc\uc5b4\ub2e4\uac00 L1 + perceptual loss\uc758 \uc870\ud569\uc73c\ub85c supervised learning \ud558\ub294 \ubc29\uc2dd\uc744 \ub9d0\ud55c\ub2e4. \uc774 \ub54c, GLO\ub294 overfitting\uc744 \ubc29\uc9c0\ud558\uae30 \uc704\ud574 generator\uc640 latent codes\ub97c \ub3d9\uc2dc\uc5d0 optimize\ud558\ub294 \ubc29\uc2dd\uc73c\ub85c \ud6c8\ub828\ud55c\ub2e4. \uc989, latent vector\uc640 sample data\uac00 \ud56d\uc0c1 1:1\ub85c \ub418\ub3c4\ub85d \ud559\uc2b5\ud55c\ub2e4.  \uc774\ub97c \ud1b5\ud574 generator\uac00 sample\ub4e4\uc5d0 \ub300\ud574 generalize \ub418\ub3c4\ub85d \ud558\ub294 \ubc29\ubc95\uc774\ub2e4."}),"\n",(0,t.jsx)(i.p,{children:"GLO\uac00 \uc774\ub7f0 \ubc29\ud5a5\uc73c\ub85c \ud559\uc2b5\uc744 \ud558\ub2e4 \ubcf4\ub2c8 stability\ub294 \ubcf4\uc7a5\uc774 \ub418\uc9c0\ub9cc, \uc544\ubb34\ub798\ub3c4 adversarial loss\uac00 \uc5c6\ub2e4\ubcf4\ub2c8 image generation \uacb0\uacfc\uac00 \uacb0\uad6d\uc5d0\ub294 blurry \ud574\uc9c4\ub2e4\ub294 \ub2e8\uc810\uc774 \uc788\ub2e4. \uadf8\ub807\ub2e4\uace0 Adversarial \ud558\uac8c \ubcc4\ub3c4\ub85c discrimator\ub97c \ubd99\uc77c\uc218\ub3c4 \uc788\uaca0\uc9c0\ub9cc, \uc774\ub7ec\ud55c \ubc29\ud5a5\uc73c\ub85c \uc9c4\ud589\ub420 \ub54c \uae30\ubcf8\uc801\uc73c\ub85c source data\uc5d0 \ub300\ud55c discriminator\uc758 prior knowledge\uac00 \uc544\uc608 \uc99d\ubc1c\ud574\ubc84\ub9ac\ubbc0\ub85c, \uc774 \uc5ed\uc2dc \uadf8\ub807\uac8c \ud6a8\uc728\uc801\uc774\ub77c\uace0\ub294 \ubcfc \uc218 \uc5c6\ub2e4."}),"\n",(0,t.jsx)(i.h4,{id:"minegan",children:"MineGAN"}),"\n",(0,t.jsx)(i.p,{children:"MineGAN\uc740 generator\uc758 overfitting\uc744 \ud53c\ud558\uae30 \uc704\ud574, generator\ub97c \uc218\uc815\ud558\uc5ec latent code\ub97c \uc218\uc815\ud558\ub294 \ubc29\ubc95\uc744 \uc81c\uc2dc\ud55c\ub2e4. MineGAN\uc740 latent code \uac04 transfer\ub97c \ub2f4\ub2f9\ud558\ub294 miner(\ucc44\uad74) network\ub97c \ud559\uc2b5\uc2dc\ud0a4\ub294\ub370, \uc774\ub7ec\ud55c \ubc29\uc2dd\uc740 source\uc640 target distribution\uc774 \uacf5\uc720\ud558\uace0 \uc788\ub294 \ubc14\uac00 \uc788\uc744 \ub54c \ud6a8\uacfc\uc801\uc774\uaca0\uc9c0\ub9cc, \ub450 dataset\uac00 disjoint \ud55c \uc0c1\ud669\uc5d0\uc11c\ub294 generalize \ub420 \uc218 \uc5c6\ub2e4\ub294 \ub2e8\uc810\uc744 \uac00\uc9c0\uace0 \uc788\ub2e4."}),"\n",(0,t.jsx)(i.h3,{id:"suggested-methods",children:"Suggested Methods"}),"\n",(0,t.jsx)(i.h4,{id:"freezed",children:"FreezeD"}),"\n",(0,t.jsx)(i.p,{children:"Discriminator\uc758 lower layer(=visual representation)\ub9cc freeze, upper layer\ub294 fine-tune. \uc800\uc790\uac00 \uc131\ub2a5\ud55c \uac83 \uc911\uc5d0 \uac00\uc7a5 \uc88b\uc740 \uc131\ub2a5\uc744 \ubcf4\uc600\uc74c."}),"\n",(0,t.jsx)(i.h4,{id:"l2-sp",children:"L2-SP"}),"\n",(0,t.jsx)(i.p,{children:"Fine-tuning\ud558\ub294 \ubc29\uc2dd\uc778\ub370, source model\uc758 parameter\uc640 target model\uc758 parameter\ub97c L2-norm regularize \ud558\ub294 \ubc29\uc2dd\uc73c\ub85c \uc9c4\ud589\ud558\uc5ec target model\uc774 source model\uc758 knowledge\ub85c\ubd80\ud130 \ub108\ubb34 \uba40\uc5b4\uc9c0\uc9c0 \uc54a\uac8c \ud55c\ub2e4."}),"\n",(0,t.jsx)(i.p,{children:"\ud558\uc9c0\ub9cc, \uc774\ub294 \uadf8\ub807\uac8c \uc88b\uc740 \uc131\ub2a5\uc744 \ubcf4\uc774\uc9c0 \ubabb\ud588\ub2e4. L2-norm \ud55c\ub2e4\uace0 \ud558\uba74 \uc774 \ubc29\uc2dd\uc774 \uacb0\uad6d freezing layer\ub85c \uc120\ud0dd\ud55c layer\uc5d0\ub294 infinite weight\ub97c \uc8fc\uace0, \ub2e4\ub978 layer\uc5d0\ub294 weight\ub97c 0\uc73c\ub85c \uc8fc\ub294 \ubc29\uc2dd\uc73c\ub85c \uad73\uc5b4\uc9c0\ub294\ub370, \uc774\uac83\ubcf4\ub2e4\ub294 \uac01 Layer \uc5d0 \uc801\uc808\ud55c weight \ub97c \uc8fc\ub294 \uac83\uc774 \ub2f9\uc5f0 \uc88b\uc740 \uacb0\uacfc\ub97c \ub0bc \uac83\uc774\ub2e4."}),"\n",(0,t.jsx)(i.h4,{id:"feature-distillation",children:"Feature Distillation"}),"\n",(0,t.jsx)(i.p,{children:"Classifier\uc758 transfer learning\uc744 \ud560 \ub54c, \uc694\uc998 \uc81c\uc77c \ub9ce\uc774 \uc0ac\uc6a9\ud558\ub294 \ubc29\uc2dd\uc774\ub2e4."}),"\n",(0,t.jsx)(i.p,{children:"\uc800\uc790\ub294 source model\uacfc target model\uc744 distill \ud558\ub294 \ubc29\uc2dd\uc73c\ub85c \uc9c4\ud589\ud588\ub2e4. Computation\uc73c\ub85c \ubcf4\uba74 FreezeD\ubcf4\ub2e4 2\ubc30 \uac00\ub7c9 \uc5f0\uc0b0\ub7c9\uc774 \ub9ce\uc740\ub370, FreezeD\ub791 \ube44\uad50\ud588\uc744 \ub54c \uc6b0\uc704\ub97c \uc810\ud558\ub294 \uacbd\uc6b0\ub3c4 \uc788\uc5c8\ub2e4. \uc774 \ub17c\ubb38\uc740 FreezeD\uac00 \ucd5c\uc885\uc801\uc73c\ub85c \uc81c\uc548\ud558\ub294 method\uc774\uae30\ub294 \ud558\uc9c0\ub9cc, Feature Distillation\uc774 \ubbf8\ub798\uc5d0 \ub354 \uc88b\uc740 \uc131\ub2a5\uc744 \ubcf4\uc774\ub294 \ubc29\ud5a5\uc77c \uac83\uc774\ub77c\uace0 \uc774\uc57c\uae30 \ud55c\ub2e4."}),"\n",(0,t.jsx)("img",{className:a.Z.figCenter,src:l.Z,alt:"table"}),"\n",(0,t.jsx)(i.h2,{id:"result",children:"Result"}),"\n",(0,t.jsx)(i.p,{children:"\uc800\uc790\ub294 Unconditional GAN\uacfc Conditional GAN\uc5d0 \ubaa8\ub450 generic \ud558\uac8c \uc801\uc6a9\ub420 \uc218 \uc788\ub294 \ubc29\ubc95\uc778\uc9c0\ub97c \ud30c\uc545\ud558\uae30 \uc704\ud574, \ub450 \uac00\uc9c0 adversarial model\uc744 \ub4e4\uace0 \uc654\ub2e4. Unconditional GAN\uc73c\ub85c\ub294 stylegan, conditional GAN\uc73c\ub85c\ub294 SNGAN-projection \uc744 \uc0ac\uc6a9\ud588\ub2e4. \uadf8\ub9ac\uace0 \uce21\uc815 metric \uc73c\ub85c\ub294 FID(Frechet Inception Distance)\ub9cc\uc744 \uc0ac\uc6a9\ud588\ub2e4."}),"\n",(0,t.jsx)(i.p,{children:"\uac01 Dataset class \ubcc4\ub85c FID\ub97c \uac01\uac01 \uacc4\uc0b0\ud588\uace0, Fine-tuning \ud55c \uac83\uacfc FreezeD \ub450 case\uc5d0 \ub300\ud55c \uacb0\uacfc\ub9cc\uc744 \ube44\uad50\ud588\ub2e4."}),"\n",(0,t.jsx)(i.p,{children:"FreezeD \uac00 FID\uc5d0 \uc788\uc5b4\uc11c \ud56d\uc0c1 \uc55e\uc11c\ub294 \uacb0\uacfc\ub97c \ubcf4\uc5ec\uc92c\ub2e4."}),"\n",(0,t.jsx)(i.h2,{id:"\ud2b9\uc774\uc810",children:"\ud2b9\uc774\uc810"}),"\n",(0,t.jsx)(i.p,{children:"StyleGAN\uc744 \uc2e4\ud5d8\ud560 \ub54c, tensorflow\ub85c \ub418\uc5b4 \uc788\ub294 \uc800\uc790 repo\uac00 \uc544\ub2c8\ub77c, unofficial pytorch repo\ub97c \uc0ac\uc6a9\ud588\ub2e4."}),"\n",(0,t.jsx)(i.p,{children:"pytorch repo\ub3c4 \ub9ce\uc740 \uc720\uc800\ub4e4\uc774 \uc548\uc815\uc131 \uac80\uc99d\uc744 \ud558\uae30\ub294 \ud588\uc5c8\ub294\ub370, \uc774\uac78 \uc0ac\uc6a9\ud558\uc5ec \ub17c\ubb38\uc774 accept\uc774 \ub418\uc5c8\uc73c\ub2c8, \ub098\ub3c4 \uc368\ub3c4 \ub418\uaca0\ub2e4\ub294 \uc0dd\uac01\uc774 \ub4e0\ub2e4. (\uc774\ub807\uac8c guarantee \ubc1b\ub294 \ubc29\ubc95\uc774...!)"})]})}function h(e={}){const{wrapper:i}={...(0,r.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},8952:(e,i,n)=>{n.d(i,{Z:()=>t});const t={small:"small_f2c9",medium:"medium_sJ4m",figCenter:"figCenter__7gH"}},3583:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/result_graph-131a4e1493d0c89f7b52e6d88ab11441.png"},9245:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/table-8729e8237c9747aac68039866747ac52.png"},1151:(e,i,n)=>{n.d(i,{Z:()=>l,a:()=>s});var t=n(7294);const r={},a=t.createContext(r);function s(e){const i=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(a.Provider,{value:i},e.children)}}}]);