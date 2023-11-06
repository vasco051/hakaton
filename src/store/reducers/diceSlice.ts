import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface ISliceState {
	count: number,
	sumCells:number,
}

const initialState: ISliceState = {
	count: 0,
	sumCells:0,
}

export const diceSlice = createSlice({
	name: 'dice',
	initialState,
	reducers: {
		setRandomDice(state, action: PayloadAction<number>){
			state.count = action.payload
			if(state.count<40){
				state.sumCells += action.payload;
			}else{
				state.sumCells = state.count % 40;
			}
		},
	},
})

export default diceSlice.reducer