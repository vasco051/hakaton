import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Board } from 'components/Board';
import { UserList } from 'components/UserList';

import { userAPI } from 'services/userService';

import styles from './styles.module.scss';

const Room: FC = () => {
    const { id } = useParams();

    const { data: users = [] } = userAPI.useFetchAllUsersQuery(parseInt(id!));

    useEffect(() => {
    }, []);

    return (
      <section className={styles.room}>
        <UserList users={users}/>
        <Board />
      </section>
    );
  }
;

export default Room;