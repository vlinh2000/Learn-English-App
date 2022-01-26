import React from 'react';
import PropTypes from 'prop-types';
import { Col, Modal, Radio, Row, Select, Space } from 'antd';
import { ButtonStyled } from 'assets/styles/GobalStyled';
import { MenuOutlined, NotificationOutlined } from '@ant-design/icons/lib/icons';
import styled from 'styled-components';

import devuong from 'assets/images/DeVuong-DinhDungACV-7121634.mp3'
import bai2 from 'assets/images/NguoiThuongEmCaDoiXuaDuoi-NhVit-7120935.mp3'
import Category from './Category';
import Search from 'antd/lib/input/Search';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { increaseListenTime } from '../lessionSlice';

ListenAll.propTypes = {

};

const ContentStyled = styled.div`
    text-align:center;
    padding:0.5rem;
`;

function ListenAll(props) {
    const [isVisible, setIsVisible] = React.useState();
    const [currentAudio, setCurrentAudio] = React.useState(0);
    //choose option
    const [currentCheckBox, setCurrentCheckBox] = React.useState(-1);
    const [list, setList] = React.useState([]);
    const { lessons } = useSelector(state => state.homeInfo);
    const dispatch = useDispatch()


    React.useEffect(() => {
        let sortLesson = [...lessons].sort((a, b) => new Date(b.createAt) - new Date(a.createAt));
        currentCheckBox > 1 && setList(sortLesson.slice(0, currentCheckBox));
        currentCheckBox === -1 && setList(sortLesson);
    }, [currentCheckBox]);

    const handlePlayDone = () => {
        dispatch(increaseListenTime(list[currentAudio]._id));
        setCurrentAudio(prev => (prev + 1) % list.length);
    }

    const getAudio = () => {
        return document.getElementById("listenAll");
    }


    const handleClose = () => {
        setIsVisible(false);
        getAudio().pause();
    }

    const handleOpen = () => {
        setIsVisible(true);

        let audio = getAudio();
        audio?.currentTime > 0 && audio.play();
    }

    const handleSearch = values => {
        let currentLessonChoosen = [...lessons].sort((a, b) => new Date(b.createAt) - new Date(a.createAt)).filter(lesson => values.includes(lesson._id));
        setList(currentLessonChoosen);
    }

    const handleCheckBox = ({ target: { value } }) => {
        setCurrentCheckBox(value)
    }

    const Options = React.useMemo(() => {
        return [...lessons].map((lesson) => <Select.Option key={lesson._id}>{lesson.name}</Select.Option>)
    }, [lessons])

    return (
        <div>
            <div>
                <Space direction='vertical' style={{ marginBottom: '0.5rem' }}>
                    <Radio.Group defaultValue={currentCheckBox} onChange={handleCheckBox}>
                        <div>
                            <Radio value={-1}>Tất cả</Radio>
                        </div>
                        <div>
                            <Radio value={3}>3 bài gần nhất</Radio>
                        </div>
                        <div>
                            <Radio value={7}>7 bài gần nhất</Radio>
                        </div>
                        <div style={{ marginBottom: 10 }}>
                            <Radio value={1}>Tự thiết lập</Radio>
                        </div>
                    </Radio.Group>
                </Space>
                {
                    currentCheckBox == 1 &&

                    <Select
                        mode='multiple'
                        placeholder="Nhập tên bài học"
                        onChange={handleSearch}
                        style={{ width: '100%', marginBottom: 10, minHeight: 100 }}
                    >
                        {Options}
                    </Select>

                }
            </div>


            <Modal
                title={<h4><NotificationOutlined /> [ {list.length > 0 && list[currentAudio].name} ]</h4>}
                visible={isVisible}
                onCancel={handleClose}
                footer={false}
                cancelText="Thoát"
                centered
            >


                <ContentStyled>
                    <audio
                        style={{ marginTop: 20 }}
                        id='listenAll'
                        onEnded={handlePlayDone}
                        autoPlay
                        controls
                        src={list.length > 0 && list[currentAudio].audio} />
                </ContentStyled>
            </Modal>

            <ButtonStyled
                onClick={handleOpen}
                icon={<NotificationOutlined />}
                color='#e35a15'>
                Bắt đầu
            </ButtonStyled>
        </div >
    );
}

export default ListenAll;