import { isDatePassed } from '../../commons/utils/dateUtils';
import { login } from '../actions/authActions';
import { setIsTokenExpired } from '../slices/authSlice';

const excludedActions = ['auth/login', 'auth/signup'];

export const refreshJwt = ({ dispatch, getState }) => {
  return (next) => async (action) => {
    // Cambia a una función async
    if (typeof action === 'object') {
      const isExcludedAction = excludedActions.some((excludedAction) => {
        if (action?.type.includes(excludedAction)) {
          return true;
        }
        return false;
      });

      console.log('isExcludedAction****************', isExcludedAction);

      if (
        !isExcludedAction &&
        action?.type.includes('pending') &&
        getState().auth &&
        getState().auth.token
      ) {
        const isExpired = isDatePassed(getState().auth.refreshTokenDate);

        if (isExpired && getState().auth.user) {
          console.log('SE REFRESCARÁ EL TOKEN');
          dispatch(setIsTokenExpired(isExpired));
          try {
            const resultAction = await dispatch(
              login({
                username: getState().auth.user.username,
                password: '123456789',
              }),
            );
            console.log('HA IDO BIEN EL REFRESH!!');
            dispatch(setIsTokenExpired(false));
            return next(action); // Ejecuta next(action) solo si unwrap se resuelve correctamente
          } catch (error) {
            console.log('Error al refrescar el token:', error);
          }
        }
      }
    }
    return next(action);
  };
};
