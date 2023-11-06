import { combineReducers, configureStore } from '@reduxjs/toolkit';

import accountReducer from './reducers/account.slice';
import diceReducer from './DiceSlice.ts';

import { accountAPI } from 'services/accountService';
import { userAPI } from 'services/userService';
import { cardAPI } from 'services/cardService.ts';


const reducers = combineReducers({
  accountReducer,
  diceReducer,
  [accountAPI.reducerPath]: accountAPI.reducer,
  [userAPI.reducerPath]: userAPI.reducer,
  [cardAPI.reducerPath]: cardAPI.reducer
});

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      accountAPI.middleware,
      userAPI.middleware,
      cardAPI.middleware
    )
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch