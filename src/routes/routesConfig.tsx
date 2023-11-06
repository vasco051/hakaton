import { Authorization, Registration } from 'pages/Auth';
import Room from 'pages/Room';
import MainPage from "pages/MainPage";
import { CreateRoom, Rooms } from 'pages/Rooms';

import { staticLinks } from './routingLinks';

export const publicRoutes = [
  {
    path: staticLinks.notFound,
    element: <MainPage/>
  },
  {
    path: staticLinks.main,
    element: <MainPage/>
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
  },
  {
    path: staticLinks.roomCreate,
    element: <CreateRoom/>
  }
];