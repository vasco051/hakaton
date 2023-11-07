import { FC, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { useParams } from 'react-router-dom';
import { questionAPI } from 'services/questionService';
import Popup from '../Poppers/Popup/Popup';


const Question: FC = () => {
  const [ isOpenModal, setIsOpenModal ] = useState(true);
  const { idCurrentCard } = useAppSelector(state => state.questionReducer);
  const {
    data: question,
    refetch
  } = questionAPI.useFetchQuestionQuery(idCurrentCard);
  const [ checkAnswer ] = questionAPI.useFetchCheckAnswerMutation();

  const dispatch = useAppDispatch();
  const { id: idRoom } = useParams();

  useEffect(() => {
    refetch();
  }, [ idCurrentCard ]);

  if (!question) return null;

  const onCheckAnswer = (answerId: number) => {
    console.log('fsdkljfasdlkfjlksdafjlk');
    checkAnswer({
      idRoom: parseInt(idRoom!),
      answer_id: answerId,
      card_id: idCurrentCard!
    });
  };

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