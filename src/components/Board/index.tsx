import { FC } from 'react';

import { BoardCell, CellVariant } from 'components/BoardCell';

import { TBoardCell } from 'models/TBoardCell';

import styles from './styles.module.scss';


export const Board: FC = () => {
  const top = [ {}, {}, {}, {}, {coast: 123}, {}, {}, {}, {} ];
  const right = [ {}, {}, {}, {}, {coast: 123}, {}, {}, {}, {} ];
  const bottom = [ {}, {}, {}, {}, {coast: 123}, {}, {}, {}, {} ];
  const left = [ {}, {}, {}, {}, {coast: 123}, {}, {}, {}, {} ];

  return (
    <section className={styles.board}>
      <ul className={styles.top}>
        <BoardCell variant={CellVariant.CORNER} item={{} as TBoardCell}/>
        {top.map(item => <BoardCell variant={CellVariant.TOP} item={item as TBoardCell}/>)}
        <BoardCell variant={CellVariant.CORNER} item={{} as TBoardCell}/>
      </ul>

      <section className={styles.center}>
        <ul className={styles.left}>
          {left.map(item => <BoardCell variant={CellVariant.LEFT} item={item as TBoardCell}/>)}
        </ul>
        <div className={styles.centerSlot}>
          chat slot
        </div>
        <ul className={styles.right}>
          {right.map(item => <BoardCell variant={CellVariant.RIGHT} item={item as TBoardCell}/>)}
        </ul>
      </section>

      <ul className={styles.bottom}>
        <BoardCell variant={CellVariant.CORNER} item={{} as TBoardCell}/>
        {bottom.map(item => <BoardCell variant={CellVariant.BOTTOM} item={item as TBoardCell}/>)}
        <BoardCell variant={CellVariant.CORNER} item={{} as TBoardCell}/>
      </ul>
    </section>
  );
};