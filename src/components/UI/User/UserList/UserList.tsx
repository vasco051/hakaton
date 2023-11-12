import {FC} from 'react';

import {UserItem} from "../UserItem/UserItem.tsx";

import {TUser} from "models/TUser.ts";

import styles from './styles.module.scss'

interface IUserListProps {
	users: TUser[]
}

export const UserList: FC<IUserListProps> = ({users}) => {
	return (
		<ul className={styles.list}>
			{users.map(user => <UserItem user={user} key={user.id}/>)}
		</ul>
	);
};