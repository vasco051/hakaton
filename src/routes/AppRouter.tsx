import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Board } from '../components/Board';
import Authorization from '../pages/Authorizaion/Authorization';
import Registration from '../pages/Registation/Registration';


const AppRouter: FC = () => {
  return (
    <Routes>
      <Route
        path="/login"
        element={<Authorization/>}
      />
      <Route
        path="/reg"
        element={<Registration/>}
      />
      <Route
        path="/game"
        element={<Board/>}
      />
    </Routes>
  );
};

export default AppRouter;