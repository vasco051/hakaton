import {FC} from "react";

import { UserItem } from './UserItem';

import { TUser } from 'models/TUser';

import styles from './styles.module.scss';

export interface UserProps {
  users: TUser[];
}
export const UserList:FC<UserProps> = (users)=>{
  return(
    <div className={styles.wrapper}>
      {users.users.map(user => (
        <UserItem
          user={user}
          key={user.id}
        />
      ))}
    </div>

  )
}