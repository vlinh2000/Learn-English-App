import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoutes() {
    const { loggedIn } = useSelector(state => state.auth);

    return loggedIn ? <Outlet /> : <Navigate to="/auth/login" />
}

export default ProtectedRoutes;