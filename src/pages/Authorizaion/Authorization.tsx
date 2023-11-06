import { FC } from 'react';
import { useFormik } from 'formik';

import { accountAPI } from 'services/AccountService';

import { TRegisterInfo } from 'models/TUser';


const Authorization: FC = () => {
  const [ authorization ] = accountAPI.useAuthorizationMutation();

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

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        name="login"
        type="text"
        value={formik.values.login}
        onChange={formik.handleChange}
      />
      <input
        name="password"
        type="text"
        value={formik.values.password}
        onChange={formik.handleChange}
      />
      <button>Войти</button>
    </form>
  );
};

export default Authorization;