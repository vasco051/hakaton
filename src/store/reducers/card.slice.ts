import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {TBoardCell, TBoardCellResponse} from "../../models/TBoardCell.ts";
import {cardAPI} from "../../services/cardService.ts";


interface ISliceState {
	cards: TBoardCellResponse | ,
	currentCard: TBoardCell | null,
}

const initialState: ISliceState = {
	cards:null,
	currentCard:null,
}

export const cardSlice = createSlice({
	name: 'card',
	initialState,
	reducers: {
		setCurrentCard(state, action: PayloadAction<TBoardCell>){
		state.currentCard = action.payload
		},

	},
	extraReducers: builder =>
		builder.addMatcher(cardAPI.endpoints?.fetchAllCards.matchFulfilled,(state, {payload: cards}) =>{
			state.cards= cards;
		})
})

export default cardSlice.reducer

export const  { setCurrentCard} =  cardSlice.actions