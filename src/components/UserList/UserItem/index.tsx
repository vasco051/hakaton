import styles from './styles.module.scss'
import {FC} from "react";
import {clsx} from "clsx";
import IcDead from 'assets/images/user/dead.svg'
export interface UserItemProps {
  username: string,
  id:number,
  balance: number,
  color:string,
  is_sleep:boolean,
  is_active:boolean,
  is_walk:boolean
}
export const UserItem:FC<UserItemProps> = (user)=>{

  const userStyles = clsx(styles.wrapper, {
    [styles.disabled]: !user.is_active,
    [styles.walking]: user.is_walk
  });
  const color = {

    backgroundColor: user.color
  }
  return(
    <div className={userStyles}>
        <div style={color} className={styles.avatar}>
          {user.username[0].toUpperCase()}
        </div>

          <p className={styles.name}>{user.username}</p>
          {user.is_active ? <p className={styles.price}>{user.balance}  ₽</p> : <img src={IcDead} alt=""/>}

    </div>
  )
}