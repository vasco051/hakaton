import { FC, ReactNode } from 'react';
import { useParams } from 'react-router-dom';

import { useAppSelector } from 'hooks/redux';
import { BoardCell, CellVariant } from 'components/BoardCell';

import { cardAPI } from 'services/cardService.ts';

import styles from './styles.module.scss';


interface IBoardProps {
  centerSlot: ReactNode;
}

export const Board: FC<IBoardProps> = ({ centerSlot }) => {
  const { id } = useParams();
  cardAPI.useFetchAllCardsQuery(parseInt(id!));
  const { cards } = useAppSelector(state => state.cardReducer);

  return (
    <section className={styles.board}>
      <ul className={styles.top}>
        {cards && <BoardCell variant={CellVariant.CORNER} item={cards.CORNER[0]}/>}
        {cards && cards.TOP.map(item => <BoardCell variant={CellVariant.TOP} item={item}/>)}
        {cards && <BoardCell variant={CellVariant.CORNER} item={cards.CORNER[1]}/>}
      </ul>

      <section className={styles.center}>
        <ul className={styles.left}>
          {cards &&cards.LEFT.map(item => <BoardCell variant={CellVariant.LEFT} item={item }/>)}
        </ul>
        <div className={styles.centerSlot}>
          {centerSlot}
        </div>
        <ul className={styles.right}>
          {cards &&cards.RIGHT.map(item => <BoardCell variant={CellVariant.RIGHT} item={item }/>)}
        </ul>
      </section>

      <ul className={styles.bottom}>
        {cards && <BoardCell variant={CellVariant.CORNER} item={cards.CORNER[2]}/>}
        {cards && cards.BOTTOM.map(item => <BoardCell variant={CellVariant.BOTTOM} item={item }/>)}
        {cards && <BoardCell variant={CellVariant.CORNER} item={cards.CORNER[3]}/>}
      </ul>
    </section>
  );
};