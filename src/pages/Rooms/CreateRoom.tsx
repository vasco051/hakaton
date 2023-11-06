import { clsx } from 'clsx';
import { useFormik } from 'formik';
import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { roomAPI } from 'services/roomService';
import { staticLinks } from 'routes/routingLinks';

import styles from './styles.module.scss';


const CreateRoom: FC = () => {
  const countPlayers = [ 2, 3, 4, 5 ];
  const [ currentCountPlayer, setCurrentCountPlayer ] = useState(countPlayers[0]);
  const [ createRoom, { data } ] = roomAPI.useCreateRoomMutation();

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      title: ''
    },
    onSubmit: (values) => {
      createRoom({
        ...values,
        count_players: currentCountPlayer
      });
    }
  });

  if (data) {
    navigate(staticLinks.rooms);
  }

  const getItemClasses = (value: number) => clsx(styles.item, {
    [styles.isActive]: value === currentCountPlayer
  });

  return (
    <form onSubmit={formik.handleSubmit} className={styles.createRoom}>
      <h1>Создание игры</h1>

      <div className={styles.block}>
        <span>Название</span>
        <input type="text" value={formik.values.title} onChange={formik.handleChange} name="title"/>
      </div>

      <div className={styles.block}>
        <span>Кол-во игроков</span>
        <ul className={styles.countPlayers}>
          {countPlayers.map(count => (
            <li className={getItemClasses(count)} key={count}>
              <button type="button" onClick={() => setCurrentCountPlayer(count)}>{count}</button>
            </li>
          ))}
        </ul>
      </div>

      <button>Создать игру</button>
    </form>
  );
};

export default CreateRoom;