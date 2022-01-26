import React from 'react';
import PropTypes from 'prop-types';
import { ButtonStyled } from 'assets/styles/GobalStyled';
import { DeleteOutlined, EditOutlined, PlusOutlined, SettingOutlined, UploadOutlined } from '@ant-design/icons/lib/icons';
import styled from 'styled-components';
import { Button, Form, Input, message, Modal, Popover, Upload } from 'antd';
import InputField from 'custom-fields/InputField';
import UploadField from 'custom-fields/UploadField';
import { useDispatch } from 'react-redux';
import { setIsEdit, switchAddLessonModal } from '../lessionSlice';

AddLesson.propTypes = {

};


const WrapperButton = styled.div`
    position:fixed;
    bottom:10px;
    right:10px;
`;


function AddLesson(props) {
    const dispatch = useDispatch();

    const handleOpenModal = () => {
        dispatch(switchAddLessonModal(true));
        dispatch(setIsEdit(false));
    }

    return (
        <WrapperButton>
            <ButtonStyled
                onClick={() => handleOpenModal()}
                shape='circle'
                icon={<PlusOutlined />}
                color='#0074D9' >
            </ButtonStyled>
        </WrapperButton >

    );
}

export default AddLesson;