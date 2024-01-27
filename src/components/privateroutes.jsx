
import { Outlet, Navigate } from 'react-router-dom';

export const PrivateRoutes = () => {
  const isAuthenticated = localStorage.getItem('token') !== null;

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};
