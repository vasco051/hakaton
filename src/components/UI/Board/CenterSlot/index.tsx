import {FC, useEffect, useState} from 'react';

import {useAppDispatch, useAppSelector} from "hooks/redux.ts";
import {Question} from "components/UI/Queston";
import {Dice} from "components/UI/Dice";
import {Button} from "components/UI-kit/Buttons";

import {questionAPI} from "services/questionService.ts";
import {userAPI} from "services/userService.ts";

import {setIdCurrentCard, setQuestion} from "store/reducers/question.slice.ts";
import {generateRandomDice, setIsVisible} from "store/reducers/diceSlice.ts";

import styles from './styles.module.scss'

export const CenterSlot: FC = () => {
	const [isMakeStep, setIsMakeStep] = useState(false)
	const [fetchQuestion] = questionAPI.useLazyFetchQuestionQuery()
	const [makeStepUser] = userAPI.useFetchStepUserMutation()

	const {question} = useAppSelector(state => state.questionReducer)
	const {values, isVisible: isVisibleDice} = useAppSelector(state => state.diceReducer);
	const dispatch = useAppDispatch()

	const onFetchUserStepAndQuestion = async () => {
		const stepResponse = await makeStepUser(values ? values[0] + values[1] : 0);

		if (!('data' in stepResponse)) return
		dispatch(setIdCurrentCard(stepResponse.data.card_id))
		setIsMakeStep(true)

		const questionResponse = await fetchQuestion()

		if (!('data' in questionResponse)) return
		dispatch(setQuestion(questionResponse.data!))
	}

	// генерация, показ и скрытие кубиков
	useEffect(() => {
		dispatch(generateRandomDice())
		dispatch(setIsVisible(true))

		setTimeout(() => {
			dispatch(setIsVisible(false))
		}, 3000)
	}, []);

	// шаг пользователя и получение вопроса ячейки при наличии значений кубиков и это первый шаг
	useEffect(() => {
		if (values && !isMakeStep) setTimeout(onFetchUserStepAndQuestion, 1000)
	}, [values]);

	return (
		<section className={styles.wrapper}>
			{(isVisibleDice && values) && <Dice values={values}/>}
			{(!isVisibleDice && question) && <Question question={question}/>}
			<Button onClick={onFetchUserStepAndQuestion}>Бросить кубики</Button>
		</section>
	);
};