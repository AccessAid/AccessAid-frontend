import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CONTACT, HOME, NOT_FOUND, SIGNUP } from './config/routes';
import { Contact, Home, Layout, NotFound, SignUp } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={HOME} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={SIGNUP} element={<SignUp />} />
          <Route path={CONTACT} element={<Contact />} />
          <Route path={NOT_FOUND} element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
