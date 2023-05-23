import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  logout,
  selectRefreshToken,
  selectTokenExpiredDate,
  selectUserData,
  setIsTokenExpired,
} from '../store/slices/authSlice';
import { isDatePassed } from '../commons/utils/dateUtils';
import { login, refreshTokenAction } from '../store/actions/authActions';

const useRefreshToken = () => {
  const dispatch = useDispatch();
  const tokenExpiredDate = useSelector(selectTokenExpiredDate);
  const refreshToken = useSelector(selectRefreshToken);
  const userData = useSelector(selectUserData);
  const [isRefreshTokenDone, setIsRefreshTokenDone] = useState(true);

  useEffect(() => {
    console.log('tokenExpiredDate', tokenExpiredDate);
    if (tokenExpiredDate && userData) {
      console.log('estoy dentro de: tokenExpiredDate');

      const minutes = 35;
      const interval = minutes * 60 * 1000;
      const intervalRefreshToken = setInterval(async () => {
        const isExpired = isDatePassed(tokenExpiredDate);
        if (isExpired) {
          console.log('está expirado***');
          try {
            const resultAction = await dispatch(
              refreshTokenAction({
                refreshToken,
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
            setIsRefreshTokenDone(false);
          }
        }
      }, interval);

      return () => clearInterval(intervalRefreshToken);
    }
  }, [tokenExpiredDate, userData, dispatch]);

  return isRefreshTokenDone;
};

export default useRefreshToken;
