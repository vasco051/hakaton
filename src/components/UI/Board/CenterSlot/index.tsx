import {FC, useEffect} from 'react';

import {useAppDispatch, useAppSelector} from "hooks/redux.ts";
import {Question} from "components/UI/Queston";

import {questionAPI} from "services/questionService.ts";

import {setQuestion} from "store/reducers/question.slice.ts";

import styles from './styles.module.scss'

export const CenterSlot: FC = () => {
	const [fetchQuestion] = questionAPI.useLazyFetchQuestionQuery()
	const {question, idCurrentCard} = useAppSelector(state => state.questionReducer)
	const dispatch = useAppDispatch()

	const onFetchQuestion = async () => {
		const response = await fetchQuestion()

		if ('data' in response) {
			dispatch(setQuestion(response.data!))
		}
	}

	useEffect(() => {
		onFetchQuestion()
	}, [idCurrentCard]);

	return (
		<section className={styles.wrapper}>
			{/*<Dice values={[1, 2]}/>*/}
			{question && <Question question={question}/>}
		</section>
	);
};