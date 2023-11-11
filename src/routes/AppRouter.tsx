import {FC} from 'react';
import {Route, Routes} from 'react-router-dom';

import {useAppSelector} from 'hooks/redux';

import {authorizedRoutes, publicRoutes, unauthorizedRoutes} from './routesConfig';

const AppRouter: FC = () => {
	const {account} = useAppSelector(state => state.accountReducer);

	const routes = [...publicRoutes];

	account
		? routes.push(...authorizedRoutes)
		: routes.push(...unauthorizedRoutes);

	return (
		<Routes>
			{routes.map(route => (
				<Route path={route.path} element={route.element} key={route.path}/>
			))}
		</Routes>
	);
};

export default AppRouter;