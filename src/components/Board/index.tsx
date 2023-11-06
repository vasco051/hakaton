import { BoardCell, CellVariant } from 'components/BoardCell';
import { FC } from 'react';

import styles from './styles.module.scss';

export const Board: FC = () => {
  const top = Array(5);
  const right = Array(5);
  const bottom = Array(5);
  const left = Array(5);

  return (
    <section className={styles.board}>
      <ul className={styles.top}>
        <BoardCell variant={CellVariant.CORNER} item={{}}/>
        {top.map(item => <BoardCell variant={CellVariant.TOP} item={item}/>)}
        <BoardCell variant={CellVariant.CORNER} item={{}}/>
      </ul>

      <section className={styles.center}>
        <ul className={styles.left}>
          {left.map(item => <BoardCell variant={CellVariant.LEFT} item={item}/>)}
        </ul>
        <div className={styles.centerSlot}>
          chat slot
        </div>
        <ul className={styles.right}>
          {right.map(item => <BoardCell variant={CellVariant.RIGHT} item={item}/>)}
        </ul>
      </section>

      <ul className={styles.bottom}>
        <BoardCell variant={CellVariant.CORNER} item={{}}/>
        {bottom.map(item => <BoardCell variant={CellVariant.BOTTOM} item={item}/>)}
        <BoardCell variant={CellVariant.CORNER} item={{}}/>
      </ul>
    </section>
  );
};