// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {themes} = require('prism-react-renderer');
const lightTheme = themes.github;
const darkTheme = themes.dracula;

const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Deepkyu',
  tagline: 'Blog (Korean)',
  url: 'https://deepkyu.me/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'deepkyu', // Usually your GitHub org/user name.
  projectName: 'deepkyu.github.io', // Usually your repo name.
  trailingSlash: false,

  scripts: [
    'js/scroll.js',
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'story',
        routeBasePath: 'story',
        /**
         * 사이트 디렉터리 기준으로 상대 경로를 지정합니다.
         */
        path: './story',
        remarkPlugins: [math],
        rehypePlugins: [katex],
        blogSidebarCount: 'ALL',
        blogSidebarTitle: '이야기',
        showReadingTime: false,
        // Please change this to your repo.
        postsPerPage: 1,
      },
    ],
    // [
    //   '@docusaurus/plugin-content-blog',
    //   {
    //     id: 'papers',
    //     routeBasePath: 'papers',
    //     /**
    //      * 사이트 디렉터리 기준으로 상대 경로를 지정합니다.
    //      */
    //     path: './papers',
    //     remarkPlugins: [math],
    //     rehypePlugins: [katex],
    //     blogSidebarCount: 'ALL',
    //     blogSidebarTitle: 'All Posts',
    //     showReadingTime: true,
    //     // Please change this to your repo.
    //     postsPerPage: 10,
    //   },
    // ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          remarkPlugins: [math],
          rehypePlugins: [katex],
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'All Posts',
          showReadingTime: true,
          // Please change this to your repo.
          postsPerPage: 1,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        googleAnalytics: {
          trackingID: 'UA-223362952-2',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        // title: 'Placeholder',
        title: '',
        logo: {
          alt: 'Deepkyu',
          src: 'img/logo.svg',
        },
        items: [
          // {
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'left',
          //   label: 'Tutorial',
          // },
          {
            to: '/blog',
            label: 'Blog',
            position: 'left'
          },
          // {
          //   to: '/papers',
          //   label: 'Paper Reviews',
          //   position: 'left'
          // },
          // {
          //   to: '/story',
          //   label: 'Story',
          //   position: 'left'
          // },
          {
            href: '/cv',
            label: 'CV',
            position: 'right',
          },
          {
            href: 'https://github.com/deepkyu',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://www.linkedin.com/in/deepkyu',
            label: 'LinkedIn',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Contents',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              // {
              //   label: 'Reviews',
              //   to: '/papers',
              // }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Story',
                to: '/story',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/deepkyu',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/deepkyu',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Deepkyu. Built with Docusaurus.`,
      },
    }),
};

const siteConfig = {
  themeConfig: {
    prism: {
      additionalLanguages: ['bash', 'diff', 'json'],
    }
  }
}

module.exports = config;
