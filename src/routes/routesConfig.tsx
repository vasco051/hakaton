import {Authorization, Registration} from 'pages/Auth';
import {Rooms} from "pages/Rooms";
import {MainPage} from "pages/MainPage";
import {CreateRoom} from "pages/CreateRoom";
import {Room} from "pages/Room";

import {staticLinks} from './routingLinks';

export const publicRoutes = [
  {
    path: staticLinks.notFound,
    element: <MainPage/>
  },
  {
    path: staticLinks.main,
    element: <MainPage/>
  },
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
    path: staticLinks.roomCreate,
    element: <CreateRoom/>
  },
  {
    path: staticLinks.room,
    element: <Room/>
  },
];