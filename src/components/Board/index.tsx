import {FC, useEffect} from 'react';
import {useLocation, useParams} from 'react-router-dom';

import { useAppSelector } from 'hooks/redux';
import { BoardCell, CellVariant } from 'components/BoardCell';

import { cardAPI } from 'services/cardService.ts';

import styles from './styles.module.scss';

export const Board: FC = () => {
  const { id } = useParams();
  const location = useLocation()

  const {refetch} = cardAPI.useFetchAllCardsQuery(parseInt(id!));
  const {cards} = useAppSelector(state => state.cardReducer)

  useEffect(() => {
    refetch()
  }, [location.pathname]);


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
          chat slot
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