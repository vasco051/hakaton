export type TRoomCreate = {
  count_players: number
  title: string
}

export type TRoomCreateResponse = {
  count_players: number
  count_players_now: number
  id: number
  users: [] | null
}

export type TAllRoomsResponse = {
  room_id_to_current_user: number | null
  rooms: TRoom[]
}

export type TRoom = {
  count_players: number
  count_players_now: number
  id: number
  title: string
  in_room: boolean
}