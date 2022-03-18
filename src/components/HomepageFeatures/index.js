import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Powered by React',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

// export default function HomepageFeatures() {
//   return (
//     <section className={styles.features}>
//       <div className="container">
//         <div className="row">
//           {FeatureList.map((props, idx) => (
//             <Feature key={idx} {...props} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className='container'>
        <div className={styles.pageContents}>

          <br />

          <h1 class="anchor anchorWithStickyNavbar_mojV" id="deepkyu-blog">
            블로그를 시작합니다.
            <a class="hash-link" href="#블로그를-시작합니다"
              title="Direct link to heading"></a>
          </h1>
          <br />

          <p>
            딥러닝과 관련해서 제가 읽는 재밌는 논문들을 많이 소개하고 싶습니다.
          </p>

          <p>
            더불어서 제가 재밌게 하고 있는 연구들도 소개해드리고 싶고요.
          </p>

          <p>
            마지막으로 저라는 사람에 대해 소개해드리고자 합니다.
          </p>

          <p>
            재밌는 공간이 되도록 잘 꾸며보겠습니다 😁
          </p>


        </div>
      </div>
    </section>
  );
}


