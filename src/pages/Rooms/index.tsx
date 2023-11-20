import {FC, useEffect} from 'react';
import {useNavigate} from "react-router-dom";

import {PageWrapper} from "components/Layout/PageWrapper";
import {LinkButton} from "components/UI-kit/Buttons";
import {RoomItem} from "components/UI/RoomItem";

import {roomAPI} from 'services/roomService';
import {dynamicLinks, staticLinks} from "routes/routingLinks.ts";

import {TRoom} from "models/TRoom.ts";

import styles from './styles.module.scss'

export const Rooms: FC = () => {
  const [makeJoinToRoom] = roomAPI.useJoinToRoomMutation()
  const {data: roomsResponse} = roomAPI.useFetchAllRoomsQuery(null, {
    pollingInterval: 1000
  });

  const navigate = useNavigate()

  useEffect(() => {
    if (roomsResponse && roomsResponse.room_id_to_current_user) {
      navigate(dynamicLinks.room(roomsResponse.room_id_to_current_user));
    }
  }, [roomsResponse])

  const onJoinToRoom = (room: TRoom) => {
    makeJoinToRoom(room.id)
  }

  return (
    <PageWrapper>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <section className={styles.header}>
            <h2>Ожидают игры</h2>
            <LinkButton to={staticLinks.roomCreate}>Создать игру</LinkButton>
          </section>

          <ul className={styles.list}>
            {roomsResponse?.rooms.length
              ? (
                roomsResponse?.rooms.map(room => (
                  <RoomItem room={room} onJoinToRoom={onJoinToRoom}/>
                ))
              ) : (
                <li className={styles.emptyItem}>Готовых комнат ещё нет...</li>
              )
            }
          </ul>
        </div>
      </div>
    </PageWrapper>
  );
};