import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {TQuestion} from 'models/TQuestion';

interface ISliceState {
  idCurrentCard: number | null;
  question: TQuestion | null;
}

const initialState: ISliceState = {
  idCurrentCard: null,
  question: null
};

const questionSlice = createSlice({
  name: 'question',
  initialState,
  reducers: {
    setIdCurrentCard: (state, {payload: id}: PayloadAction<number | null>) => {
      state.idCurrentCard = id;
      state.question = null;
    },
    setQuestion: (state, {payload: question}: PayloadAction<TQuestion>) => {
      state.question = question
    }
  },
});

export default questionSlice.reducer;
export const {setIdCurrentCard, setQuestion} = questionSlice.actions;