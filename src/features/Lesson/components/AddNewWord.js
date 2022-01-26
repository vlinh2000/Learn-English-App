import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form, message, Popover } from 'antd';
import InputField from 'custom-fields/InputField';
import { BackwardOutlined, PlusSquareOutlined, SaveOutlined } from '@ant-design/icons/lib/icons';
import styled from 'styled-components';
import { ButtonStyled } from 'assets/styles/GobalStyled';
import { MdSave } from 'react-icons/md';
import { WordApi } from 'api/WordApi';
import { fetchWords } from '../lessionSlice';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

AddNewWord.propTypes = {

};

const AddButton = styled(Button)`
    position:absolute;
    bottom:20px;
    left:30px;
    color:#8b68a7;
    box-shadow:1px 1px 10px 0px #AAA;
    border:1px solid #8b68a7;
    
    &:hover,&:active{
        border:1px solid #8b68a7;
        color:#8b68a7;
        box-shadow:5px 5px 1px 5px #EEE;
    }
`;

function AddNewWord(props) {

    const { isEdit, word, isVisible, setIsVisible, onAdd } = props;

    const [isLoading, setIsLoading] = React.useState();

    const { lessonId } = useParams();

    const dispatch = useDispatch()

    const [form] = Form.useForm();

    const initialValues = {
        word: '',
        mean: ''
    }

    const handleAdd = () => {
        onAdd();
    }

    React.useEffect(() => {
        isEdit ? form.setFieldsValue({
            word: word?.word,
            mean: word?.mean
        }) : form.setFieldsValue({
            word: '',
            mean: ''
        })
    }, [isEdit, word])

    const handleSubmit = values => {
        const onAddNewWord = async () => {
            try {
                setIsLoading(true);
                const response = await WordApi.add({ ...values, lessonId });
                message.success(response.message);
                setIsLoading(false);
                form.resetFields();
                dispatch(fetchWords({ lessonId }));
            } catch (error) {
                console.log(error);
                setIsLoading(false);
            }
        }

        const onUpdateWord = async () => {
            try {
                setIsLoading(true);
                const response = await WordApi.patch(word?._id, values);
                message.success(response.message);
                setIsLoading(false);
                dispatch(fetchWords({ lessonId }));
            } catch (error) {
                console.log(error);
                setIsLoading(false);
            }
        }

        isEdit ? onUpdateWord() : onAddNewWord();
    }


    return (
        <Popover
            trigger="click"
            title="Thêm từ mới"
            visible={isVisible}
            content={
                <Form
                    form={form}
                    initialValues={initialValues}
                    style={{ width: 300, padding: "0.25rem 1rem 1rem 1rem" }}
                    layout='vertical'
                    onFinish={(values) => handleSubmit(values)}
                >
                    <InputField
                        name='word'
                        label='Từ'
                    />
                    <InputField
                        name='mean'
                        label='Nghĩa' />

                    <ButtonStyled
                        loading={isLoading}
                        style={{ marginTop: 20 }}
                        icon={<SaveOutlined />}
                        color='#F012BE'
                        htmlType='submit' >
                        Lưu
                    </ButtonStyled>

                    <ButtonStyled
                        onClick={() => setIsVisible(false)}
                        style={{ marginTop: 20 }}
                        icon={<BackwardOutlined />}
                        color='#FF4136' >
                        Thoát
                    </ButtonStyled>
                </Form>
            }
        >
            <AddButton
                onClick={handleAdd}
                icon={<PlusSquareOutlined />}>Thêm từ</AddButton>
        </Popover>
    );
}

export default AddNewWord;