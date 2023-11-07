import {FC, useEffect} from 'react';
import { useParams } from 'react-router-dom';

import { UserList } from 'components/UserList';
import { useAppDispatch, useAppSelector } from 'hooks/redux.ts';

import Question from 'components/Queston/Question';
import PlayerIcon from 'components/PlayerIcon';
import { Board } from 'components/Board';
import { Dice } from 'components/dice/ui/Dice.tsx';

import { userAPI } from 'services/userService';
import { questionAPI } from 'services/questionService';

import { generateRandomDice, setIsVisible } from 'store/reducers/diceSlice.ts';
import { setIdCurrentCard, setLoading } from 'store/reducers/question.slice';
import Button from '../../components/Buttons';

import styles from './styles.module.scss';


const Room: FC = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  const {
    sumDice,
    isVisible
  } = useAppSelector(state => state.diceReducer);
  const { users } = useAppSelector(state => state.userReducer);

  const [ fetchStepUser, { data: stepInfo } ] = userAPI.useFetchStepUserMutation();
  const { refetch: refetchQuesion } = questionAPI.useFetchQuestionQuery();

  userAPI.useFetchAllUsersQuery(parseInt(id!));


  // useEffect(() => {
  //   const client = new WebSocketClient(`ws://127.0.0.1:8000/ws/room/${id}/`);
  //   client.connect();
  //
  //   setTimeout(() => {
  //     client.send(JSON.stringify({
  //       type: 'send_color',
  //       color: 'dsf'
  //     }));
  //   }, 500);
  //
  //
  //   setTimeout(() =>  {
  //     dispatch(setIdCurrentCard(45))
  //   }, 2000)
  // }, []);

  const doDice = () => {
    dispatch(setLoading(false));
    dispatch(setIsVisible(true));
    dispatch(generateRandomDice());
    setTimeout(() => {
      dispatch(setIsVisible(false));
    }, 1000);
  };

  useEffect(() => {
    fetchStepUser(sumDice);
  }, [ sumDice ]);

  useEffect(() => {
    if (stepInfo) {
      refetchQuesion();
      dispatch(setIdCurrentCard(stepInfo.card_id));
    }
  }, [ stepInfo ]);

  return (
    <section className={styles.room}>
      {isVisible && <Dice/>}
      {users.map(user => (
        <PlayerIcon position={user.position + 1} key={user.id}/>
      ))}
      <Question/>
      <UserList users={users}/>
      <Board slot={
        <Button onClick={() => doDice()}>передвинуть</Button>
      }/>
    </section>
  );
};

export default Room;