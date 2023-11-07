import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from 'hooks/redux';
import Popup from 'components/Poppers/Popup/Popup';

import { questionAPI } from 'services/questionService';
import { setUserBalance } from 'store/reducers/user.slice';

const Question: FC = () => {
  const [ isOpenModal, setIsOpenModal ] = useState(false);
  const {
    idCurrentCard,
    question,
    isFirstLoading
  } = useAppSelector(state => state.questionReducer);
  const { refetch: refetchQuesion } = questionAPI.useFetchQuestionQuery();
  const [ checkAnswer, { data: checkResponse } ] = questionAPI.useFetchCheckAnswerMutation();

  const dispatch = useAppDispatch();
  const { id: idRoom } = useParams();

  useEffect(() => {
    refetchQuesion();
  }, [ idCurrentCard ]);

  useEffect(() => {
    if (question) {
      setIsOpenModal(true);
    }
  }, [ question ]);

  if (!question || isFirstLoading) return null;

  const onCheckAnswer = (answerId: number) => {
    checkAnswer({
      idRoom: parseInt(idRoom!),
      answer_id: answerId,
      card_id: idCurrentCard!
    });
  };

  if (checkResponse) {
    if (checkResponse.send) {
      if (checkResponse.current_balance?.id) {
        dispatch(setUserBalance({
          id: checkResponse.current_balance.id,
          balance: checkResponse.current_balance.balance!
        }));
      }

      if (checkResponse.owner_balance?.id) {
        dispatch(setUserBalance({
          id: checkResponse.owner_balance.id,
          balance: checkResponse.owner_balance.balance!
        }));
      }
    }
  }

  return (
    <section>
      <Popup isOpen={isOpenModal} onClose={() => setIsOpenModal(false)}>
        <h4>{question.title}</h4>

        <ul>
          {question.answers.map(answer => (
            <li key={answer.id} onClick={() => onCheckAnswer(answer.id)}>{answer.title}</li>
          ))}
        </ul>
      </Popup>
    </section>
  );
};

export default Question;