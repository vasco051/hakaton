import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

import { TRegisterInfo, TRegisterResponse } from 'models/TUser';

export const accountAPI = createApi({
  reducerPath: 'accountAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api' }),
  endpoints: build => ({
    registration: build.mutation<TRegisterResponse, TRegisterInfo>({
      query: (data: TRegisterInfo) => ({
        url: '/users/register/',
        method: 'post',
        body: data
      })
    }),
    authorization: build.mutation<TRegisterResponse, TRegisterInfo>({
      query: (data: TRegisterInfo) => ({
        url: '/users/login/',
        method: 'post',
        body: data
      })
    })
  })
});