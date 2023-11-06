import { FC } from 'react';

import { BoardCell, CellVariant } from 'components/BoardCell';

import { TBoardCell } from 'models/TBoardCell';

import styles from './styles.module.scss';
import {cardAPI} from "../../services/cardService.ts";


export const Board: FC = () => {
  const {data: cards} = cardAPI.useFetchAllCardsQuery()
  return (
    <section className={styles.board}>

      <ul className={styles.top}>
        <BoardCell variant={CellVariant.CORNER} item={{} as TBoardCell}/>
        {cards &&cards.TOP.map(item => <BoardCell variant={CellVariant.TOP} item={item}/>)}
        <BoardCell variant={CellVariant.CORNER} item={{} as TBoardCell}/>
      </ul>

      <section className={styles.center}>
        <ul className={styles.left}>
          {cards &&cards.LEFT.map(item => <BoardCell variant={CellVariant.LEFT} item={item }/>)}
        </ul>
        <div className={styles.centerSlot}>
          chat slot
        </div>
        <ul className={styles.right}>
          {cards &&cards.RIGHT.map(item => <BoardCell variant={CellVariant.RIGHT} item={item }/>)}
        </ul>
      </section>

      <ul className={styles.bottom}>
        <BoardCell variant={CellVariant.CORNER} item={{} as TBoardCell}/>
        {cards &&cards.BOTTOM.map(item => <BoardCell variant={CellVariant.BOTTOM} item={item }/>)}
        <BoardCell variant={CellVariant.CORNER} item={{} as TBoardCell}/>
      </ul>
    </section>
  );
};