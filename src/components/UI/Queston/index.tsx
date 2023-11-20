import {FC} from 'react';
import {useParams} from "react-router-dom";
import {clsx} from "clsx";

import {useAppSelector} from "hooks/redux.ts";

import {questionAPI} from "services/questionService.ts";

import {TQuestion} from "models/TQuestion.ts";

import styles from './styles.module.scss'

interface IQuestionProps {
	question: TQuestion
}

export const Question: FC<IQuestionProps> = ({question}) => {
	const [makeCheckAnswerQuestion] = questionAPI.useFetchCheckAnswerMutation()
	const {idCurrentCard} = useAppSelector(state => state.questionReducer)

	const {id: idRoom} = useParams()

	const onCheckAnswerQuestion = async (idAnswer: number) => {
		const response = await makeCheckAnswerQuestion({
			idRoom: parseInt(idRoom!),
			answer_id: idAnswer,
			card_id: idCurrentCard!
		})

		if ('data' in response) {
			console.log(response.data)
		}
	}

	const answerClasses = clsx(styles.answer, {})

	return (
		<section className={styles.wrapper}>
			<h4 className={styles.question}>{question.title}</h4>

			<ul className={styles.list}>
				{question.answers.map(answer => (
					<li key={answer.id}>
						<button className={answerClasses} onClick={() => onCheckAnswerQuestion(answer.id)}>
							{answer.title}
						</button>
					</li>
				))}
			</ul>
		</section>
	);
};