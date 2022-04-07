
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/',
    component: ComponentCreator('/','331'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/','0e1'),
        exact: true,
        'sidebar': "homeSidebar"
      },
      {
        path: '/api/bindings/python',
        component: ComponentCreator('/api/bindings/python','aa6'),
        exact: true,
        'sidebar': "apiSidebar"
      },
      {
        path: '/api/models',
        component: ComponentCreator('/api/models','869'),
        exact: true,
        'sidebar': "apiSidebar"
      },
      {
        path: '/api/primitives/create',
        component: ComponentCreator('/api/primitives/create','a6a'),
        exact: true,
        'sidebar': "apiSidebar"
      },
      {
        path: '/api/primitives/evaluate/analyse',
        component: ComponentCreator('/api/primitives/evaluate/analyse','a5f'),
        exact: true,
        'sidebar': "apiSidebar"
      },
      {
        path: '/api/primitives/evaluate/select',
        component: ComponentCreator('/api/primitives/evaluate/select','c3b'),
        exact: true,
        'sidebar': "apiSidebar"
      },
      {
        path: '/api/primitives/process',
        component: ComponentCreator('/api/primitives/process','43f'),
        exact: true,
        'sidebar': "apiSidebar"
      },
      {
        path: '/api/primitives/represent/compare',
        component: ComponentCreator('/api/primitives/represent/compare','fcf'),
        exact: true,
        'sidebar': "apiSidebar"
      },
      {
        path: '/api/primitives/represent/embed',
        component: ComponentCreator('/api/primitives/represent/embed','af8'),
        exact: true,
        'sidebar': "apiSidebar"
      },
      {
        path: '/api/skills',
        component: ComponentCreator('/api/skills','e4a'),
        exact: true,
        'sidebar': "apiSidebar"
      },
      {
        path: '/api/specifications/authentication',
        component: ComponentCreator('/api/specifications/authentication','fca'),
        exact: true,
        'sidebar': "apiSidebar"
      },
      {
        path: '/api/specifications/errors_warnings',
        component: ComponentCreator('/api/specifications/errors_warnings','0ca'),
        exact: true,
        'sidebar': "apiSidebar"
      },
      {
        path: '/api/specifications/requests',
        component: ComponentCreator('/api/specifications/requests','1e1'),
        exact: true,
        'sidebar': "apiSidebar"
      },
      {
        path: '/api/specifications/responses',
        component: ComponentCreator('/api/specifications/responses','0da'),
        exact: true,
        'sidebar': "apiSidebar"
      },
      {
        path: '/api/using',
        component: ComponentCreator('/api/using','7da'),
        exact: true,
        'sidebar': "apiSidebar"
      },
      {
        path: '/guides/english/prompt',
        component: ComponentCreator('/guides/english/prompt','446'),
        exact: true,
        'sidebar': "guidesSidebar"
      },
      {
        path: '/guides/english/review_classification',
        component: ComponentCreator('/guides/english/review_classification','ad3'),
        exact: true,
        'sidebar': "guidesSidebar"
      },
      {
        path: '/guides/english/select',
        component: ComponentCreator('/guides/english/select','9c8'),
        exact: true,
        'sidebar': "guidesSidebar"
      },
      {
        path: '/guides/english/seo',
        component: ComponentCreator('/guides/english/seo','bb1'),
        exact: true,
        'sidebar': "guidesSidebar"
      },
      {
        path: '/guides/french/prompt',
        component: ComponentCreator('/guides/french/prompt','8dc'),
        exact: true,
        'sidebar': "guidesSidebar"
      },
      {
        path: '/guides/french/review_classification',
        component: ComponentCreator('/guides/french/review_classification','ee4'),
        exact: true,
        'sidebar': "guidesSidebar"
      },
      {
        path: '/guides/guides',
        component: ComponentCreator('/guides/guides','6ea'),
        exact: true,
        'sidebar': "guidesSidebar"
      },
      {
        path: '/guides/skills/multitask',
        component: ComponentCreator('/guides/skills/multitask','ea8'),
        exact: true,
        'sidebar': "guidesSidebar"
      },
      {
        path: '/guides/skills/sentiment_analysis',
        component: ComponentCreator('/guides/skills/sentiment_analysis','025'),
        exact: true,
        'sidebar': "guidesSidebar"
      },
      {
        path: '/guides/skills/summarization',
        component: ComponentCreator('/guides/skills/summarization','31d'),
        exact: true,
        'sidebar': "guidesSidebar"
      },
      {
        path: '/home/changelog',
        component: ComponentCreator('/home/changelog','532'),
        exact: true,
        'sidebar': "homeSidebar"
      },
      {
        path: '/home/concepts',
        component: ComponentCreator('/home/concepts','976'),
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
