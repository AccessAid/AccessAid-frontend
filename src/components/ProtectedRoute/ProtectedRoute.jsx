import React from 'react';

import PropTypes from 'prop-types';
import { Navigate, useLocation, Outlet } from 'react-router-dom';

import { LOGIN, HOME } from '../../config/routes';
import useAuthCheck from '../../hooks/useAuthCheck';

const ProtectedRoute = ({ children, excludedRoutes, redirectTo }) => {
  const isAuthenticated = useAuthCheck();
  const location = useLocation();

  const isExcludedRoute = excludedRoutes.includes(location.pathname);

  if (isAuthenticated && isExcludedRoute) {
    return <Navigate to={HOME} replace />;
  }

  if (!isAuthenticated && isExcludedRoute) {
    return children ? children : <Outlet />;
  }

  if (!isAuthenticated) {
    return <Navigate to={redirectTo} replace />;
  }

  return children ? children : <Outlet />;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node,
  redirectTo: PropTypes.string.isRequired,
  excludedRoutes: PropTypes.arrayOf(PropTypes.string),
};

ProtectedRoute.defaultProps = {
  redirectTo: LOGIN,
  excludedRoutes: [],
};

export { ProtectedRoute };
