import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface ISliceState {
	isVisible: boolean,
	values: [number, number] | null,
}

const initialState: ISliceState = {
	values: null,
	isVisible: false
}

export const diceSlice = createSlice({
	name: 'dice',
	initialState,
	reducers: {
		generateRandomDice(state) {
			const min = 1;
			const max = 7;
			state.values = [
				Math.floor(Math.random() * (max - min) + min),
				Math.floor(Math.random() * (max - min) + min)
			];
		},

		setIsVisible(state, {payload: isVisible}: PayloadAction<boolean>) {
			state.isVisible = isVisible
		}
	},
})

export default diceSlice.reducer

export const {
	generateRandomDice,
	setIsVisible
} = diceSlice.actions;