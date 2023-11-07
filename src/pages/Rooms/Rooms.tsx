import { FC, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import Button from 'components/Buttons';

import { roomAPI } from 'services/roomService';
import { staticLinks } from 'routes/routingLinks';

import styles from './styles.module.scss';

const Rooms: FC = () => {
  const {
    data: roomsResponse,
    refetch
  } = roomAPI.useFetchAllRoomsQuery();
  const [ joinToRome ] = roomAPI.useJoinToRoomMutation();

  const location = useLocation();

  useEffect(() => {
    refetch();
  }, [ location.pathname ]);

  return (
    <div className={styles.rooms}>
      <div className={styles.header}>
        <h2>Ожидают игры</h2>
        <Link to={staticLinks.roomCreate}><Button>Создать игру</Button></Link>
      </div>

      <ul className={styles.list}>
        {roomsResponse?.rooms.map(room => (
          <li className={styles.item} key={room.id}>
            <span className={styles.title}>{room.title}</span>
            <div className={styles.right}>
              <span>{room.count_players_now} / {room.count_players}</span>
              <Button onClick={() => joinToRome(room.id)}>Присоединиться</Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Rooms;