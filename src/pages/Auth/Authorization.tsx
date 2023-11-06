import { FC } from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from 'hooks/redux';

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

      <div className={styles.block}>
        <span>Введите логин</span>

        <input
          name="login"
          type="text"
          value={formik.values.login}
          onChange={formik.handleChange}
        />
      </div>

      <div className={styles.block}>
        <span>Введите пароль</span>

        <input
          name="password"
          type="text"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
      </div>

      {error && <span>Произошла ошибка</span>}

      <button type="submit">Войти</button>
    </form>
  );
};

export default Authorization;