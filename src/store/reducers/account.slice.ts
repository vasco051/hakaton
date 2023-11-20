import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {accountAPI} from 'services/accountService';

import {TAccountInfo} from 'models/TUser';

interface ISliceState {
  account: TAccountInfo | null;
}

const initialState: ISliceState = {
  account: null
};

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    setUser: (state, {payload: account}: PayloadAction<TAccountInfo>) => {
      state.account = account;
    },
    logout: state => {
      state.account = null;
      localStorage.removeItem('auth_token')
    }
  },
  extraReducers: builder =>
    builder.addMatcher(accountAPI.endpoints.login.matchFulfilled, (state, {payload: account}) => {
      state.account = account;
    })
});

export default accountSlice.reducer;
export const {
  setUser,
  logout
} = accountSlice.actions;