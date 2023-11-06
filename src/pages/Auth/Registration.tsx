import { FC, useEffect } from 'react';
import { useFormik } from 'formik';

import { accountAPI } from 'services/AccountService';

import { TRegisterInfo } from 'models/TUser';

import styles from './styles.module.scss';

const Registration: FC = () => {
  const [ registration, { data: token } ] = accountAPI.useRegistrationMutation();

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

  useEffect(() => {
    if (token) localStorage.setItem('auth_token', token);
  }, [ token ]);

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

      <button>Регистрация</button>
    </form>
  );
};

export default Registration;