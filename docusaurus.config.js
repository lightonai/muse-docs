const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// KaTeX, for LaTeX support in markdown:
const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: 'LightOn Muse API Documentation',
    tagline: 'Unlock the power of extreme-scale NLP with our Muses.',
    url: 'https://muse-docs.lighton.ai/',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/muse-logo.svg',
    organizationName: 'LightOn', // Usually your GitHub org/user name.
    projectName: 'muse-docs', // Usually your repo name.
    themeConfig: {
        colorMode: {
            defaultMode: 'dark',
            disableSwitch: false,
            respectPrefersColorScheme: false,
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
                    label: '🦾 Getting started',
                },
                {
                    type: 'doc',
                    docId: 'api/using',
                    position: 'left',
                    label: '📟 API Reference',
                },
                {
                    type: 'doc',
                    docId: 'guides/guides',
                    position: 'left',
                    label: '📚 Guides',
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
                    admonitions: {
                        icons: 'none',
                    },
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
