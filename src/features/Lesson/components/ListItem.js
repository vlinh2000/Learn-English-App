import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import AddLesson from './AddLesson';
import LessonModal from './LessonModal';
import { LessonApi } from 'api/LessonApi';
import { Carousel, message } from 'antd';
import { fetchLessons } from '../LessionSlice';
import { useDispatch } from 'react-redux';

ListItem.propTypes = {

};


function ListItem(props) {
    const { lessons } = props;

    const [isVisible, setIsVisible] = React.useState(false);

    const [isEdit, setIsEdit] = React.useState(false);

    const [lessonSelected, setLessonSelected] = React.useState({});

    const dispatch = useDispatch();

    const handleDelete = _id => {
        const deleteLesson = async () => {
            try {
                const response = await LessonApi.delete(_id);
                message.success(response.message);
                dispatch(fetchLessons());
            } catch (error) {
                console.log(error);
            }
        }
        deleteLesson();
    }

    const handleEdit = _id => {
        setIsEdit(true);
        setIsVisible(true);
        setLessonSelected(lessons.find(lesson => lesson._id === _id));
    }

    const handleAdd = () => {

        setIsEdit(false);
        setIsVisible(true);
        setLessonSelected({})

    }

    return (
        <div>
            {
                lessons.map((lesson, index) => <Item key={index} lesson={lesson} onEdit={handleEdit} onDelete={handleDelete} />)
            }
            <AddLesson onAdd={handleAdd} />
            <LessonModal
                lesson={lessonSelected}
                isEdit={isEdit}
                isVisible={isVisible}
                setIsVisible={setIsVisible} />
        </div>
    );
}

export default ListItem;