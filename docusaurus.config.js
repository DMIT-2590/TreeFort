// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'TreeFort',
  tagline: 'TreeFort Knowledge Base',
  url: 'https://treefort.netlify.app/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Home',
        logo: {
          alt: 'TreeFort Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Knowledge Base',
          },
          {
            to: '/blog',
            label: 'Resources',
            position: 'left',
          },
          {
            to: '/blog',
            label: 'Developer API',
            position: 'left',
          },
          {
            to: '/blog',
            label: 'FAQs',
            position: 'left',
          },
          {
            to: '/blog',
            label: 'Support Request',
            position: 'left',
          },
        ],
      },
      algolia: {
        apiKey: '9110916aefd88fba0ab1b95c10f4d2f8',
        indexName: 'TreeFort',
        appId: 'J276OQO1RA',
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'ABOUT TREEFORT',
            items: [
              {
                label: 'TreeFort',
                to: 'https://treefort.tech/'
              },
            ],
          },
          {
            title: 'QUICK LINKS',
            items: [
              {
                label: 'Home',
                to: '/docs/intro',
              },
              {
                label: 'Our Service',
                to: '/docs/intro',
              },
              {
                label: 'Contact Us',
                to: '/docs/intro',
              }
            ],
          },
          {
            title: 'INFORMATION',
            items: [
              {
                label: 'Terms & Conditions',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Privacy Policy',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Users Documentation',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'SUPPORT',
            items: [
              {
                label: 'Forum: Ask a question',
                to: '/blog',
              },
              {
                label: 'Email: info@treefort.ca',
                href: 'https://github.com/facebook/docusaurus',
              },
              {
                label: 'Chat: Offline',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} TreeFort Technologies Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
