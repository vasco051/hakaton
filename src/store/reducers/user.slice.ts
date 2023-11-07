import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TUser } from 'models/TUser';
import { userAPI } from 'services/userService';


interface ISliceState {
  users: TUser[];
}

const initialState: ISliceState = {
  users: []
};


const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserBalance: (state, {
      payload: {
        balance,
        id
      }
    }: PayloadAction<{ id: number, balance: number }>) => {
      state.users.forEach(user => {
        if (user.id === id) user.balance = balance;
      });
    }
  },
  extraReducers: builder =>
    builder.addMatcher(userAPI.endpoints.fetchAllUsers.matchFulfilled, (state, { payload: users }) => {
      console.log(users);
      state.users = users;
    })
});


export default userSlice.reducer;
export const {setUserBalance} = userSlice.actions;