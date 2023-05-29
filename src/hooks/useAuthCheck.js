import { useSelector } from 'react-redux';
import {
  selectIsTokenExpired,
  selectToken,
  selectUserData,
} from '../store/slices/authSlice';

const useAuthCheck = () => {
  const userToken = useSelector(selectToken) || '';
  const isTokenExpired = useSelector(selectIsTokenExpired);

  return userToken.length > 0 && !isTokenExpired;
};

export default useAuthCheck;
