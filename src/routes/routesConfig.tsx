import {Authorization, Registration} from 'pages/Auth';
import {Rooms} from "pages/Rooms";
import {MainPage} from "pages/MainPage";

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
	{
		path: staticLinks.rooms,
		element: <Rooms/>
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

	// {
	//   path: staticLinks.room,
	//   element: <Room/>
	// },
	// {
	//   path: staticLinks.roomCreate,
	//   element: <CreateRoom/>
	// }
];