import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

ToolBox.propTypes = {

};

const ToolBoxStyled = styled.div`
    position:fixed;
    bottom:100px;
    right:100px;
    padding:10px 20px;
    background-color:#AAA;
    border-radius:50%;
    
`;

function ToolBox(props) {
    return (
        <ToolBoxStyled >

        </ToolBoxStyled>
    );
}

export default ToolBox;