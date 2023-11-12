import {FC} from 'react';

import IcDice1 from 'assets/icons/dice/dice1.svg';
import IcDice2 from 'assets/icons/dice/dice2.svg';
import IcDice3 from 'assets/icons/dice/dice3.svg';
import IcDice4 from 'assets/icons/dice/dice4.svg';
import IcDice5 from 'assets/icons/dice/dice5.svg';
import IcDice6 from 'assets/icons/dice/dice6.svg';

import styles from './styles.module.scss';

interface IDiceProps {
	values: [number, number]
}

export const Dice: FC<IDiceProps> = ({values: [value1, value2]}) => {
	const diceEdges = [IcDice1, IcDice2, IcDice3, IcDice4, IcDice5, IcDice6];

	return (
		<section className={styles.wrapper}>
			<div className={styles.content}>
				<div className={styles.cube}>
					<img src={diceEdges[value1 - 1]} alt=""/>
				</div>

				<div className={styles.cube}>
					<img src={diceEdges[value2 - 1]} alt=""/>
				</div>
			</div>
		</section>
	);
};