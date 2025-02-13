module.exports = {
  title: '<mapml-viewer> documentation',
  tagline: 'Embed map viewers into your web pages, using HTML only.',
  url: 'http://maps4html.org/web-map-doc/',
  baseUrl: '/web-map-doc/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'https://maps4html.org/favicon.ico',
  organizationName: 'Maps4HTML', // Usually your GitHub org/user name.
  projectName: 'web-map-doc', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: '<mapml-viewer>',
      logo: {
        alt: 'Maps4HTML Logo',
        src: 'https://maps4html.org/favicon.ico',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://www.w3.org/community/maps4html/',
          label: 'Blog',
          position: 'right'
        },
        {
          href: 'https://github.com/Maps4HTML/Web-Map-Custom-Element',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Installation',
              to: 'docs/installation/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Wiki',
              href: 'https://www.w3.org/community/maps4html/wiki/',
            },
            {
              label: 'Gitter',
              href: 'https://gitter.im/Maps4HTML',
            },
            {
              label: 'Discourse',
              href: 'https://discourse.wicg.io/c/web-mapping',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/maps4html',
            },
            {
              label: 'YouTube',
              href: 'https://www.youtube.com/channel/UCKIv6IGwzxPF2HNhvq-VhKA',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/Maps4HTML/Web-Map-Custom-Element',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Maps4HTML. Built with Docusaurus.`,
    },
    prism: {
      theme: require('prism-react-renderer/themes/duotoneLight'),
      darkTheme: require('prism-react-renderer/themes/vsDark'),
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};