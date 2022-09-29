module.exports = {
    // By default, Docusaurus generates a sidebar from the docs folder structure
    homeSidebar: [
        'home',
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
                "introduction/tokens",
                "introduction/skills",
            ],
          },
        {
            type: 'category',
            label: '🔨 Build your first use case',
            link: {
              type: 'doc',
              id: 'usecases/usecases'
            },
            collapsed: true,
            items: {
                '🥚 No-code': [{
                    '🇬🇧 English': [
                        'usecases/english/prompt',
                        'usecases/english/parameters',
                        'usecases/english/spreadsheet'
                        ]
                    },
                    {
                    '🇫🇷 French': [
                        'usecases/french/prompt',
                        'usecases/french/parameters',
                        'usecases/french/spreadsheet'
                        ]
                    },
                ],
                '🐥 Low-code': [{
                    '🇬🇧 English': [
                        'usecases/english/seo',
                        'usecases/english/customer_support',
                        'usecases/english/review_classification',
                        'usecases/skills/sentiment_analysis',
                        ]
                    },
                    {
                    '🇫🇷 French': [
                        'usecases/french/review_classification',
                        'usecases/skills/summarization',
                        ]
                    },
                ],
            },
          },
        {
            type: 'category',
            label: '📟 Developer documentation',
            link: {
              type: 'doc',
              id: 'api/using'
            },
            collapsed: true,
            items: [
                {
                    '🧐 Specifications': [
                        'api/specifications/authentication',
                        'api/specifications/requests',
                        'api/specifications/responses',
                        'api/specifications/errors_warnings',
                    ],
                },
                {
                    '🧠 Endpoints': [
                        'api/endpoints/create',
                        'api/endpoints/analyse',
                        'api/endpoints/select',
                        'api/endpoints/embed',
                        'api/endpoints/compare',
                        'api/endpoints/tokenize',
                        'api/endpoints/process',
                    ],
                },
                { '📟 Integrations': ['api/bindings/python', 'api/bindings/javascript'] },
                'api/models',
                'api/skills',
            ],
          },
          'changelog'  
        ],
};
