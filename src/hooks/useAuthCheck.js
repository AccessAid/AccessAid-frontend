import { useSelector } from 'react-redux';
import { selectToken, selectUserData } from '../store/slices/authSlice';

const useAuthCheck = () => {
  const userToken = useSelector(selectToken) || '';
  const userData = useSelector(selectUserData) || {};
  return userToken.length > 0 && userData && Object.keys(userData).length > 0;
};

export default useAuthCheck;
