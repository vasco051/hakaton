import {FC, useEffect, useState} from 'react';

import styles from './styles.module.scss'

interface IPointProps {
	position: number;
	color: string
}

type TCoord = {
	top: number
	left: number
	width: number
	height: number
}

export const Point: FC<IPointProps> = ({color, position}) => {
	const [cellCoords, setCellCoords] = useState<TCoord | null>(null)
	const pointWidth: number = 30

	const onSmoothChangePosition = (coords: TCoord) => {
		// переход без ожидания
		if (cellCoords?.top === coords.top || cellCoords?.left === coords.left) {
			setCellCoords(coords)
			return
		}

		if ([0, 1, 2, 3, 4, 5, 6, 7, 8, 9].includes(position))
			setCellCoords({...coords, left: cellCoords?.left || 0})
		else if ([10, 11, 12, 13, 14, 15, 16, 17, 18, 19].includes(position))
			setCellCoords({...coords, top: cellCoords?.top || 0})
		else if ([20, 21, 22, 23, 24, 25, 26, 27, 28, 29].includes(position))
			setCellCoords({...coords, left: cellCoords?.left || 0})
		else if ([30, 31, 32, 33, 34, 35, 36, 37, 38, 39].includes(position))
			setCellCoords({...coords, top: cellCoords?.top || 0})

		setTimeout(() => setCellCoords(coords), 1000)
	}

	const findCurrentCell = () => {
		const findCell = document.getElementById(`cell-${position.toString()}`)

		if (findCell) {
			const findCellCoords = findCell.getBoundingClientRect()

			const coords = {
				top: findCellCoords.top + window.pageYOffset,
				left: findCellCoords.left + window.pageXOffset,
				height: findCellCoords.height,
				width: findCellCoords.width
			}

			if (cellCoords === null) {
				setCellCoords(coords)
				return
			}

			onSmoothChangePosition(coords)
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
		top: cellCoords.top + (cellCoords.height / 2 - pointWidth / 2),
		left: cellCoords.left + (cellCoords.width / 2 - pointWidth / 2),
		width: pointWidth,
		height: pointWidth,
		background: color,
	}

	return (
		<div className={styles.point} style={pointStyles}></div>
	);
};
