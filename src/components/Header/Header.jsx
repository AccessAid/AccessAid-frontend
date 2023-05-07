import React, { useEffect, useState } from 'react';
import {
  Navbar,
  MobileNav,
  IconButton,
  Typography,
} from '@material-tailwind/react';
import { Bars2Icon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

import { ProfileMenu } from './ProfileMenu/ProfileMenu';
import { NavList } from './NavList/NavList';
import { HOME } from '../../config/routes';

import BrandImage from '../../assets/svg/brand_access.svg';

import './Header.css';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  const [headerColor, setHeaderColor] = useState('bg-transparent');

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
