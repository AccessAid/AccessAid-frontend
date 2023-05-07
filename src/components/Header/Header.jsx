import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Navbar,
  MobileNav,
  IconButton,
  Typography,
} from '@material-tailwind/react';
import { Bars2Icon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

import useAuthCheck from '../../hooks/useAuthCheck';
import { ProfileMenu } from './ProfileMenu/ProfileMenu';
import { NavList } from './NavList/NavList';
import { HOME } from '../../config/routes';
import { navListAuthItems, navListItems } from './utils';

import BrandImage from '../../assets/svg/brand_access.svg';

import './Header.css';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [headerColor, setHeaderColor] = useState('bg-transparent');

  const isAuthenticated = useAuthCheck();

  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  useEffect(() => {
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
  }, []);

  useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setIsNavOpen(false),
    );
  }, []);

  return (
    <Navbar className={`header ${headerColor}`}>
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
          <div className='header__links header-links-auth'>
            <ProfileMenu />
          </div>
        ) : (
          <div className='header__links header-links-auth'>
            <NavList navList={navListAuthItems} />
          </div>
        )}
      </div>
      <MobileNav open={isNavOpen} className='header__mobile'>
        {isAuthenticated ? (
          <NavList navList={navListItems} />
        ) : (
          <NavList navList={[...navListItems, ...navListAuthItems]} />
        )}
      </MobileNav>
    </Navbar>
  );
};

export { Header };
