import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import AddLesson from './AddLesson';
import LessonModal from './LessonModal';
import { LessonApi } from 'api/LessonApi';
import { Carousel, message } from 'antd';
import { fetchLessons } from '../lessionSlice';
import { useDispatch } from 'react-redux';

ListItem.propTypes = {

};


function ListItem(props) {
    const { lessons } = props;
    return (
        <div>
            {
                lessons.map((lesson, index) => <Item key={index} lesson={lesson} />)
            }
        </div>
    );
}

export default ListItem;