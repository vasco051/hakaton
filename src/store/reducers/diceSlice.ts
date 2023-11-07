import {createSlice, PayloadAction} from "@reduxjs/toolkit";


interface ISliceState {
	count: number,
	sumCells:number,
	previous:number,
	isVisible:boolean,
	random:number[],
}

const initialState: ISliceState = {
	count: 1,
	sumCells:1,
	previous:0,
	random:[0,0],
	isVisible:false,
}

export const diceSlice = createSlice({
	name: 'dice',
	initialState,
	reducers: {
		setRandomDice(state, action: PayloadAction<number>){
			console.log(state.sumCells,action.payload)
			state.count = state.sumCells+action.payload
			state.previous=state.sumCells;
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
		setIsVisible(state,action: PayloadAction<boolean>){
			state.isVisible = action.payload

		}
	},
})

export default diceSlice.reducer

export const  { getRandomDice, setRandomDice,setIsVisible} =  diceSlice.actions