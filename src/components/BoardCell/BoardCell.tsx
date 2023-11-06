import { clsx } from 'clsx';

import { TBoardCell } from 'models/TBoardCell';
import { FC } from 'react';

import styles from './styles.module.scss';
import { CellVariant } from './types';


interface IBoardCellProps {
  variant: CellVariant,
  item: TBoardCell
}

const BoardCell: FC<IBoardCellProps> = ({
  variant,
  item
}) => {
  const cellClasses = clsx(styles.cell, {
    [styles.top]: variant === CellVariant.TOP,
    [styles.right]: variant === CellVariant.RIGHT,
    [styles.bottom]: variant === CellVariant.BOTTOM,
    [styles.left]: variant === CellVariant.LEFT
  });

  if (variant === CellVariant.CORNER) {
    return (
      <li className={styles.corner}>
        <img src={`http://127.0.0.1:8000${item.image}`} alt="" className={styles.image}/>
      </li>
    );
  }

  return (
    <li className={cellClasses}>
      {item.cost && (
        <div className={styles.coast}>
          <span>{item.cost} ₽</span>
        </div>
      )}
      <div className={styles.imageWrapper}>
        <img src={`http://127.0.0.1:8000${item.image}`} alt="" className={styles.image}/>
      </div>
    </li>
  );
};

export default BoardCell;