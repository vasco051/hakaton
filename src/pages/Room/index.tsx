import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Board } from 'components/Board';
import { UserList } from 'components/UserList';

import { WebSocketClient } from 'store/websocketClient';
import { userAPI } from 'services/userService';
import Question from '../../components/Queston/Question';
import { setIdCurrentCard } from '../../store/reducers/question.slice';

import styles from './styles.module.scss';
import PlayerIcon from 'components/PlayerIcon';
import { getRandomDice, setRandomDice } from 'store/reducers/diceSlice.ts';
import { Dice } from 'components/dice/ui/Dice.tsx';
import { useAppDispatch, useAppSelector } from 'hooks/redux.ts';


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


    setTimeout(() =>  {
      dispatch(setIdCurrentCard(45))
    }, 2000)
  }, []);

  const [ IsVisible, setIsVisible ] = useState(false);
  const {
    random,
    sumCells
  } = useAppSelector(state => state.diceReducer);
  const dispatch = useAppDispatch();
  const doDice = () => {
    dispatch(getRandomDice());
    dispatch(setRandomDice(random[0] + random[1]));
    setIsVisible(true);

    setTimeout(() => {
      setIsVisible(false);
    }, 1000);
  };

  return (
    <section className={styles.room}>
      <Question/>
      <button onClick={() => doDice()}>передвинуть</button>
      {IsVisible && <Dice userId={1}/>}
      <PlayerIcon position={sumCells}/>
      <UserList users={users}/>
      <Board/>
    </section>
  );
};

export default Room;