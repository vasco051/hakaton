import { FC, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { roomAPI } from 'services/roomService';
import { staticLinks } from 'routes/routingLinks';

import styles from './styles.module.scss';


const Rooms: FC = () => {
  const {
    data: rooms = [],
    refetch
  } = roomAPI.useFetchAllRoomsQuery();
  const [ joinToRome ] = roomAPI.useJoinToRoomMutation();

  const location = useLocation();

  useEffect(() => {
    refetch();
  }, [ location.pathname ]);

  return (
    <div className={styles.rooms}>
      <div>
        <span>Ожидают</span>
        <Link to={staticLinks.roomCreate}>Создать игру</Link>
      </div>

      <ul className={styles.list}>
        {rooms.map(room => (
          <li className={styles.item}>
            <span className={styles.title}>{room.title}</span>
            <div className={styles.right}>
              <span>{room.count_players_now} / {room.count_players}</span>
              <button onClick={() => joinToRome(room.id)}>Присоединиться</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Rooms;