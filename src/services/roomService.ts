import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { createApi } from '@reduxjs/toolkit/dist/query/react';

import {TRoomCreate, TRoomCreateResponse, TRoomResponse} from 'models/TRoom';


export const roomAPI = createApi({
  reducerPath: 'roomAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api' }),
  endpoints: build => ({
    fetchAllRooms: build.query<TRoomResponse, string>({
      query: () => ({
        url: '/rooms/',
        headers: { Authorization: `Token ${localStorage.getItem('auth_token')}` }
      })
    }),
    createRoom: build.mutation<TRoomCreateResponse, TRoomCreate>({
      query: (data: TRoomCreate) => ({
        url: '/rooms/',
        method: 'post',
        body: data,
        headers: { Authorization: `Token ${localStorage.getItem('auth_token')}` }
      })
    }),
    joinToRoom: build.mutation<TRoomCreateResponse, number>({
      query: (id: number) => ({
        url: `/rooms/${id}/users/`,
        method: 'post',
        headers: { Authorization: `Token ${localStorage.getItem('auth_token')}` }
      })
    }),
  })
});