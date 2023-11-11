import {FC} from 'react';
import {clsx} from 'clsx';

import {TUser} from 'models/TUser.ts';

import IcDead from 'assets/icons/user/dead.svg';
import styles from './styles.module.scss';

export interface UserItemProps {
	user: TUser;
}

export const UserItem: FC<UserItemProps> = ({user}) => {
	const userClasses = clsx(styles.item, {
		[styles.disabled]: !user.is_active,
		[styles.walking]: user.is_walk
	});
	const color = {
		backgroundColor: user.color || ''
	};

	return (
		<li className={userClasses}>
			<div className={styles.avatar} style={color}>
				{user.username[0].toUpperCase()}
			</div>

			<span className={styles.name}>{user.username}</span>
			{user.is_active
				? <span className={styles.price}>{user.balance} ₽</span>
				: <img src={IcDead} alt="dead"/>
			}
		</li>
	)
}