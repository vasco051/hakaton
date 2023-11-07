import { clsx } from 'clsx';
import { useFormik } from 'formik';
import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from 'components/Buttons';

import { roomAPI } from 'services/roomService';
import { staticLinks } from 'routes/routingLinks';
import TextField from '../../components/TextFields';

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

      <TextField
        label="Название"
        name="title"
        value={formik.values.title}
        onChange={formik.handleChange}
      />

      <div className={styles.block}>
        <span>Кол-во игроков</span>
        <ul className={styles.countPlayers}>
          {countPlayers.map(count => (
            <li className={getItemClasses(count)} key={count}>
              <Button type="button" onClick={() => setCurrentCountPlayer(count)}>{count}</Button>
            </li>
          ))}
        </ul>
      </div>

      <Button type='submit'>Создать игру</Button>
    </form>
  );
};

export default CreateRoom;