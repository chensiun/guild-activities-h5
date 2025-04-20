import { createElement, lazy } from 'react';
import { createHashRouter } from 'react-router-dom';

const router = createHashRouter([
  {
    path: '/',
    element: createElement(lazy(() => import('@/pages/home'))),
  },
  {
    path: '/popular-guilds',
    element: createElement(lazy(() => import('@/pages/popular-guilds'))),
  },
]);

export default router;
