import { FC } from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from 'hooks/redux';

import { accountAPI } from 'services/accountService';
import { setUser } from 'store/reducers/account.slice';

import { TRegisterInfo } from 'models/TUser';
import { staticLinks } from 'routes/routingLinks';

import styles from './styles.module.scss';

const Registration: FC = () => {
  const [
    registration, {
      data,
      error,
      isLoading
    }
  ] = accountAPI.useRegistrationMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      login: '',
      password: ''
    } as TRegisterInfo,
    onSubmit: (values, formikHelpers) => {
      registration(values);
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
      <h1>Регистрация</h1>

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

      <button>Регистрация</button>
    </form>
  );
};

export default Registration;