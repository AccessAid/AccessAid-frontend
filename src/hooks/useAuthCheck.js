import { useSelector } from 'react-redux';
import { selectUserStatus } from '../store/slices/authSlice';

const useAuthCheck = () => {
  const userStatus = useSelector(selectUserStatus);
  return userStatus === 'succeeded';
};

export default useAuthCheck;
