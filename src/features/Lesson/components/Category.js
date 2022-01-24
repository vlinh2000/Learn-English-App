import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

Category.propTypes = {

};

const CategoryStyled = styled.div`
    font-size:16px;
    font-weight:bold;
    color:${props => props.color || "#426696"};
    margin:0 0 1rem 0.5rem;
`;

const Title = styled.span`
    margin-left:0.5rem;
`;

function Category(props) {
    const { icon, title } = props;

    return (
        <CategoryStyled>
            {icon}
            <Title>{title}</Title>
        </CategoryStyled>
    );
}

export default Category;