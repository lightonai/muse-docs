module.exports = {
    homeSidebar: [
        'home/intro',
        'home/concepts',
        'home/changelog',
        {
            '🤹 Skills': [
                'home/skills/summarization',
                'home/skills/sentiment-analysis',
                'home/skills/multitask',
            ],
        },
        {
            '🇬🇧 English Guides': [
                'home/english/prompt',
                'home/english/seo',
                'home/english/review-classification',
                'home/english/select',
            ],
        },
        {
            '🇫🇷 French Guides': [
                'home/french/prompt',
                'home/french/review-classification',
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
                'api/specifications/errors-warnings',
            ],
        },
        {
            '🧠 Endpoints': [
                'api/endpoints/create',
                'api/endpoints/select',
                'api/endpoints/compare',
                'api/endpoints/tokenize',
                'api/endpoints/analyse',
                'api/endpoints/embed',
                'api/endpoints/process',
            ],
        },
        {
            '📟 Integrations': [
                'api/integrations/python',
                'api/integrations/javascript',
                'api/integrations/google-sheets',
            ],
        },
        'api/models',
        'api/skills',
    ],
};
