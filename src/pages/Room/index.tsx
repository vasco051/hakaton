import {FC, useEffect} from 'react';
import { useParams } from 'react-router-dom';

import { UserList } from 'components/UserList';
import { useAppDispatch, useAppSelector } from 'hooks/redux.ts';

import Question from 'components/Queston/Question';
import PlayerIcon from 'components/PlayerIcon';
import { Board } from 'components/Board';
import { Dice } from 'components/dice/ui/Dice.tsx';

import { userAPI } from 'services/userService';

import { setIsVisible, setRandomDice} from "../../store/reducers/diceSlice.ts";
import { setIdCurrentCard } from 'store/reducers/question.slice';
import { WebSocketClient } from 'store/websocketClient';

import styles from './styles.module.scss';

const Room: FC = () => {
  const { id } = useParams();
  const { users } = useAppSelector(state => state.userReducer);
  userAPI.useFetchAllUsersQuery(parseInt(id!));

  useEffect(() => {
    const client = new WebSocketClient(`ws://127.0.0.1:8000/ws/room/${id}/`);
    client.connect();




    setTimeout(() => {
      client.send(JSON.stringify({
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
      <UserList users={users}/>
      <Board/>
    </section>
  );
};

export default Room;