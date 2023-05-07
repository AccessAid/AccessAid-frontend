import {
  UserCircleIcon,
  PhoneArrowUpRightIcon,
  ArrowRightOnRectangleIcon,
  HomeIcon,
} from '@heroicons/react/24/outline';
import { CONTACT, HOME, LOGIN, SIGNUP } from '../../config/routes';

// nav list component
const navListItems = [
  {
    label: 'Home',
    link: HOME,
    icon: HomeIcon,
  },
  {
    label: 'Contact',
    link: CONTACT,
    icon: PhoneArrowUpRightIcon,
  },
];

const navListAuthItems = [
  {
    label: 'Sign Up',
    link: SIGNUP,
    icon: ArrowRightOnRectangleIcon,
  },
  {
    label: 'Login',
    link: LOGIN,
    icon: UserCircleIcon,
  },
];

export { navListItems, navListAuthItems };
