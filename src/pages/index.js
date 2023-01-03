import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';


function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div id="header-container" className="container">
        <h1 className={clsx('hero__title', styles.heroTitle)}>{siteConfig.title}</h1>
        <p className={clsx('hero__subtitle', styles.heroTitle)}>AI Researcher
          <br /><br />
          <a href="https://github.com/deepkyu">
            <img src="https://camo.githubusercontent.com/f6d50128cb007f85916b7a899da5d94f654dce35a37331c8d28573aef46f4274/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6769746875622d2532333132313031312e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d676974687562266c6f676f436f6c6f723d7768697465" alt="GitHub" data-canonical-src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&amp;logo=github&amp;logoColor=white"></img>
          </a>&nbsp;
          <a href="https://www.youtube.com/channel/UCZF23gx3j-8KvahXcSdzZaA" rel="nofollow">
            <img src="https://camo.githubusercontent.com/165da3cf9ab80bd8395e6de8c28077d68982319c6ecf871f6f54443c68886840/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f596f75547562652d2532334646303030302e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d596f7554756265266c6f676f436f6c6f723d7768697465" alt="YouTube" data-canonical-src="https://img.shields.io/badge/YouTube-%23FF0000.svg?style=for-the-badge&amp;logo=YouTube&amp;logoColor=white"></img>
          </a>&nbsp;
          <a href="mailto:song@deepkyu.me">
            <img src="https://camo.githubusercontent.com/571384769c09e0c66b45e39b5be70f68f552db3e2b2311bc2064f0d4a9f5983b/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f476d61696c2d4431343833363f7374796c653d666f722d7468652d6261646765266c6f676f3d676d61696c266c6f676f436f6c6f723d7768697465" alt="Gmail" data-canonical-src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&amp;logo=gmail&amp;logoColor=white"></img>
          </a>&nbsp;
          <a href="https://www.linkedin.com/in/deepkyu/" rel="nofollow">
            <img src="https://camo.githubusercontent.com/7e1a1a039c75a7c4d2a91d7f97bf0a1c2adcf7cb49b7dbbfc02963a4f9fdaca4/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6c696e6b6564696e2d2532333030373742352e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6c696e6b6564696e266c6f676f436f6c6f723d7768697465" alt="LinkedIn" data-canonical-src="https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&amp;logo=linkedin&amp;logoColor=white"></img>
          </a>&nbsp;
          <a href="https://www.instagram.com/deep.kyu/" rel="nofollow">
            <img src="https://camo.githubusercontent.com/7a705494c370a8412797521701153d2873fb39109edf80afc408efd0927ae2d0/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f496e7374616772616d2d2532334534343035462e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d496e7374616772616d266c6f676f436f6c6f723d7768697465" alt="Instagram" data-canonical-src="https://img.shields.io/badge/Instagram-%23E4405F.svg?style=for-the-badge&amp;logo=Instagram&amp;logoColor=white"></img>
          </a>&nbsp;
          <a href="https://twitter.com/deepkyu_song" rel="nofollow">
            <img src="https://camo.githubusercontent.com/42312e937813abe3eee7d5e9bb08df31605b20af03dd433c4a0dd6233f9fad16/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f547769747465722d2532333144413146322e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d54776974746572266c6f676f436f6c6f723d7768697465" alt="Twitter" data-canonical-src="https://img.shields.io/badge/Twitter-%231DA1F2.svg?style=for-the-badge&amp;logo=Twitter&amp;logoColor=white"></img>
          </a>&nbsp;
          <a href="https://namecard.kakao.com/deepkyu" rel="nofollow">
            <img src="https://camo.githubusercontent.com/616b5ebfb2b5e0ce0fe6b79f7623e7ba52eca53e53fa5a00bc08dbb5d643ebc3/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6b616b616f74616c6b2d6666636430302e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6b616b616f74616c6b266c6f676f436f6c6f723d303030303030" alt="KakaoTalk" data-canonical-src="https://img.shields.io/badge/kakaotalk-ffcd00.svg?style=for-the-badge&amp;logo=kakaotalk&amp;logoColor=000000"></img>
          </a>
        </p>
        {/* <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/cv">
            Download CV 📄
          </Link>
        </div> */}
      </div>
    </header >
  );
}

export default function Home() {

  const { siteConfig } = useDocusaurusContext();



  return (

    <div id="main-page" className={styles.mainPage}>
      <Layout
        title={`Blog`}
        description={`${siteConfig.tagline}`}>
        <HomepageHeader />
        <main>
          {/* <HomepageFeatures /> */}
        </main>
      </Layout>
    </div>
  );
}
