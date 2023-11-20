import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {userAPI} from 'services/userService';

import {TUser} from 'models/TUser';

interface ISliceState {
	users: TUser[];
	walkingUser: TUser | null
}

const initialState: ISliceState = {
	users: [],
	walkingUser: null
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
	extraReducers: builder => {
		builder.addMatcher(userAPI.endpoints.fetchAllUsers.matchFulfilled, (state, {payload: users}) => {
			state.users = users;
			state.walkingUser = users.find(user => user.is_walk) || null
		})
		builder.addMatcher(userAPI.endpoints.fetchStepUser.matchFulfilled, (state, {payload: {user}}) => {
			state.users.forEach(currentUser => {
				if (currentUser.id === user.id) {
					currentUser.position = user.position;
				}
			});
		});
	}
});

export default userSlice.reducer;
export const {setUserBalance} = userSlice.actions;