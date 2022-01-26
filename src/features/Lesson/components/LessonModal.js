import React from 'react';
import PropTypes from 'prop-types';
import { Form, message, Modal } from 'antd';
import InputField from 'custom-fields/InputField';
import UploadField from 'custom-fields/UploadField';
import { ButtonStyled } from 'assets/styles/GobalStyled';
import { LessonApi } from 'api/LessonApi';
import { fetchLessons, switchAddLessonModal } from '../lessionSlice';
import { useDispatch, useSelector } from 'react-redux';

LessonModal.propTypes = {

};

function LessonModal(props) {

    const { isVisibleAddLessonModal, isEdit, lessonSelected } = useSelector(state => state.homeInfo);

    const [isLoading, setIsLoading] = React.useState(false);

    const dispatch = useDispatch()
    const [form] = Form.useForm();

    const handleClose = () => {
        dispatch(switchAddLessonModal(false));
        form.resetFields();
    }


    React.useEffect(() => {
        isEdit &&
            form.setFieldsValue({
                name: lessonSelected.name,
                author: lessonSelected.author,
                audio: lessonSelected.audio,
                image: lessonSelected.image
            })

        console.log({ lessonSelected });
    }, [isEdit, lessonSelected])

    const initialValues = {
        name: '',
        author: 'Việt Linh',
        audio: null,
        image: null
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

        //post 

        const onAdd = async () => {
            try {
                setIsLoading(true);
                let formData = new FormData();

                formData.append("name", values.name);
                formData.append("author", values.author);
                formData.append("audio", values.audio.file);
                formData.append("image", values.image.file);

                const response = await LessonApi.add(formData);
                message.success(response.message);
                setIsLoading(false);
                form.resetFields();
                dispatch(fetchLessons());
            } catch (error) {
                console.log(error);
                setIsLoading(false);
            }
        }

        //update
        const onUpdate = async () => {
            console.log(values);
            try {
                setIsLoading(true);
                let formData = new FormData();

                formData.append("name", values.name);
                formData.append("author", values.author);
                values.audio.file && formData.append("audio", values.audio.file);
                values.image.file && formData.append("image", values.image.file);

                const response = await LessonApi.patch(lessonSelected?._id, formData);
                message.success(response.message);
                setIsLoading(false);
                dispatch(fetchLessons());
            } catch (error) {
                const errMessage = error.response.data;
                setIsLoading(false);
                message.error(errMessage.message);
            }

        }

        isEdit ? onUpdate() : onAdd();
    }



    return (
        <Modal
            footer={false}
            visible={isVisibleAddLessonModal}
            onCancel={() => handleClose()}
            title={isEdit ? "Sửa bài học" : "Thêm bài học"}>
            <Form
                style={{ padding: "0 2rem" }}
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
                    htmlType='submit'
                    loading={isLoading}
                    color='#0074D9'>
                    {isEdit ? "Sửa" : "Thêm"}
                </ButtonStyled>
            </Form>
        </Modal >
    );
}

export default LessonModal;