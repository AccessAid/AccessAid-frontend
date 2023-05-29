import React, { useEffect, useRef, useState } from 'react';

import { Bars2Icon } from '@heroicons/react/24/outline';
import {
  Collapse,
  IconButton,
  Navbar,
  Typography,
} from '@material-tailwind/react';
import { Link, useLocation } from 'react-router-dom';

import { HOME, MAP } from '../../config/routes';
import useAuthCheck from '../../hooks/useAuthCheck';
import { NavList } from './NavList/NavList';
import { ProfileMenu } from './ProfileMenu/ProfileMenu';
import { navListAuthItems, navListItems } from './utils';

import BrandImage from '../../assets/svg/brand_access.svg';

import './Header.css';

const Header = () => {
  const headerRef = useRef(null);
  const location = useLocation();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [headerColor, setHeaderColor] = useState(
    location.pathname === MAP ? 'bg-secondary-dark' : 'bg-transparent',
  );

  const isAuthenticated = useAuthCheck();

  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  useEffect(() => {
    if (location.pathname === MAP) {
      setHeaderColor('bg-secondary-dark');
      return;
    } else {
      setHeaderColor('bg-transparent');
    }

    const handleScroll = () => {
      const scrolled = window.scrollY;

      if (scrolled > 0) {
        setHeaderColor('bg-secondary-dark');
      } else {
        setHeaderColor('bg-transparent');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]);

  useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setIsNavOpen(false),
    );
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setIsNavOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [headerRef]);

  return (
    <Navbar ref={headerRef} className={`header ${headerColor}`}>
      <div className='header__container'>
        <Link to={HOME}>
          <div className='header__brand'>
            <img className='brand__img' src={BrandImage} alt='Brand image' />
            <Typography variant='h3' className='brand__title'>
              AccessAid
            </Typography>
          </div>
        </Link>

        <div className='header__links'>
          <NavList navList={navListItems} />
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
        {isAuthenticated ? (
          <div className='header__avatar'>
            <ProfileMenu />
          </div>
        ) : (
          <div className='header__links header-links-auth'>
            <NavList navList={navListAuthItems} />
          </div>
        )}
      </div>
      <Collapse open={isNavOpen} className='header__mobile'>
        {isAuthenticated ? (
          <NavList navList={navListItems} />
        ) : (
          <NavList navList={[...navListItems, ...navListAuthItems]} />
        )}
      </Collapse>
    </Navbar>
  );
};

export { Header };
