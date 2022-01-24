import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Card, Popconfirm } from 'antd';
import { Link } from 'react-router-dom';
import { images } from 'contants/images';
import { DeleteOutlined, EditOutlined, EyeOutlined } from '@ant-design/icons/lib/icons';
import { MdHeadphones, MdOutlineHeadphones } from "react-icons/md";
import { format } from 'date-fns';
import moment from 'moment';

Item.propTypes = {
    lesson: PropTypes.object
};

Item.defaultProps = {
    lesson: {}
};


const Wrapper = styled.div`
    width:20%;
    display: inline-block;
    margin-bottom: 20px;
    padding: 0 10px;
`;

const TimeCount = styled.div`
    font-size:10px;
    margin-top:5px;
`;

const CardStyled = styled(Card)`
    padding: 5px 10px;
    background: linear-gradient(
        to left top,
        rgba(255, 255, 255, 0.8),
        rgba(255, 255, 255, 0.5)
      );
      box-shadow: 6px 6px 20px rgba(122, 122, 122, 0.2);

      .ant-card-body{
          padding:15px;
      }

      .ant-card-meta-title{
          font-size:12px;
          color:#426696;
          margin-bottom:0px!important;
      }

      .ant-card-meta-description{
        font-size:11px;
      }
`;

function Item(props) {

    const { lesson, onDelete, onEdit } = props;

    const handleDelete = () => {
        onDelete(lesson._id);
    }

    const handleEdit = () => {
        onEdit(lesson._id);
    }
    moment.locale("vi");

    return (
        <Wrapper>
            <CardStyled
                hoverable
                cover={<img alt="image" src={"https://res.cloudinary.com/vlinh/image/upload/v1642504045/files_learn_english_app/banner_ngaewu.png"} />}
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
                <Card.Meta title={lesson.name} description={moment(lesson.createAt).format('DD-MM-yyyy h:mm a')} />
                <TimeCount><MdOutlineHeadphones /> {lesson.time} </TimeCount>
            </CardStyled>
        </Wrapper>


    );
}

export default Item;