import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { createApi } from '@reduxjs/toolkit/dist/query/react';

import { TUser } from 'models/TUser';


export const userAPI = createApi({
  reducerPath: 'userAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api' }),
  endpoints: build => ({
    fetchAllUsers: build.query<TUser[], number>({
      query: (id: number) => ({
        url: `/rooms/${id}/users/`
      })
    })
  })
});