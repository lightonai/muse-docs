/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
    // By default, Docusaurus generates a sidebar from the docs folder structure
    homeSidebar: [
        {
            type: 'category',
            label: '👋 Introduction',
            link: {
              type: 'doc',
              id: 'introduction/intro'
            },
            collapsed: true,
            items: [
                "introduction/concepts",
                "introduction/models",
                "introduction/prompts",
                "introduction/outputs",
                "introduction/skills",
            ],
          },
        {
            type: 'category',
            label: '🔨 Build your first use case',
            link: {
              type: 'doc',
              id: 'introduction/intro'
            },
            collapsed: true,
            items: [
                /*no code,
                low code*/
            ],
          },
        {
            type: 'category',
            label: '📟 Developer documentation',
            link: {
              type: 'doc',
              id: 'introduction/intro'
            },
            collapsed: true,
            items: [
                /*specs,
                endpoints,
                integrations*/
            ],
          },  
        ],
    apiSidebar: [
        'api/using',
        {
            '🧐 Specifications': [
                'api/specifications/authentication',
                'api/specifications/requests',
                'api/specifications/responses',
                'api/specifications/errors_warnings',
            ],
        },
        { '📟 Bindings': ['api/bindings/python', 'api/bindings/javascript'] },
        'api/models',
        {
            '🧠 Primitives': [
                'api/primitives/create',
                {
                    '🔬 Evaluate': [
                        'api/primitives/evaluate/analyse',
                        'api/primitives/evaluate/select',
                    ],
                },
                {
                    '📊 Represent': [
                        'api/primitives/represent/embed',
                        'api/primitives/represent/compare',
                    ],
                },
                'api/primitives/tokenize',
                'api/primitives/process',
            ],
        },
        'api/skills',
    ],
    guidesSidebar: [
        'guides/guides',
        {
            '🇬🇧 English': [
                'guides/english/prompt',
                'guides/english/seo',
                'guides/english/review_classification',
                'guides/english/select',
            ],
            '🇫🇷 French': [
                'guides/french/prompt',
                'guides/french/review_classification',
            ],
            '🤹 Skills': [
                'guides/skills/summarization',
                'guides/skills/sentiment_analysis',
                'guides/skills/multitask',
            ],
        },
    ],
};
