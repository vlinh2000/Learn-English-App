import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Word from './Word';
import { Divider } from 'antd';
import { HistoryOutlined } from '@ant-design/icons/lib/icons';

ListWord.propTypes = {

};
const ListWordStyled = styled.div`
    text-align:center;
    `;
function ListWord(props) {
    return (
        <ListWordStyled>
            <Word />
            <Word />
            <Word />
            <Word />
            <Word />
            <Word />
            <Word />
            <Word />
        </ListWordStyled>
    );
}

export default ListWord;