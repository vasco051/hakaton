import {FC, useEffect } from 'react';
import styles from './styles.module.scss'
import {renderToString} from "react-dom/server";

interface playerIconProps {
  position:number,
}
const PlayerIcon:FC<playerIconProps> = ({position}) => {


  useEffect(() => {
    const cell = document.getElementById(`cell1`);
    const component = <div className={styles.icon}  />;
    const componentString = renderToString(component);
    if(cell) cell.innerHTML += componentString

    console.log(position)
  }, []);

  useEffect(() => {
    const cell = document.getElementById(`cell${position+1}`);
    const component = <div className={styles.icon}  />;
    const componentString = renderToString(component);
    if(cell) cell.innerHTML += componentString
    console.log(position)
  }, [position]);


  return (
    <>


    </>
  );
};

export default PlayerIcon;