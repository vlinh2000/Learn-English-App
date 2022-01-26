import React from 'react';
import PropTypes from 'prop-types';
import { Link, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import LessionDetailPage from './pages/LessionDetailPage';
import MainPage from './pages/MainPage';
import AddEditPage from './pages/AddEditPage';
import UserInfo from './components/UserInfo';



Lesson.propTypes = {

};

const LessonStyled = styled.div`
    background: linear-gradient(
        to right bottom,
        rgba(255, 255, 255, 0.7),
        rgba(255, 255, 255, 0.3)
    );
    
    width: 90%;
    backdrop-filter: blur(1rem);
    border-radius: 2rem;
    z-index:2;
    padding:2rem;
    min-height:80vh
`;

function Lesson(props) {

    return (
        <LessonStyled>
            <UserInfo />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="update" element={<AddEditPage />} />
                <Route path=":lessonId" element={<LessionDetailPage />} />
                <Route path="*" element={<div>Not found</div>}></Route>
            </Routes>
        </LessonStyled>
    );
}

export default Lesson;