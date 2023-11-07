import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TBoardCell, TBoardCellResponse } from 'models/TBoardCell.ts';
import { cardAPI } from 'services/cardService.ts';


interface ISliceState {
	cards: TBoardCellResponse | null,
	currentCard: TBoardCell | null,
}

const initialState: ISliceState = {
	cards: null,
	currentCard: null
};

export const cardSlice = createSlice({
	name: 'card',
	initialState,
	reducers: {
		setColor: (state, {
			payload: {
				id,
				color
			}
		}: PayloadAction<{ id: number, color: string | null }>) => {
			if (state.cards) {
				state.cards.TOP.forEach(card => {
					if (card.id === id) card.color = color;
				});
				state.cards.RIGHT.forEach(card => {
					if (card.id === id) card.color = color;
				});
				state.cards.BOTTOM.forEach(card => {
					if (card.id === id) card.color = color;
				});
				state.cards.LEFT.forEach(card => {
					if (card.id === id) card.color = color;
				});
				state.cards.CORNER.forEach(card => {
					if (card.id === id) card.color = color;
				});
			}
		}
	},
	extraReducers: builder =>
		builder.addMatcher(cardAPI.endpoints?.fetchAllCards.matchFulfilled, (state, { payload: cards }) => {
			state.cards = cards;
		})
})

export default cardSlice.reducer;

export const {setColor} = cardSlice.actions;