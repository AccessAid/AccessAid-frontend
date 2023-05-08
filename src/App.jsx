import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useAuthCheck from './hooks/useAuthCheck';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  CONTACT,
  HOME,
  LOGIN,
  MAP,
  NOT_FOUND,
  PROFILE,
  SIGNUP,
} from './config/routes';
import {
  Contact,
  Home,
  Layout,
  Login,
  Map,
  NotFound,
  Profile,
  SignUp,
} from './pages';
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute';
import { persistToken, persistUser } from './store/slices/authSlice';

function App() {
  const dispatch = useDispatch();
  const isAuthenticated = useAuthCheck();

  useEffect(() => {
    if (!isAuthenticated) {
      // Restaurar el token de autenticación almacenado
      dispatch(persistToken());

      // Restaurar los datos del usuario almacenados
      dispatch(persistUser());
    }
  }, [dispatch, isAuthenticated]);

  const excludedRoutes = [LOGIN, SIGNUP];

  return (
    <BrowserRouter>
      <Routes>
        <Route path={HOME} element={<Layout />}>
          <Route index element={<Home />} />
          <Route element={<ProtectedRoute excludedRoutes={excludedRoutes} />}>
            <Route path={PROFILE} element={<Profile />} />
            <Route path={SIGNUP} element={<SignUp />} />
            <Route path={LOGIN} element={<Login />} />
            <Route path={MAP} element={<Map />} />
          </Route>

          <Route path={CONTACT} element={<Contact />} />
          <Route path={NOT_FOUND} element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
