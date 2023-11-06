export type TRoomCreate = {
  count_players: number
  title: string
}

export type TRoomCreateResponse = {
  count_players: number
  count_players_now: number
  id: number
}

export type TRoomResponse = {
  count_players: number
  count_players_now: number
  id: number
  title: string
}