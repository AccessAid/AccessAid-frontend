import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  logout,
  selectRefreshTokenDate,
  selectUserData,
  setIsTokenExpired,
} from '../store/slices/authSlice';
import { isDatePassed } from '../commons/utils/dateUtils';
import { login } from '../store/actions/authActions';

const useRefreshToken = () => {
  const dispatch = useDispatch();
  const refreshTokenDate = useSelector(selectRefreshTokenDate);
  const userData = useSelector(selectUserData);
  const [isRefreshTokenDone, setIsRefreshTokenDone] = useState(true);

  useEffect(() => {
    console.log('refreshTokenDate', refreshTokenDate);
    if (refreshTokenDate && userData) {
      console.log('estoy dentro de: refreshTokenDate');

      const minutes = 35;
      const interval = minutes * 60 * 1000;
      const intervalRefreshToken = setInterval(async () => {
        const isExpired = isDatePassed(refreshTokenDate);
        if (isExpired) {
          console.log('está expirado***');
          try {
            const resultAction = await dispatch(
              login({
                username: userData?.username,
                password: '123456789',
              }),
            );

            if (resultAction?.payload?.token) {
              console.log('HA IDO BIEN EL REFRESH!!');
              setIsRefreshTokenDone(true);
            } else {
              console.log('HA IDO MALLLLLL EL REFRESH!!');
              setIsRefreshTokenDone(false);
            }
          } catch (error) {
            console.log('refresh token error: ', error);
            // dispatch(logout());
            setIsRefreshTokenDone(false);
          }
        }
      }, interval);

      return () => clearInterval(intervalRefreshToken);
    }
  }, [refreshTokenDate, userData, dispatch]);

  return isRefreshTokenDone;
};

export default useRefreshToken;
