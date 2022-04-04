
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/docs/',
    component: ComponentCreator('/docs/','378'),
    routes: [
      {
        path: '/docs/',
        component: ComponentCreator('/docs/','ccc'),
        exact: true,
        'sidebar': "homeSidebar"
      },
      {
        path: '/docs/api/bindings/python',
        component: ComponentCreator('/docs/api/bindings/python','11e'),
        exact: true,
        'sidebar': "apiSidebar"
      },
      {
        path: '/docs/api/models',
        component: ComponentCreator('/docs/api/models','725'),
        exact: true,
        'sidebar': "apiSidebar"
      },
      {
        path: '/docs/api/primitives/create',
        component: ComponentCreator('/docs/api/primitives/create','a0a'),
        exact: true,
        'sidebar': "apiSidebar"
      },
      {
        path: '/docs/api/primitives/evaluate/analyse',
        component: ComponentCreator('/docs/api/primitives/evaluate/analyse','b79'),
        exact: true,
        'sidebar': "apiSidebar"
      },
      {
        path: '/docs/api/primitives/evaluate/select',
        component: ComponentCreator('/docs/api/primitives/evaluate/select','492'),
        exact: true,
        'sidebar': "apiSidebar"
      },
      {
        path: '/docs/api/primitives/process',
        component: ComponentCreator('/docs/api/primitives/process','2b2'),
        exact: true,
        'sidebar': "apiSidebar"
      },
      {
        path: '/docs/api/primitives/represent/compare',
        component: ComponentCreator('/docs/api/primitives/represent/compare','d68'),
        exact: true,
        'sidebar': "apiSidebar"
      },
      {
        path: '/docs/api/primitives/represent/embed',
        component: ComponentCreator('/docs/api/primitives/represent/embed','712'),
        exact: true,
        'sidebar': "apiSidebar"
      },
      {
        path: '/docs/api/skills',
        component: ComponentCreator('/docs/api/skills','14d'),
        exact: true,
        'sidebar': "apiSidebar"
      },
      {
        path: '/docs/api/specifications/authentication',
        component: ComponentCreator('/docs/api/specifications/authentication','bce'),
        exact: true,
        'sidebar': "apiSidebar"
      },
      {
        path: '/docs/api/specifications/errors_warnings',
        component: ComponentCreator('/docs/api/specifications/errors_warnings','f03'),
        exact: true,
        'sidebar': "apiSidebar"
      },
      {
        path: '/docs/api/specifications/requests',
        component: ComponentCreator('/docs/api/specifications/requests','0e6'),
        exact: true,
        'sidebar': "apiSidebar"
      },
      {
        path: '/docs/api/specifications/responses',
        component: ComponentCreator('/docs/api/specifications/responses','6d9'),
        exact: true,
        'sidebar': "apiSidebar"
      },
      {
        path: '/docs/api/using',
        component: ComponentCreator('/docs/api/using','b0a'),
        exact: true,
        'sidebar': "apiSidebar"
      },
      {
        path: '/docs/guides/english/prompt',
        component: ComponentCreator('/docs/guides/english/prompt','dc6'),
        exact: true,
        'sidebar': "guidesSidebar"
      },
      {
        path: '/docs/guides/english/review_classification',
        component: ComponentCreator('/docs/guides/english/review_classification','22a'),
        exact: true,
        'sidebar': "guidesSidebar"
      },
      {
        path: '/docs/guides/english/select',
        component: ComponentCreator('/docs/guides/english/select','6b4'),
        exact: true,
        'sidebar': "guidesSidebar"
      },
      {
        path: '/docs/guides/english/seo',
        component: ComponentCreator('/docs/guides/english/seo','8fb'),
        exact: true,
        'sidebar': "guidesSidebar"
      },
      {
        path: '/docs/guides/guides',
        component: ComponentCreator('/docs/guides/guides','de6'),
        exact: true,
        'sidebar': "guidesSidebar"
      },
      {
        path: '/docs/guides/skills/multitask',
        component: ComponentCreator('/docs/guides/skills/multitask','d11'),
        exact: true,
        'sidebar': "guidesSidebar"
      },
      {
        path: '/docs/guides/skills/sentiment_analysis',
        component: ComponentCreator('/docs/guides/skills/sentiment_analysis','f74'),
        exact: true,
        'sidebar': "guidesSidebar"
      },
      {
        path: '/docs/guides/skills/summarization',
        component: ComponentCreator('/docs/guides/skills/summarization','49c'),
        exact: true,
        'sidebar': "guidesSidebar"
      },
      {
        path: '/docs/home/changelog',
        component: ComponentCreator('/docs/home/changelog','c6d'),
        exact: true,
        'sidebar': "homeSidebar"
      },
      {
        path: '/docs/home/concepts',
        component: ComponentCreator('/docs/home/concepts','80a'),
        exact: true,
        'sidebar': "homeSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
