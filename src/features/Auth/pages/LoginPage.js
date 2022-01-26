import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import InputField from 'custom-fields/InputField';
import { Alert, Button, Form, message } from 'antd';
import { useDispatch } from 'react-redux';
import { getMe, login } from '../authSlice';
import { useNavigate } from 'react-router-dom';

LoginPage.propTypes = {

};

const LoginPageStyled = styled.div`
    background: linear-gradient(
        to right bottom,
        rgba(255, 255, 255, 0.7),
        rgba(255, 255, 255, 0.3)
    );
    
    backdrop-filter: blur(1rem);
    border-radius: 2rem;
    z-index:2;
    width:350px;
    padding:2rem 3rem;
    min-height:46vh;
    box-shadow:1px 1px 20px -8px #AAA;

    display:flex;
    flex-direction:column;
    justify-content:space-between;
    `;

const Title = styled.h5`
        font-size:18px;
        font-weight:500;
        text-align:center;
        color:#426696;
    `;

const ButtonStyled = styled(Button)`
        background:#FC5014;
        color:#FFF;
        font-size:13px;
        font-weight:bold;
        margin-top:20px;
        height:40px;
        transition:all .3s;

        &:hover,&:focus{
            background:#E03E06;
            border:none;
            color:#FFF;
        }
    `;

const NotifText = styled.div`
        font-size:12px;
        color:#D1372A;
        font-weight:bold;
        word-break:keep-all;
        margin-left:10px;
        padding:5px; 
        margin-bottom:5px;
`;

function LoginPage(props) {

    const dispatch = useDispatch()
    const [form] = Form.useForm();
    const navigate = useNavigate();

    const [notif, setNotif] = React.useState("");
    const [isLoading, setIsLoading] = React.useState(false);

    const handleLogin = async (values) => {
        setNotif("");
        setIsLoading(true);
        const { error, payload } = await dispatch(login(values));
        if (error) {
            setNotif(payload.message);
            setIsLoading(false);
            return;
        }

        const response = await dispatch(getMe());
        if (response.error) {
            setIsLoading(false);
            setNotif(response.payload.message);
            return;
        }

        setIsLoading(false);
        navigate("/");
        message.success("Welcome back !");
    }

    return (
        <LoginPageStyled>
            <Title>Đăng nhập vào hệ thống</Title>
            <Form
                autoComplete='off'
                layout='vertical'
                form={form}
                initialValues={
                    {
                        userName: "",
                        passWord: ""
                    }
                }
                onFinish={(values) => handleLogin(values)}
            >
                {notif && <NotifText>{notif}</NotifText>}
                <InputField name='userName' label='Tài khoản' required />
                <InputField name='passWord' type='password' label='Mật khẩu' required />
                <ButtonStyled
                    loading={isLoading}
                    block
                    htmlType='submit'>
                    Đăng nhập
                </ButtonStyled>
            </Form>
        </LoginPageStyled>
    );
}

export default LoginPage;