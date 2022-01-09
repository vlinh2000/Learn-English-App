import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
import { images } from 'contants/images';

Item.propTypes = {
    lesson: PropTypes.object
};

Item.defaultProps = {
    lesson: {}
};


const LinkStyled = styled(Link)`
    width:20%;
    display: inline-block;
    marginBottom: 20;
    padding: 0 10px;
`;

function Item(props) {

    const { lesson: { _id, image, title, description } } = props;

    return (
        <LinkStyled to={`/lession/${_id}`}>
            <Card
                hoverable
                cover={<img alt="image" src={images.EXAMPLE} />}>
                <Card.Meta title={title} description={description} />
            </Card>
        </LinkStyled>
    );
}

export default Item;