import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import Rooms from 'pages/Rooms';

import { Authorization, Registration } from 'pages/Auth';
import { Board } from 'components/Board';

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
      <Route
        path="/rooms"
        element={<Rooms/>}
      />
    </Routes>
  );
};

export default AppRouter;