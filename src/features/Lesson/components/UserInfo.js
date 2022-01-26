import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button } from 'antd';
import { LogoutOutlined } from '@ant-design/icons/lib/icons';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'features/Auth/authSlice';

UserInfo.propTypes = {

};

const UserInfoStyled = styled.div`
    position:absolute;
    top:-11%;
    right:5px;
    font-size:11px;
    font-style:italic;
    display:flex;
    text-align:center;
`

const InfoStyled = styled.div`
    font-size:12px;
    margin-left:10px;
    color:#F9B51B;
`;

const Logout = styled.div`
    font-size:11px;
    color:#F6280F;
    cursor:pointer;
`;

function UserInfo(props) {
    const { user: { name } } = useSelector(state => state.auth);
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(logout());
    }
    return (
        <UserInfoStyled>
            <div>xin chào</div>
            <InfoStyled>{name}<Logout onClick={() => handleLogout()}>( Thoát )</Logout>  </InfoStyled>
        </UserInfoStyled>
    );
}

export default UserInfo;