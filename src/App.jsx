import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import useAuthCheck from './hooks/useAuthCheck';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.min.css';

import {
  CONTACT,
  HOME,
  LOGIN,
  MAP,
  NOT_FOUND,
  PLACE_DETAIL,
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
import {
  persistToken,
  persistUser,
  selectAuthError,
  selectIsTokenExpired,
} from './store/slices/authSlice';
import useRefreshToken from './hooks/useRefreshToken';
import PlaceDetail from './pages/PlaceDetail/PlaceDetail';

function App() {
  const dispatch = useDispatch();
  const isAuthenticated = useAuthCheck();
  const isRefreshTokenDone = useRefreshToken();
  const isTokenExpired = useSelector(selectIsTokenExpired);
  const authErrorApi = useSelector(selectAuthError);

  useEffect(() => {
    if (!isAuthenticated) {
      dispatch(persistToken());

      dispatch(persistUser());
    }
  }, []);

  useEffect(() => {
    if (!isRefreshTokenDone && isTokenExpired) {
      if (authErrorApi && authErrorApi?.includes('session')) {
        toast.error(authErrorApi, {
          autoClose: 3000,
        });
      } else {
        toast.error("We're suffering problemas right now, come back later", {
          autoClose: 2500,
        });
      }
    }
  }, [isRefreshTokenDone, isTokenExpired]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={HOME} element={<Layout />}>
          <Route index element={<Home />} />

          {isAuthenticated && (
            <>
              <Route path={PROFILE} element={<Profile />} />
              <Route path={MAP} element={<Map />} />
              <Route path={PLACE_DETAIL} element={<PlaceDetail />} />
            </>
          )}

          {!isAuthenticated && (
            <>
              <Route path={SIGNUP} element={<SignUp />} />
              <Route path={LOGIN} element={<Login />} />
            </>
          )}
          <Route path={CONTACT} element={<Contact />} />
          <Route path={NOT_FOUND} element={<NotFound />} />
        </Route>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
