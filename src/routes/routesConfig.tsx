import { Authorization, Registration } from 'pages/Auth';
import Room from 'pages/Room';
import Rooms from 'pages/Rooms';
import CreateRoom from '../pages/Rooms/CreateRoom';

import { staticLinks } from './routingLinks';
import MainPage from "../pages/MainPage";


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