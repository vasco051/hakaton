import {clsx} from 'clsx';

import {TBoardCell} from 'models/TBoardCell.ts';
import {FC} from 'react';

import styles from './styles.module.scss';
import {CellVariant} from './types.ts';


interface IBoardCellProps {
	variant: CellVariant,
	cell: TBoardCell
}

export const BoardCell: FC<IBoardCellProps> = ({variant, cell}) => {
	const cellId = `cell-${cell.index - 1}`

	const cellClasses = clsx(styles.cell, {
		[styles.top]: variant === CellVariant.TOP,
		[styles.right]: variant === CellVariant.RIGHT,
		[styles.bottom]: variant === CellVariant.BOTTOM,
		[styles.left]: variant === CellVariant.LEFT
	});

	const styleWithColor = {
		background: cell.color || ''
	}

	if (variant === CellVariant.CORNER) return (
		<li className={styles.corner} style={styleWithColor} id={cellId}>
			<span className={styles.text}>{cell.title}</span>
		</li>
	);

	return (
		<li className={cellClasses}>
			{cell.cost && (
				<div className={styles.costWrapper} style={styleWithColor}>
					<span className={styles.cost}>{cell.cost}&nbsp;₽</span>
				</div>
			)}
			<div className={styles.textWrapper} style={styleWithColor} id={cellId}>
				<p className={styles.text}>{cell.title}</p>
			</div>
		</li>
	);
};