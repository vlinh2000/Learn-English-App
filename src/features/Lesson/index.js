import React from 'react';
import PropTypes from 'prop-types';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { Title } from 'assets/images/styles/GobalStyled';

import LessionDetailPage from './components/LessionDetailPage';
import MainPage from './pages/MainPage';
import AddEditPage from './pages/AddEditPage';
import AddLesson from './components/AddLesson';


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
                <Route path=":lessonId" element={<LessionDetailPage />} />
                <Route path="*" element={<div>Not found</div>}></Route>
            </Routes>
        </div>
    );
}

export default Lession;