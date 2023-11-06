import { FC } from 'react';
import { useParams } from 'react-router-dom';

import { Board } from 'components/Board';
import { UserList } from 'components/UserList';

import styles from './styles.module.scss';

const users = [
  {
    username: 'maxim',
    id: 1,
    balance: 16000,
    color: 'red',
    is_sleep: false,
    is_active: false,
    is_walk: false
  },
  {
    username: 'maxim',
    id: 2,
    balance: 16000,
    color: 'green',
    is_sleep: false,
    is_active: true,
    is_walk: false
  },
  {
    username: 'dmitriy',
    id: 3,
    balance: 16000,
    color: 'blue',
    is_sleep: false,
    is_active: true,
    is_walk: true
  }
];

const Rooom: FC = () => {
  const { id } = useParams();



  return (
    <section className={styles.room}>
      <UserList users={users}/>
      <Board/>
    </section>
  );
};

export default Rooom;