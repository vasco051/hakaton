import {FC} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {SubmitHandler, useForm} from "react-hook-form";

import {useAppDispatch} from 'hooks/redux';
import {PageWrapper} from "components/Layout/PageWrapper";
import {TextField} from "components/UI-kit/TextFields";
import {Button} from "components/UI-kit/Buttons";

import {accountAPI} from 'services/accountService';
import {setUser} from 'store/reducers/account.slice';

import {staticLinks} from 'routes/routingLinks';

import {TRegisterInfo} from "models/TUser.ts";

import styles from './styles.module.scss';

const Authorization: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [makeAuthorization, {isLoading,}] = accountAPI.useAuthorizationMutation();

  const {
    handleSubmit,
    register,
    formState: {
      errors
    }
  } = useForm<TRegisterInfo>({
    defaultValues: {
      login: '',
      password: ''
    }
  })

  const onSubmitForm: SubmitHandler<TRegisterInfo> = async data => {
    const response = await makeAuthorization(data);

    if ('data' in response) {
      const {data} = response

      localStorage.setItem('auth_token', data.key);
      dispatch(setUser(data.user));
      navigate(staticLinks.rooms);
    }
  }
  return (
    <PageWrapper className={styles.main}>
      <div className={styles.wrapper}>
        <form onSubmit={handleSubmit(onSubmitForm)} className={styles.form}>
          <h1>Авторизация</h1>

          <TextField
            id='login'
            label="Введите логин"
            withError={!!errors.login}
            {...register('login', {required: true})}
          />

          <TextField
            id='password'
            label="Введите пароль"
            type='password'
            withError={!!errors.password}
            {...register('password', {required: true})}
          />

          <Button type="submit" disabled={isLoading}>Войти</Button>

          <Link className={styles.redirect} to={staticLinks.registration}>Регистрация</Link>
        </form>
      </div>
    </PageWrapper>
  );
};

export default Authorization;