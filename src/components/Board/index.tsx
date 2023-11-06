import { FC } from 'react';

import { BoardCell, CellVariant } from 'components/BoardCell';
import { UserList } from 'components/UserList';

import { TBoardCell } from 'models/TBoardCell';

import styles from './styles.module.scss';


export const Board: FC = () => {
  const top = [ {}, {}, {}, {}, { coast: 123 }, {}, {}, { coast: ' ' }, {} ];
  const right = [ {}, {}, {}, {}, { coast: 123 }, {}, {}, {}, {} ];
  const bottom = [ { coast: ' ' }, {}, {}, {}, { coast: 123 }, { coast: ' ' }, {}, {}, {} ];
  const left = [ {}, { coast: ' ' }, {}, {}, { coast: 123 }, {}, {}, {}, {} ];
  const userlist = [
    {
      username: 'maxim',
      id: 1,
      balance: 16000,
      color:'red',
      is_sleep:false,
      is_active:false,
      is_walk:false
    },
    {
      username: 'maxim',
      id:1,
      balance: 16000,
      color:'green',
      is_sleep:false,
      is_active:true,
      is_walk:false
    },
    {
      username: 'dmitriy',
      id:1,
      balance: 16000,
      color:'blue',
      is_sleep:false,
      is_active:true,
      is_walk:true
    },
  ]
  return (
    <div className={styles.wrapper}>
      <UserList users={userlist}/>
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
    </div>
  );
};