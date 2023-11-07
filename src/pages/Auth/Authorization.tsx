import { FC } from 'react';
import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';

import { useAppDispatch } from 'hooks/redux';
import Button from 'components/Buttons';
import TextField from 'components/TextFields';

import { accountAPI } from 'services/accountService';
import { TRegisterInfo } from 'models/TUser';
import { staticLinks } from 'routes/routingLinks';
import { setUser } from 'store/reducers/account.slice';

import styles from './styles.module.scss';


const Authorization: FC = () => {
  const [
    authorization, {
      data,
      error,
      isLoading
    }
  ] = accountAPI.useAuthorizationMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      login: '',
      password: ''
    } as TRegisterInfo,
    onSubmit: (values, formikHelpers) => {
      authorization(values);
      formikHelpers.resetForm();
    }
  });

  if (!isLoading && data) {
    localStorage.setItem('auth_token', data.key);
    dispatch(setUser(data.user));
    navigate(staticLinks.rooms);
  }

  return (
    <form onSubmit={formik.handleSubmit} className={styles.form}>
      <h1>Авторизация</h1>

      <TextField
        label="Введите логин"
        name="login"
        value={formik.values.login}
        onChange={formik.handleChange}
      />

      <TextField
        label="Введите пароль"
        name="password"
        value={formik.values.password}
        onChange={formik.handleChange}
      />

      {error && <span>Произошла ошибка</span>}

      <Button type="submit">Войти</Button>

      <Link className={styles.redirect} to={staticLinks.registration}>Регистрация</Link>
    </form>
  );
};

export default Authorization;