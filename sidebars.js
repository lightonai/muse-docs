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
    homeSidebar: ['home/intro', 'home/concepts', 'home/changelog'],
    apiSidebar: [
        'api/using',
        {
            '๐ง Specifications': [
                'api/specifications/authentication',
                'api/specifications/requests',
                'api/specifications/responses',
                'api/specifications/errors_warnings',
            ],
        },
        { '๐ Bindings': ['api/bindings/python', 'api/bindings/javascript'] },
        'api/models',
        {
            '๐ง  Primitives': [
                'api/primitives/create',
                {
                    '๐ฌ Evaluate': [
                        'api/primitives/evaluate/analyse',
                        'api/primitives/evaluate/select',
                    ],
                },
                {
                    '๐ Represent': [
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
            '๐ฌ๐ง English': [
                'guides/english/prompt',
                'guides/english/seo',
                'guides/english/review_classification',
                'guides/english/select',
            ],
            '๐ซ๐ท French': [
                'guides/french/prompt',
                'guides/french/review_classification',
            ],
            '๐คน Skills': [
                'guides/skills/summarization',
                'guides/skills/sentiment_analysis',
                'guides/skills/multitask',
            ],
        },
    ],
};
