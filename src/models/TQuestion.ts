export type TQuestion = {
  id: number
  title: string
  answers: {
    id: number
    title: string
    is_correct: boolean
  }[]
}

export type TCheckAnswerRequest = {
  idRoom: number,  // todo bad name
  answer_id: number,
  card_id: number
}

export type TCheckAnswerResponse = {
  send: boolean
  card_color: string | null
  current_balance: {
    id: number | null,
    balance: number | null
  }
  owner_balance: {
    id: number | null,
    balance: number | null
  }
  walk_user_id: number
}