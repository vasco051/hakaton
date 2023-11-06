import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { accountAPI } from 'services/accountService';
import { userAPI } from 'services/userService';


const reducers = combineReducers({
  [accountAPI.reducerPath]: accountAPI.reducer,
  [userAPI.reducerPath]: userAPI.reducer
});

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(accountAPI.middleware, userAPI.middleware)
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch