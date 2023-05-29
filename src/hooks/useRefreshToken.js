import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  selectRefreshToken,
  selectTokenExpiredDate,
  selectUserData,
} from '../store/slices/authSlice';
import { isDatePassed } from '../commons/utils/dateUtils';
import { refreshTokenAction } from '../store/actions/authActions';

const useRefreshToken = () => {
  const dispatch = useDispatch();
  const tokenExpiredDate = useSelector(selectTokenExpiredDate);
  const refreshToken = useSelector(selectRefreshToken);
  const userData = useSelector(selectUserData);
  const [isRefreshTokenDone, setIsRefreshTokenDone] = useState(true);

  useEffect(() => {
    if (tokenExpiredDate && userData) {
      console.log('estoy dentro de: tokenExpiredDate');

      const minutes = 7;
      const interval = minutes * 60 * 1000;
      const intervalRefreshToken = setInterval(async () => {
        const isExpired = isDatePassed(tokenExpiredDate);
        if (isExpired) {
          try {
            const resultAction = await dispatch(
              refreshTokenAction({
                refreshToken,
              }),
            );

            if (resultAction?.payload?.token) {
              setIsRefreshTokenDone(true);
              console.log('fue bien');
            } else {
              setIsRefreshTokenDone(false);
              console.log('fue mal');
              location.reload();
            }
          } catch (error) {
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
