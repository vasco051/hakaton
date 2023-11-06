import {FC, useState} from 'react';
import styles from './styles.module.scss'

interface playerIconProps {
  countDice:number,
}
const PlayerIcon:FC<playerIconProps> = ({countDice}) => {
  const cellCount = 40;
  const [currentPosition, setCurrentPosition] = useState(countDice);


  return (
    <>
      <div className={styles.icon}>
        {currentPosition}
      </div>

    </>
  );
};

export default PlayerIcon;