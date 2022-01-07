import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

Word.propTypes = {

};
const ContentInner = styled.div`
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: transform 0.5s;
        transform-style: preserve-3d;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    `;

const NewWord = styled.div`
    display:inline-block;
    color:#FFF;
    font-weight:bold;
    word-wrap:break-word;
    border-radius:10px;
    width: 20%;
    text-align:center;
    cursor:pointer;
    height:80px;
    margin: 0 10px 10px 0;

    &:hover ${ContentInner} {
        transform: rotateY(180deg);
    }
`;


const ContentFont = styled.div`
    position:absolute;
    background:#39CCCC;
    width: 100%;
    height: 100%;
    padding:2px 5px;
    `;

const ContentBack = styled.div`
    position:absolute;
    background:#01FF70;
    width: 100%;
    height: 100%;
    padding:2px 10px;
    transform: rotateY(180deg);
`;

function Word(props) {
    return (
        <NewWord>
            <ContentInner>
                <ContentFont>
                    spot
                </ContentFont>
                <ContentBack>
                    Chổ ở
                </ContentBack>
            </ContentInner>
        </NewWord>
    );
}

export default Word;