import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { createApi } from '@reduxjs/toolkit/dist/query/react';

import { TRoomCreate } from 'models/TRoom';


export const roomAPI = createApi({
  reducerPath: 'roomAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api' }),
  endpoints: build => ({
    fetchAllRooms: build.query<any, void>({
      query: () => ({
        url: '/rooms/'
      })
    }),
    createRoom: build.mutation<any, TRoomCreate>({
      query: (data: TRoomCreate) => ({
        url: '/rooms/',
        method: 'post',
        body: data
      })
    }),
    // createRoom: build.mutation<any, TRoomCreate>({
    //   query: (data: TRoomCreate) => ({
    //     url: '/rooms/',
    //     method: 'post',
    //     body: data
    //   })
    // })
  })
});