import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Card, Popconfirm } from 'antd';
import { Link } from 'react-router-dom';
import { images } from 'contants/images';
import { DeleteOutlined, EditOutlined, EllipsisOutlined, EyeOutlined, SettingOutlined } from '@ant-design/icons/lib/icons';

Item.propTypes = {
    lesson: PropTypes.object
};

Item.defaultProps = {
    lesson: {}
};


const Wrapper = styled.div`
    width:20%;
    display: inline-block;
    marginBottom: 20;
    padding: 0 10px;
`;

const CardStyled = styled(Card)`
    padding: 5px 10px;
    border:1px solid #39CCCC;
`;

function Item(props) {

    const { lesson, onDelete, onEdit } = props;

    const handleDelete = () => {
        onDelete(lesson._id);
    }

    const handleEdit = () => {
        onEdit(lesson._id);
    }


    return (
        <Wrapper>
            <CardStyled
                hoverable
                cover={<img alt="image" width={100} height={270} src={lesson.image} />}
                actions={[
                    <EditOutlined key="edit" onClick={handleEdit} />,
                    <Popconfirm
                        onConfirm={() => handleDelete()}
                        title={`Bạn có chắc muốn xóa bài học [ ${lesson.name} ] không ?`}>
                        <DeleteOutlined key="delete" />
                    </Popconfirm>,
                    <Link to={`/lession/${lesson._id}`}>
                        <EyeOutlined key="view" />
                    </Link>,
                ]}>
                <Card.Meta title={lesson.name} description={lesson.createAt} />
            </CardStyled>
        </Wrapper>


    );
}

export default Item;