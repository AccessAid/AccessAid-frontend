import React from 'react';
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
} from '@material-tailwind/react';
import { Bars2Icon } from '@heroicons/react/24/outline';
import { ProfileMenu } from './ProfileMenu/ProfileMenu';
import { NavList } from './NavList/NavList';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setIsNavOpen(false),
    );
  }, []);

  return (
    <Navbar className='mx-auto'>
      <div className='relative mx-auto flex items-center text-blue-gray-900'>
        <Typography
          as='a'
          href='#'
          className='ml-2 mr-4 cursor-pointer py-1.5 font-medium'
        >
          Material Tailwind
        </Typography>
        <div className='absolute left-1/4 top-2/4 hidden -translate-x-2/4 -translate-y-2/4 lg:block'>
          <NavList />
        </div>
        <IconButton
          size='sm'
          color='blue-gray'
          variant='text'
          onClick={toggleIsNavOpen}
          className='ml-auto mr-2 lg:hidden'
        >
          <Bars2Icon className='h-6 w-6' />
        </IconButton>
        <ProfileMenu />
      </div>
      <MobileNav open={isNavOpen} className='overflow-scroll'>
        <NavList />
      </MobileNav>
    </Navbar>
  );
};

export default Header;
