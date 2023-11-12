import {createSlice, PayloadAction} from "@reduxjs/toolkit";


interface ISliceState {
	sumDice: number,
	isVisible: boolean,
	random: number[],
}

const initialState: ISliceState = {
	sumDice: 0,
	random: [ 1, 1 ],
	isVisible: false
}

export const diceSlice = createSlice({
	name: 'dice',
	initialState,
	reducers: {
		generateRandomDice(state) {
			const min = 1;
			const max = 7;
			state.random = [ Math.floor(Math.random() * (max - min) + min), Math.floor(Math.random() * (max - min) + min) ];
			state.sumDice = state.random[0] + state.random[1];
		},

		setIsVisible(state,action: PayloadAction<boolean>){
			state.isVisible = action.payload
		}
	},
})

export default diceSlice.reducer

export const {
	generateRandomDice,
	setIsVisible
} = diceSlice.actions;