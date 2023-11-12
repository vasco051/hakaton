import {FC, useEffect} from 'react';
import {useLocation, useParams} from 'react-router-dom';

import {useAppSelector} from "hooks/redux.ts";
import {PageWrapper} from "components/Layout/PageWrapper";
import {Board} from "components/UI/Board";
import {UserList} from "components/UI/User";
import {Point} from "components/UI/Point";

import {cardAPI} from "services/cardService.ts";
import {userAPI} from "services/userService.ts";

import styles from './styles.module.scss';

export const Room: FC = () => {
	const {id: idRoom} = useParams();
	const location = useLocation()
	const {users} = useAppSelector(state => state.userReducer)
	const {cards} = useAppSelector(state => state.cardReducer)

	const {refetch: refetchCards} = cardAPI.useFetchAllCardsQuery(parseInt(idRoom!));
	const {refetch: refetchUsers} = userAPI.useFetchAllUsersQuery(parseInt(idRoom!));

	useEffect(() => {
		refetchUsers()
		refetchCards()
	}, [location.pathname]);

	return (
		<PageWrapper>
			<div className={styles.wrapper}>
				{cards && users.map(user => <Point color={user.color} position={user.position} key={user.id}/>)}
				<UserList users={users}/>
				<Board/>
			</div>
		</PageWrapper>
	);
};