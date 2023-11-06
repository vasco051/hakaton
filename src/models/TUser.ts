export type TRegisterInfo = {
  login: string;
  password: string;
}

export type TRegisterResponse = {
  key: string
}

export type TUser = {
  username: string,
  id: number,
  balance: number,
  color: string,
  is_sleep: boolean,
  is_active: boolean,
  is_walk: boolean
}