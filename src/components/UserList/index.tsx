import styles from './styles.module.scss'
import {FC} from "react";

import {UserItem, UserItemProps} from "./UserItem";

export interface UserProps {
  users:UserItemProps[]
}
export const UserList:FC<UserProps> = (users)=>{


  return(
  <div className={styles.wrapper}>
    {users.users.map(user=><UserItem balance={user.balance} color={user.color} id={user.id} is_active={user.is_active} is_sleep={user.is_sleep} is_walk={user.is_walk} username={user.username}/>)}
  </div>

  )
}