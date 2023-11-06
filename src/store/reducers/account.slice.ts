import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TAccountInfo } from 'models/TUser';
import { accountAPI } from '../../services/accountService';


interface ISliceState {
  user: TAccountInfo | null;
}

const initialState: ISliceState = {
  user: null
};

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    setUser: (state, { payload: user }: PayloadAction<TAccountInfo>) => {
      state.user = user;
    },
    clearUser: state => {
      state.user = null;
      localStorage.removeItem('auth_token')
    }
  },
  extraReducers: builder =>
    builder.addMatcher(accountAPI.endpoints.login.matchFulfilled, (state, { payload: user }) => {
      state.user = user;
    })
});

export default accountSlice.reducer;
export const {
  setUser,
  clearUser
} = accountSlice.actions;