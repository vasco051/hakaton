import {FC} from 'react';

import {useAppSelector} from "hooks/redux.ts";

import styles from './styles.module.scss'

export const PassSlot: FC = () => {
	const {walkingUser} = useAppSelector(state => state.userReducer)

	return (
		<section className={styles.wrapper}>
			В данный момент ход {walkingUser?.username}...
		</section>
	);
};