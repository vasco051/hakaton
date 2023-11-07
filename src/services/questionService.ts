import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { createApi } from '@reduxjs/toolkit/dist/query/react';

import { TCheckAnswerRequest, TCheckAnswerResponse, TQuestion } from 'models/TQuestion';

export const questionAPI = createApi({
  reducerPath: 'questionAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api' }),
  endpoints: build => ({
    fetchQuestion: build.query<TQuestion, void>({
      query: () => ({
        url: `/cards/action/`,
        headers: { Authorization: `Token ${localStorage.getItem('auth_token')}` }
      })
    }),
    fetchCheckAnswer: build.mutation<TCheckAnswerResponse, TCheckAnswerRequest>({
      query: ({
        idRoom,
        ...body
      }: TCheckAnswerRequest) => ({
        url: `/rooms/${idRoom}/answer/check/`,
        headers: { Authorization: `Token ${localStorage.getItem('auth_token')}` },
        method: 'post',
        body
      })
    })
  })
});