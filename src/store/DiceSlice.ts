import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface ISliceState {
	count: number,
	userid:number,
	sumCells:number,
}

const initialState: ISliceState = {
	count: 0,
	userid:0,
	sumCells:0,
}

export const diceSlice = createSlice({
	name: 'dice',
	initialState,
	reducers: {
		setRandomDice(state, action: PayloadAction<number>){
			state.count = action.payload
			if(state.count<40){
				state.sumCells+=action.payload;
			}else{
				state.sumCells = state.count % 40;
			}
		},
		setUserId(state,action: PayloadAction<number>){
			state.userid= action.payload;
		}
	},


})

export default diceSlice.reducer