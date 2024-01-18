import React, { useContext,useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { authRoutes, publicRoutes } from '../routes';
import { FORM_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';
import Home from '../pages/Home';
import { Context } from '../index';
import { observer } from 'mobx-react-lite';
import UserList from '../pages/UserList';

const AppRouter = observer(() => {
  const { user } = useContext(Context);
  // const submittedUsers = []; 
  const [submittedUsers, setSubmittedUsers] = useState([]);


  return (
    <Routes>
      {user.isAuth &&
        authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} exact />
        ))}
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} exact/>
      ))}
      {!user.isAuth && (
        <Route path={REGISTRATION_ROUTE} element={<Navigate to={REGISTRATION_ROUTE} />} />
      )}
      <Route path={FORM_ROUTE} element={<Navigate to={FORM_ROUTE} />} />
      <Route path="/userList" element={<UserList users={submittedUsers} />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
});

export default AppRouter;
