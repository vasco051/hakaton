import { Authorization, Registration } from 'pages/Auth';
import Room from 'pages/Room';
import Rooms from 'pages/Rooms';

import { staticLinks } from './routingLinks';


export const publicRoutes = [
  {
    path: staticLinks.notFound,
    element: <Authorization/>
  }
];

export const unauthorizedRoutes = [
  {
    path: staticLinks.authorization,
    element: <Authorization/>
  },
  {
    path: staticLinks.registration,
    element: <Registration/>
  }
];

export const authorizedRoutes = [
  {
    path: staticLinks.rooms,
    element: <Rooms/>
  },
  {
    path: staticLinks.room,
    element: <Room/>
  }
];