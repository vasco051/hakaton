import { FC } from 'react';
import { useFormik } from 'formik';

import { accountAPI } from 'services/AccountService';

import { TRegisterInfo } from 'models/TUser';


const Registration: FC = () => {
  const [ registration ] = accountAPI.useRegistrationMutation();

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

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        name='login'
        type="text"
        value={formik.values.login}
        onChange={formik.handleChange}
      />
      <input
        name='password'
        type="text"
        value={formik.values.password}
        onChange={formik.handleChange}
      />
      <button>Регистрация</button>
    </form>
  );
};

export default Registration;