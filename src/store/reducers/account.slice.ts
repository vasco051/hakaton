import { createSlice } from '@reduxjs/toolkit';

import { TUser } from 'models/TUser';

interface IAccountState {
  account: TUser | null;
}

const initialState: IAccountState = {
  account: null
};

export const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {}
});