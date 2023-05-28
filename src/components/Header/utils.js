import { store } from '../../store/index';
import { cleanApiError } from '../../store/slices/authSlice';

import {
  UserCircleIcon,
  PhoneArrowUpRightIcon,
  ArrowRightOnRectangleIcon,
  HomeIcon,
} from '@heroicons/react/24/outline';
import { CONTACT, HOME, LOGIN, SIGNUP } from '../../config/routes';

const dispatchAction = (action) => {
  store.dispatch(action);
};

const navListItems = [
  {
    label: 'Home',
    link: HOME,
    icon: HomeIcon,
    onClick: () => {},
  },
  {
    label: 'Contact',
    link: CONTACT,
    icon: PhoneArrowUpRightIcon,
    onClick: () => {},
  },
];

const navListAuthItems = [
  {
    label: 'Sign Up',
    link: SIGNUP,
    icon: ArrowRightOnRectangleIcon,
    onClick: () => {
      dispatchAction(cleanApiError());
    },
  },
  {
    label: 'Login',
    link: LOGIN,
    icon: UserCircleIcon,
    onClick: () => {
      dispatchAction(cleanApiError());
    },
  },
];

export { navListItems, navListAuthItems };
