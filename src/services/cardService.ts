import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { createApi } from '@reduxjs/toolkit/dist/query/react';

import {TBoardCellResponse} from "models/TBoardCell.ts";

export const cardAPI = createApi({
	reducerPath: 'cardAPI',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://127.0.0.1:8000/api',
		headers: { Authorization: `Token ${localStorage.getItem('auth_token')}` }
	}),
	endpoints: build => ({
		fetchAllCards: build.query<TBoardCellResponse, number>({
			query: (id: number) => ({
				url: `/rooms/${id}/cards/`
				// headers: {
				// 	Authorization: localStorage.getItem('auth_token')
				// }
			})
		})
	})
});