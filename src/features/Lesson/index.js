import React from 'react';
import PropTypes from 'prop-types';
import { Link, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { ButtonStyled, Title } from 'assets/styles/GobalStyled';

import LessionDetailPage from './pages/LessionDetailPage';
import MainPage from './pages/MainPage';
import AddEditPage from './pages/AddEditPage';
import { MdAssignmentReturn } from 'react-icons/md';
import { Button } from 'antd';
import { fetchLessons } from './LessionSlice';
import { useDispatch } from 'react-redux';


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
            {/* <Title> Luyện nghe tiếng anh</Title> */}
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