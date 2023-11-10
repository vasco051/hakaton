import { FC, useEffect } from 'react';
import {Link, useLocation, useNavigate} from 'react-router-dom';

import Button from 'components/UI-kit/Buttons/Button.tsx';

import { roomAPI } from 'services/roomService';
import {dynamicLinks, staticLinks} from 'routes/routingLinks';

import styles from './styles.module.scss';

const Rooms: FC = () => {
  const {
    data: roomsResponse,
    refetch
  } = roomAPI.useFetchAllRoomsQuery('',
    {pollingInterval: 1000}
  );
  const navigate = useNavigate();
  if(roomsResponse!==undefined){
    if(roomsResponse.room_id_to_current_user!==null){

        navigate(dynamicLinks.room(roomsResponse.room_id_to_current_user));
    }
  }

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