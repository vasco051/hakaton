import {FC, useEffect, useState} from 'react';

import styles from './styles.module.scss'

interface IPointProps {
	position: number;
	color: string
}

type TCoord = {
	top: number
	right: number
	bottom: number
	left: number
	width: number
	height: number
}

export const Point: FC<IPointProps> = ({color, position}) => {
	const [cellCoords, setCellCoords] = useState<TCoord | null>(null)

	const findCurrentCell = () => {
		const findCell = document.getElementById(`cell-${position.toString()}`)

		if (findCell) {
			const findCellCoords = findCell.getBoundingClientRect()

			setCellCoords({
				top: findCellCoords.top + window.pageYOffset ,
				right: findCellCoords.right + window.pageXOffset,
				bottom: findCellCoords.bottom + window.pageYOffset,
				left: findCellCoords.left + window.pageXOffset,
				height: findCellCoords.height,
				width: findCellCoords.width
			})
		} else {
			setCellCoords(null)
		}
	}

	useEffect(() => {
		window.addEventListener('resize', findCurrentCell)
		return () => window.removeEventListener('resize', findCurrentCell)
	}, []);

	useEffect(() => {
		findCurrentCell()
	}, [position]);

	if (!cellCoords) return null

	const pointStyles = {
		top: cellCoords.top + (cellCoords.height / 2 - 12.5),
		left: cellCoords.left + (cellCoords.width / 2 - 12.5),
		background: color,
	}

	return (
		<div className={styles.point} style={pointStyles}></div>
	);
};
