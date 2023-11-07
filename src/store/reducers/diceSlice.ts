import {createSlice, PayloadAction} from "@reduxjs/toolkit";


interface ISliceState {
	count: number,
	sumCells:number,
	random:number[],
}

const initialState: ISliceState = {
	count: 1,
	sumCells:0,
	random:[0,0],
}

export const diceSlice = createSlice({
	name: 'dice',
	initialState,
	reducers: {
		setRandomDice(state, action: PayloadAction<number>){
			console.log(state.sumCells,action.payload)
			state.count = state.sumCells+action.payload
			if(state.count<40){
				state.sumCells += action.payload;
			}else{
				state.sumCells = state.sumCells+action.payload -40
				// state.sumCells = (state.sumCells+action.payload) % 40;
			}
		},
		getRandomDice(state){
			const min =1;
			const max =7;

			state.random = [Math.floor(Math.random() * (max - min) + min),Math.floor(Math.random() * (max - min) + min)]

		},
	},
})

export default diceSlice.reducer

export const  { getRandomDice, setRandomDice} =  diceSlice.actions