import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Board } from 'components/Board';
import { UserList } from 'components/UserList';

import { WebSocketClient } from 'store/websocketClient';
import { userAPI } from 'services/userService';

import styles from './styles.module.scss';

const Room: FC = () => {
  const { id } = useParams();

  const { data: users = [] } = userAPI.useFetchAllUsersQuery(parseInt(id!));

  useEffect(() => {
    const socket = new WebSocketClient(`ws://127.0.0.1:8000/ws/room/${id}/`);

    socket.connect();

    setTimeout(() => {
      socket.send(JSON.stringify({
        type: 'send_color',
        color: 'dsf'
      }));
    }, 500);
  }, []);

  return (
    <section className={styles.room}>
      <UserList users={users}/>
      <Board/>
    </section>
  );
};

export default Room;