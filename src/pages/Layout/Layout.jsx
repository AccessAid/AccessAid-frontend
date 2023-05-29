import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';

const Layout = () => {
  return (
    <div className='flex min-h-screen flex-col'>
      <Header />

      <div className='flex-grow overflow-x-hidden overflow-y-hidden'>
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
