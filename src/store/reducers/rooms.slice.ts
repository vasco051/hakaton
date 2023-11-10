
import {createSlice} from "@reduxjs/toolkit";
import {roomAPI} from "../../services/roomService.ts";
import {TRoomCreateResponse} from "../../models/TRoom.ts";


interface ISliceState {
	roomInfo: TRoomCreateResponse | null,
}

const initialState: ISliceState = {
	roomInfo:null,
}

export const roomSlice = createSlice({
	name: 'card',
	initialState,
	reducers: {
		// checkUsers: (state)=>{
		//
		//
		// }

	},

	extraReducers: builder =>
		builder.addMatcher(roomAPI.endpoints?.joinToRoom.matchFulfilled,(state, {payload: roomInfo}) =>{
			state.roomInfo= roomInfo;
		})
})

export default roomSlice.reducer

export const  { } =  roomSlice.actions