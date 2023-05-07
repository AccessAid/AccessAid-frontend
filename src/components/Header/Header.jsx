import React, { useEffect, useState } from 'react';
import { Navbar, MobileNav, IconButton } from '@material-tailwind/react';
import { Bars2Icon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

import { ProfileMenu } from './ProfileMenu/ProfileMenu';
import { NavList } from './NavList/NavList';
import { HOME } from '../../config/routes';

import './Header.css';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setIsNavOpen(false),
    );
  }, []);

  return (
    <Navbar className='header'>
      <div className='header__container'>
        <Link to={HOME}> AccessAid </Link>

        <div className='header__links'>
          <NavList />
        </div>
        <IconButton
          size='sm'
          color='blue-gray'
          variant='text'
          onClick={toggleIsNavOpen}
          className='button_links'
        >
          <Bars2Icon className='links_icon' />
        </IconButton>
        <ProfileMenu />
      </div>
      <MobileNav open={isNavOpen} className='header__mobile'>
        <NavList />
      </MobileNav>
    </Navbar>
  );
};

export { Header };
