import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';

const Layout = () => {
  return (
    <div className='flex min-h-screen flex-col'>
      <Header />

      <div className='flex-grow overflow-x-hidden'>
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
