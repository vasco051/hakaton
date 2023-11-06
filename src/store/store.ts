import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { accountAPI } from 'services/AccountService';


const reducers = combineReducers({
  [accountAPI.reducerPath]: accountAPI.reducer
});

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(accountAPI.middleware)
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch