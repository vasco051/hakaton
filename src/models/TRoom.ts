export type TRoomCreate = {
  count_players: number
  title: string
}
export type TAllRoomResponse = {
  rooms:TRoomResponse[]
  id: number
}

export type TRoomCreateResponse = {
  count_players: number
  count_players_now: number
  id: number
  users: [] | null
}


export type TRoomResponse = {
  room_id_to_current_user: number | null
  rooms: {
    count_players: number
    count_players_now: number
    id: number
    title: string
    in_room: boolean
  }[]
}