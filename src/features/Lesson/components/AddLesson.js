import React from 'react';
import PropTypes from 'prop-types';
import { ButtonStyled } from 'assets/images/styles/GobalStyled';
import { PlusOutlined, UploadOutlined } from '@ant-design/icons/lib/icons';
import styled from 'styled-components';
import { Button, Form, Input, message, Modal, Upload } from 'antd';
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

    const [isVisible, setIsVisible] = React.useState(false);

    const [form] = Form.useForm();

    const handleOk = () => {
        setIsVisible(true);
    }

    const handleClose = () => {
        setIsVisible(false);
        form.resetFields();
    }

    const handleSubmit = values => {

        const { audio, image } = values;

        let err = [];

        audio.file?.status === "error" && err.push("File audio");
        image.file?.status === "error" && err.push("Ảnh tài liệu");

        if (err.length > 0) {
            message.error(`[${err.join(" , ")}] không hợp lệ`);
            return;
        }

        form.resetFields();
        console.log(values);
    }

    const initialValues = {
        name: '',
        author: '',
        audio: null,
        image: null
    }

    return (
        <AddLessonStyled>
            <WrapperButton>
                <ButtonStyled
                    onClick={handleOk}
                    size='large'
                    shape='circle'
                    icon={<PlusOutlined />}
                    color='#009b77' />
            </WrapperButton>
            <Modal
                footer={false}
                visible={isVisible}
                onCancel={handleClose}
                title="Thêm bài học">
                <Form
                    style={{ padding: "0.5rem 2rem" }}
                    form={form}
                    layout='vertical'
                    name='formAdd'
                    onFinish={handleSubmit}
                    initialValues={initialValues}
                    autoComplete='off'
                >
                    <InputField
                        name="name"
                        label="Tên bài học"
                    />
                    <InputField
                        name="author"
                        label="Tác giả"
                    />
                    <UploadField
                        name="audio"
                        label='File audio (MP3)'
                        accept={['audio/mpeg']}
                    />

                    <UploadField
                        name="image"
                        label='Ảnh tài liệu (PNG , JPEG)'
                        listType='picture-card'
                        accept={['image/png', 'image/jpeg']}
                    />
                    <ButtonStyled
                        color='#0074D9'
                        htmlType="submit">
                        Thêm
                    </ButtonStyled>
                </Form>
            </Modal>
        </AddLessonStyled>
    );
}

export default AddLesson;