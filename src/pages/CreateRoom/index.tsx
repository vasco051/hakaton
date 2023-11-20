import {FC, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {SubmitHandler, useForm} from "react-hook-form";
import {clsx} from 'clsx';

import {PageWrapper} from "components/Layout/PageWrapper";
import {TextField} from "components/UI-kit/TextFields";
import {Button} from "components/UI-kit/Buttons";

import {roomAPI} from 'services/roomService.ts';
import {staticLinks} from "routes/routingLinks.ts";

import {countPlayers, TCreateRoomFormState} from "./types.ts";

import styles from './styles.module.scss';

export const CreateRoom: FC = () => {
  const [currentCountPlayer, setCurrentCountPlayer] = useState(countPlayers[0]);
  const [createRoom] = roomAPI.useCreateRoomMutation();

  const {register, handleSubmit} = useForm({
    defaultValues: {
      title: ''
    }
  })

  const navigate = useNavigate()

  const onSubmitForm: SubmitHandler<TCreateRoomFormState> = async data => {
    const response = await createRoom({
      count_players: currentCountPlayer,
      ...data
    })

    if ('data' in response) {
      navigate(staticLinks.rooms)
    }
  }

  const getItemClasses = (value: number) => clsx(styles.item, {
    [styles.isActive]: value === currentCountPlayer
  });

  return (
    <PageWrapper>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h1 className={styles.title}>Создание игры</h1>

          <form onSubmit={handleSubmit(onSubmitForm)} className={styles.form}>
            <TextField
              label="Название"
              id='title'
              {...register('title', {required: true})}
            />

            <div className={styles.block}>
              <span>Количество игроков</span>
              <ul className={styles.listPlayers}>
                {countPlayers.map(count => (
                  <li key={count}>
                    <button
                      type="button"
                      className={getItemClasses(count)}
                      onClick={() => setCurrentCountPlayer(count)}
                    >
                      {count}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <hr/>

            <Button type='submit'>Создать игру</Button>
          </form>
        </div>
      </div>
    </PageWrapper>
  );
};