import {FC, useEffect } from 'react';
import styles from './styles.module.scss'
import {renderToString} from "react-dom/server";

interface playerIconProps {
  position:number,
  previous:number,
}
const PlayerIcon:FC<playerIconProps> = ({position,previous}) => {


  // useEffect(() => {
  //
  //   const cell = document.getElementById(`cell1`);
  //   const iconElement = document.createElement('div'); // Создаем элемент DOM
  //   iconElement.className = styles.icon;
  //   cell.removeChild(iconElement)
  //   const component = <div className={styles.icon}  />;
  //   const componentString = renderToString(component);
  //   if(cell) cell.innerHTML += componentString
  //
  //   console.log(position)
  // }, []);

  useEffect(() => {
    const iconElement = document.createElement('div'); // Создаем элемент DOM
    iconElement.className = styles.icon;
    // Удаляем предыдущий PlayerIcon
    const previousCell = document.getElementById(`cell${previous}`)
    if(previousCell) previousCell.removeChild(previousCell.lastChild)
    // Добавляем новый PlayerIcon
    const cell = document.getElementById(`cell${position}`);
     // Присваиваем ему класс
    if (cell) {
      cell.appendChild(iconElement); // Добавляем элемент в ячейку
      cell.classList.add('player-icon-cell'); // Добавляем класс для идентификации ячейки
    }

    console.log(position);
  }, [position]);


  return (
    <>


    </>
  );
};

export default PlayerIcon;