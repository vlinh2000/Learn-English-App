import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Popover } from 'antd';
import InputField from 'custom-fields/InputField';
import { PlusSquareOutlined, SaveOutlined } from '@ant-design/icons/lib/icons';
import styled from 'styled-components';
import { ButtonStyled } from 'assets/images/styles/GobalStyled';
import { MdSave } from 'react-icons/md';

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

    const [form] = Form.useForm();

    const initialValues = {
        word: '',
        mean: ''
    }

    const handleSubmit = values => {
        console.log(values);
        form.resetFields();
    }


    return (
        <Popover
            trigger="click"
            title="Thêm từ mới"
            content={
                <Form
                    initialValues={initialValues}
                    style={{ width: 300, padding: "0.25rem 1rem 1rem 1rem" }}
                    layout='vertical'
                    onFinish={handleSubmit}
                    form={form}
                >
                    <InputField
                        name='word'
                        label='Từ'
                    />
                    <InputField
                        name='mean'
                        label='Nghĩa' />

                    <ButtonStyled
                        style={{ marginTop: 20 }}
                        icon={<SaveOutlined />}
                        color='#F012BE'
                        htmlType='submit' >
                        Lưu
                    </ButtonStyled>
                </Form>
            }
        >
            <AddButton icon={<PlusSquareOutlined />}>Thêm từ</AddButton>
        </Popover>
    );
}

export default AddNewWord;