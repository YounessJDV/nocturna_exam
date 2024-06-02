// PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { isLoggedIn } from './Auth';

const PrivateRoute = ({ children }) => {
    return isLoggedIn() ? children : <Navigate to="/login" />;
};

export default PrivateRoute;