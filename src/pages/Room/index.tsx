import {FC, useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

import { Board } from 'components/Board';
import { UserList } from 'components/UserList';

import { WebSocketClient } from 'store/websocketClient';
import { userAPI } from 'services/userService';
import Question from '../../components/Queston/Question';
import { setIdCurrentCard } from '../../store/reducers/question.slice';

import styles from './styles.module.scss';
import PlayerIcon from "../../components/PlayerIcon";
import {diceSlice, getRandomDice, setIsVisible, setRandomDice} from "../../store/reducers/diceSlice.ts";
import {Dice} from "../../components/dice/ui/Dice.tsx";
import {useAppDispatch, useAppSelector} from "../../hooks/redux.ts";

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

  const { random,sumCells,isVisible,previous } = useAppSelector(state => state.diceReducer)
  const dispatch = useAppDispatch()
  const doDice = ()=>{

    dispatch(setIsVisible(true));
    setTimeout(()=>{dispatch(setIsVisible(false));},1000)
  }
  useEffect(() => {
    console.log(random)
    dispatch(setRandomDice(random[0]+random[1]))
  }, [random]);
  return (
    <section className={styles.room}>

      <button onClick={()=>doDice()}>передвинуть</button>
      {isVisible && <Dice userId={1}/>}
      <PlayerIcon position={sumCells} previous={previous}/>
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