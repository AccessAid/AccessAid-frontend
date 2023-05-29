import {
  Cog6ToothIcon,
  InboxArrowDownIcon,
  PowerIcon,
} from '@heroicons/react/24/outline';
import { LOGIN, MAP, PROFILE } from '../../../config/routes';

const profileMenuItems = [
  {
    label: 'Edit Profile',
    icon: Cog6ToothIcon,
    link: PROFILE,
  },
  {
    label: 'Map',
    icon: InboxArrowDownIcon,
    link: MAP,
  },
  {
    label: 'Sign Out',
    icon: PowerIcon,
    link: LOGIN,
  },
];

export { profileMenuItems };
