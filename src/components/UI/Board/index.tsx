import {FC} from 'react';

import {useAppSelector} from 'hooks/redux';
import {BoardCell, CellVariant} from "./BoardCell";
import {CenterSlot} from "./CenterSlot";
import {PassSlot} from "./PassSlot";

import styles from './styles.module.scss';

export const Board: FC = () => {
  const {cards} = useAppSelector(state => state.cardReducer)
  const {walkingUser} = useAppSelector(state => state.userReducer)
  const {account} = useAppSelector(state => state.accountReducer)

  const isMyWalk = walkingUser?.id === account?.id

  return (
    <section className={styles.board}>
      <ul className={styles.top}>
        {cards && <BoardCell variant={CellVariant.CORNER} cell={cards.CORNER[0]}/>}
        {cards && cards.TOP.map(item => <BoardCell variant={CellVariant.TOP} cell={item} key={item.id}/>)}
        {cards && <BoardCell variant={CellVariant.CORNER} cell={cards.CORNER[1]}/>}
      </ul>

      <section className={styles.center}>
        <ul className={styles.left}>
          {cards && cards.LEFT.map(item => <BoardCell variant={CellVariant.LEFT} cell={item} key={item.id}/>)}
        </ul>
        <div className={styles.centerSlot}>
          {isMyWalk
            ? <CenterSlot/>
            : <PassSlot/>
          }
        </div>
        <ul className={styles.right}>
          {cards && cards.RIGHT.map(item => <BoardCell variant={CellVariant.RIGHT} cell={item} key={item.id}/>)}
        </ul>
      </section>

      <ul className={styles.bottom}>
        {cards && <BoardCell variant={CellVariant.CORNER} cell={cards.CORNER[2]}/>}
        {cards && cards.BOTTOM.map(item => <BoardCell variant={CellVariant.BOTTOM} cell={item} key={item.id}/>)}
        {cards && <BoardCell variant={CellVariant.CORNER} cell={cards.CORNER[3]}/>}
      </ul>
    </section>
  );
};