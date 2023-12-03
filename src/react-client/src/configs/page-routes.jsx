import React, { lazy } from 'react';
import Home from '../pages/home/index';
import NotFound from '../pages/not-found/index';
import Login from '../pages/auth/login/index';
import Signup from '../pages/auth/signup/index';
import Client from '../pages/Client/index';
import ProjectManagement from '../pages/project/management/index';
import VacationManagement from '../pages/vacation/management/index';

const pageRoutes = [
  {
    index: true,
    element: <Home />,
    isPrivate: true
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
    isPrivate: true
  },
  {
    path: '/vacation/management',
    element: <VacationManagement />,
    isPrivate: true
  },
  {
    path: '/client',
    element: <Client />,
    isPrivate: true
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
