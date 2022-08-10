const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// KaTeX, for LaTeX support in markdown:
const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: 'LightOn Muse Documentation',
    tagline: 'Unlock the power of extreme-scale NLP with our Muses.',
    url: 'https://muse-docs.lighton.ai/',
    baseUrl: '/',
    favicon: 'favicon.ico',
    organizationName: 'lightonai',
    projectName: 'muse-docs',
    onBrokenMarkdownLinks: 'throw',
    themeConfig: {
        colorMode: {
            defaultMode: 'dark',
            disableSwitch: false,
            respectPrefersColorScheme: true,
        },
        navbar: {
            style: 'dark',
            title: '',
            logo: {
                alt: 'LightOn Logo',
                src: 'img/muse-logo.svg',
            },
            items: [
                {
                    type: 'doc',
                    docId: 'home/intro',
                    position: 'left',
                    label: '🦾 Home',
                },
                {
                    type: 'doc',
                    docId: 'api/using',
                    position: 'left',
                    label: '📟 API Reference',
                },
            ],
        },
        prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
        },
        announcementBar: {
            id: 'public_beta',
            content:
                'Muse is now in public beta at <a href="https://muse.lighton.ai">muse.lighton.ai</a>',
            backgroundColor: '#31273F',
            textColor: '#D2D6DB',
            isCloseable: false,
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    routeBasePath: '/',
                    remarkPlugins: [math],
                    rehypePlugins: [katex],
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
    stylesheets: [
        {
            href: 'https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css',
            integrity:
                'sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc',
            crossorigin: 'anonymous',
        },
    ],
};
