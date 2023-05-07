import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  CONTACT,
  HOME,
  LOGIN,
  NOT_FOUND,
  PROFILE,
  SIGNUP,
} from './config/routes';
import {
  Contact,
  Home,
  Layout,
  Login,
  NotFound,
  Profile,
  SignUp,
} from './pages';
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute';

function App() {
  const excludedRoutes = [LOGIN, SIGNUP];
  return (
    <BrowserRouter>
      <Routes>
        <Route path={HOME} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={LOGIN} element={<Login />} />
          <Route path={SIGNUP} element={<SignUp />} />
          <Route element={<ProtectedRoute excludedRoutes={excludedRoutes} />}>
            <Route path={PROFILE} element={<Profile />} />
          </Route>
          <Route path={CONTACT} element={<Contact />} />
          <Route path={NOT_FOUND} element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
