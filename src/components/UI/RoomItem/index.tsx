import {FC} from 'react';

import {Button} from "components/UI-kit/Buttons";

import {TRoom} from "models/TRoom.ts";

import styles from './styles.module.scss'

interface IRoomItemProps {
  room: TRoom,
  onJoinToRoom: (room: TRoom) => void;
}

export const RoomItem: FC<IRoomItemProps> = ({room, onJoinToRoom}) => {
  return (
    <li className={styles.item}>
      <span className={styles.title}>{room.title}</span>
      <div className={styles.right}>
        <span className={styles.countPlayers}>{room.count_players_now} / {room.count_players}</span>
        {room.in_room
          ? <Button disabled>Вы в команде...</Button>
          : <Button onClick={() => onJoinToRoom(room)}>Присоединиться</Button>
        }
      </div>
    </li>
  );
};