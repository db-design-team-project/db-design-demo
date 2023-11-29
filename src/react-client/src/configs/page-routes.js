import React, { lazy } from 'react';
import Login from '../pages/auth/login';
import Signup from '../pages/auth/signup';
import { Client } from '../pages/Client';
import ProjectManagement from '../pages/project/management/index';
import VacationManagement from '../pages/vacation/management/index';

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
    path: '/auth/login',
    element: <Login />,
    isPrivate: false
  },
  {
    path: '/auth/signup',
    element: <Signup />,
    isPrivate: false
  },
  {
    path: '/project/management',
    element: <ProjectManagement />,
    isPrivate: false
  },
  {
    path: '/vacation/management',
    element: <VacationManagement />,
    isPrivate: false
  },
  {
    path: '/client',
    element: <Client />,
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
