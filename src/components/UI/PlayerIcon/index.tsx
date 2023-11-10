import { FC, useEffect, useState } from 'react';
import styles from './styles.module.scss';


interface playerIconProps {
  position: number,
}

const PlayerIcon: FC<playerIconProps> = ({ position }) => {
  const [ previous, setPrevious ] = useState(1);

  useEffect(() => {
    setTimeout(() => {

      const iconElement = document.createElement('div'); // Создаем элемент DOM
      iconElement.className = styles.icon;
      const previousCell = document.getElementById(`cell${previous}`);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      if (previousCell) { // @ts-ignore
        previousCell.removeChild(previousCell.lastChild);
      }
      // Добавляем новый PlayerIcon
      const cell = document.getElementById(`cell${position}`);
      // Присваиваем ему класс
      if (cell) {
        cell.appendChild(iconElement); // Добавляем элемент в ячейку
        cell.classList.add('player-icon-cell'); // Добавляем класс для идентификации ячейки
        setPrevious(position);
      }
    }, 250);
  }, [ position ]);

  return null;
};

export default PlayerIcon;