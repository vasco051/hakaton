import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import Rooms from 'pages/Rooms';
import Room from 'pages/Room';

import { Authorization, Registration } from 'pages/Auth';

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
        path="/rooms"
        element={<Rooms/>}
      />
      <Route
        path="/rooms/:id"
        element={<Room/>}
      />
    </Routes>
  );
};

export default AppRouter;