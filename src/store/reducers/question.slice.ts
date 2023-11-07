import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TQuestion } from 'models/TQuestion';
import { questionAPI } from 'services/questionService';


interface ISliceState {
  isFirstLoading: boolean;
  idCurrentCard: number | null;
  question: TQuestion | null;
}

const initialState: ISliceState = {
  isFirstLoading: true,
  idCurrentCard: null,
  question: null
};

const questionSlice = createSlice({
  name: 'question',
  initialState,
  reducers: {
    setIdCurrentCard: (state, { payload: id }: PayloadAction<number | null>) => {
      state.idCurrentCard = id;
      state.question = null;
    },
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.isFirstLoading = payload;
    }
  },
  extraReducers: builder =>
    builder.addMatcher(questionAPI.endpoints.fetchQuestion.matchFulfilled, (state, { payload: question }) => {
      state.question = question;
    })
});

export default questionSlice.reducer;
export const { setIdCurrentCard,setLoading } = questionSlice.actions;