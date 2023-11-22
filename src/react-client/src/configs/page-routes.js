import React, { lazy } from 'react';

const Home = lazy(() => import('../pages/home/index'));
const Test = lazy(() => import('../pages/test/index'));
const NotFound = lazy(() => import('../pages/not-found/index'));

const pageRoutes = [
  {
    index: true,
    element: <Home />,
    isPrivate: false
  },
  {
    path: '/test',
    element: <Test />,
    isPrivate: false
  },
  {
    path: '/notfound',
    element: <NotFound />,
    isPrivate: false
  },
  {
    path: '*',
    element: <NotFound />,
    isPrivate: false
  }
];

export default pageRoutes;
