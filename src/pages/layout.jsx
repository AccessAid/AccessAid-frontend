import React from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import { RegistrationForm } from '../components/RegistrationForm/RegistrationForm';
import { NotificationsCard } from '../components/NotificationCard/NotificationCard';
import { Sponsors } from '../components/Sponsors/Sponsors';
// import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Header />
      {/* <Outlet /> */}
      <RegistrationForm />
      <Sponsors />
      <NotificationsCard />
      <Footer />
    </>
  );
};

export default Layout;
