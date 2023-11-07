import { combineReducers, configureStore } from '@reduxjs/toolkit';

import accountReducer from './reducers/account.slice';
import diceReducer from './reducers/diceSlice';
import questionReducer from './reducers/question.slice';
import userReducer from './reducers/user.slice';

import { questionAPI } from 'services/questionService';
import { accountAPI } from 'services/accountService';
import { userAPI } from 'services/userService';
import { cardAPI } from 'services/cardService.ts';
import { roomAPI } from 'services/roomService';


const reducers = combineReducers({
  accountReducer,
  diceReducer,
  questionReducer,
  userReducer,
  [accountAPI.reducerPath]: accountAPI.reducer,
  [userAPI.reducerPath]: userAPI.reducer,
  [cardAPI.reducerPath]: cardAPI.reducer,
  [roomAPI.reducerPath]: roomAPI.reducer,
  [questionAPI.reducerPath]: questionAPI.reducer
});

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      accountAPI.middleware,
      userAPI.middleware,
      cardAPI.middleware,
      roomAPI.middleware,
      questionAPI.middleware
    )
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch