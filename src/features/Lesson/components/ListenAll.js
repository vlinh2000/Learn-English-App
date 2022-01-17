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

ListenAll.propTypes = {

};

const ContentStyled = styled.div`
    text-align:center;
    padding:0.5rem;
`;

function ListenAll(props) {
    const [isVisible, setIsVisible] = React.useState();

    const [currentAudio, setCurrentAudio] = React.useState(0);

    const [currentCheckBox, setCurrentCheckBox] = React.useState(-1);

    const [currentList, setCurrentList] = React.useState([]);

    const [list] = React.useState([devuong, bai2]);


    const handlePlayDone = () => {
        console.log("Đã play xong");
        setCurrentAudio(prev => prev + 1);
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
        audio.currentTime > 0 && audio.play();
    }

    const handleSearch = values => {
        console.log(values);
    }

    const handleCheckBox = ({ target: { value } }) => {
        setCurrentCheckBox(value)
        console.log(value);
    }

    React.useEffect(() => {
        console.log(currentCheckBox);
    }, currentCheckBox)

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
                        allowClear
                        placeholder="Nhập tên bài học"
                        onChange={handleSearch}
                        defaultValue={['a10', 'c12']}
                        style={{ width: '100%', marginBottom: 10 }}
                    >
                        {/* {children} */}
                    </Select>

                }
            </div>


            <Modal
                title={<h4><NotificationOutlined /> [ Bài 1: Picnic on the river ]</h4>}
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
                        src={list[currentAudio]} />
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