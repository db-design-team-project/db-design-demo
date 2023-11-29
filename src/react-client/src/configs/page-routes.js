import React, { lazy } from 'react';
import Login from '../pages/auth/login';
import Signup from '../pages/auth/signup';
import { Vacation } from '../pages/휴가내역';
import { Client } from '../pages/Client';
import ProjectManipulate from '../pages/프로젝트/프로젝트 관리';
import VacationManipulate from '../pages/휴가/휴가관리';

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
    path: '/project/manipulate',
    element: <ProjectManipulate />,
    isPrivate: false
  },
  {
    path: '/vacation/manipulate',
    element: <VacationManipulate />,
    isPrivate: false
  },
  {
    path: '/client',
    element: <Client />,
    isPrivate: false
  },
  {
    path: '/vacation',
    element: <Vacation />,
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
