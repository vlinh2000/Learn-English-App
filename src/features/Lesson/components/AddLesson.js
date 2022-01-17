import React from 'react';
import PropTypes from 'prop-types';
import { ButtonStyled } from 'assets/styles/GobalStyled';
import { DeleteOutlined, EditOutlined, PlusOutlined, SettingOutlined, UploadOutlined } from '@ant-design/icons/lib/icons';
import styled from 'styled-components';
import { Button, Form, Input, message, Modal, Popover, Upload } from 'antd';
import InputField from 'custom-fields/InputField';
import UploadField from 'custom-fields/UploadField';

AddLesson.propTypes = {

};

const AddLessonStyled = styled.div``;

const WrapperButton = styled.div`
    position:fixed;
    bottom:30px;
    right:30px;
`;


function AddLesson(props) {

    const { onAdd } = props;

    const handleOk = () => {
        onAdd();
    }

    return (
        <AddLessonStyled>
            <WrapperButton>
                <ButtonStyled
                    onClick={handleOk}
                    shape='circle'
                    icon={<PlusOutlined />}
                    color='#0074D9' >
                </ButtonStyled>
            </WrapperButton >

        </AddLessonStyled >
    );
}

export default AddLesson;