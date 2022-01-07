import React from 'react';
import PropTypes from 'prop-types';
import { Outlet, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import AddEditPage from './pages/AddEditPage';
import styled from 'styled-components';
import SideBar from './components/SideBar';
import { Col, Row } from 'antd';
import { Title } from 'assets/images/styles/GobalStyled';
import LessionDetail from './components/LessionDetail';


Lession.propTypes = {

};

const LessonStyled = styled.div``;

function Lession(props) {
    return (
        <div>
            <Title>Luyện nghe tiếng anh</Title>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="update" element={<AddEditPage />} />
                <Route path=":lessonId" element={<LessionDetail />} />
                <Route path="*" element={<div>Not found</div>}></Route>
            </Routes>
        </div>
    );
}

export default Lession;