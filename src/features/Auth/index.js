import React from 'react';
import PropTypes from 'prop-types';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';


Auth.propTypes = {

};

function Auth(props) {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<div>Not found</div>}></Route>
        </Routes>
    );
}

export default Auth;