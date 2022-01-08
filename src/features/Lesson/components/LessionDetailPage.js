import React from 'react';
import PropTypes from 'prop-types';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { images } from 'contants/images';
import styled from 'styled-components';
import ListWord from './ListWord';
import { Button, Col, Pagination, Popover, Row, Switch, Tooltip } from 'antd';
import Category from './Category';
import { CustomerServiceOutlined, HistoryOutlined, InfoOutlined, MenuOutlined, NotificationOutlined, PlusOutlined, PlusSquareOutlined, SendOutlined, SwapOutlined } from '@ant-design/icons/lib/icons';
import SideBar from './SideBar';
import { ButtonStyled } from 'assets/images/styles/GobalStyled';
import ToolBox from './ToolBox';

LessionDetailPage.propTypes = {

};

const LessionDetailStyled = styled.div`
    padding:1rem;
`;

const AudioStyled = styled.audio`
    display:block;
    width:100%;
    padding:0 2rem;
    margin-bottom:1rem;
`;

const PictureStyled = styled.img`
    object-fit: cover;
    width:100%;
    height:100%;
    `;

const Wrapper = styled.div`
    box-shadow:1px 1px 25px -8px #AAA;
    padding:1rem 2rem;
    position:relative;
    height:100%;
    width:100%;
    min-height:500px;
    margin-right:2rem;
`;

const AddButton = styled(Button)`
    position:absolute;
    bottom:20px;
    left:30px;
    color:#8b68a7;
    box-shadow:1px 1px 10px 0px #AAA;
    border:1px solid #8b68a7;
    
    &:hover,&:active{
        border:1px solid #8b68a7;
        color:#8b68a7;
        box-shadow:5px 5px 1px 5px #EEE;
    }
`;

const GroupContent = styled.div`
    margin-bottom:1rem;
    padding-bottom:1rem;
    border-bottom:1px solid #EEE;
    min-height:100px;
`;

const CateInfo = styled.div`
    display:inline-block;
    color:#555;
    font-style:italic;
    min-width:120px;
    margin-left:2rem;
`;

const Info = styled.span`
    color:#FF4136;
`;

const PaginationStyled = styled(Pagination)`
    margin:2rem 0;
    
    li,.ant-pagination-item-link{
        border:none;
        border-radius:50%!important;

        &:not([disabled]):hover{
                    background:#EEE;
                    color:#111;
                }
            }

    .ant-pagination-item:not(.ant-pagination-item-active):hover{
        background:#EEE;
        a{
            color:#111;
        }
    }

    .ant-pagination-item-active a{
        color:#FFF;
    } 
    .ant-pagination-item-active{
        background:#FF851B;
        border-color:#FF851B;
    }

`;

const LinkStyled = styled(Link)`
    padding: 5px 10px;
    background:#de4b6b;   
    margin:5px;
    color:#FFF;
    border-radius:5px;
    display:inline-block;
`;

function LessionDetailPage(props) {
    const params = useParams();
    const navigate = useNavigate();
    const [isLowMode, setIsLowMode] = React.useState(true);

    const handleOnchangeLesson = page => {
        navigate(`/lession/${page}`, { replace: true });
    }

    return (
        <LessionDetailStyled>
            <Row gutter={[20, 20]}>
                <Col lg={{ span: 8 }} md={{ span: 12 }} sm={{ span: 24 }} xs={{ span: 24 }}>
                    <Wrapper>
                        <PictureStyled src={images.EXAMPLE} alt='img' />
                    </Wrapper>

                </Col>
                <Col lg={{ span: 8 }} md={{ span: 12 }} sm={{ span: 24 }} xs={{ span: 24 }}>
                    <Wrapper>
                        <Category icon={<CustomerServiceOutlined />} title="Âm thanh" />
                        <AudioStyled controls src='https://f9-stream.nixcdn.com/NhacCuaTui1025/ThichThiToTinh-AnieNhuThuyHoangRapper-7124599.mp3?st=Q25W1HpVOveVMFfx-t62qQ&e=1641527376&t=1641440966985'></AudioStyled>

                        <Category icon={<HistoryOutlined />} title="Các từ mới (5)" color="#001f3f" />
                        <ListWord />
                        <AddButton icon={<PlusSquareOutlined />}>Thêm từ</AddButton>
                    </Wrapper>
                </Col>
                <Col lg={{ span: 8 }} md={{ span: 12 }} sm={{ span: 24 }} xs={{ span: 24 }}>
                    <Wrapper>
                        <GroupContent>
                            <Category icon={<InfoOutlined />} title="Thông tin bài học" />
                            <div>
                                <CateInfo>Ngày tạo:</CateInfo>
                                <Info>10:20 1/7/2022</Info>
                            </div>
                            <div>
                                <CateInfo>Số lần nghe:</CateInfo>
                                <Info>10</Info>
                            </div>
                            <div>
                                <CateInfo>Tên chủ sở hữu:</CateInfo>
                                <Info>Trương Việt Linh</Info>
                            </div>
                        </GroupContent>

                        <GroupContent>
                            <Category icon={<MenuOutlined />} title="Các chế độ khác" />
                            <div style={{ marginLeft: '2rem' }}>
                                <ButtonStyled
                                    icon={<NotificationOutlined />}
                                    color='#e35a15'>
                                    Nghe tất cả
                                </ButtonStyled>
                            </div>
                        </GroupContent>
                        <GroupContent>
                            <Category icon={<SwapOutlined />} title="Chuyển bài học" />
                            <div style={{ marginLeft: '2rem' }}>
                                <PaginationStyled
                                    showLessItems
                                    onChange={(page) => handleOnchangeLesson(page)}
                                    pageSize={1}
                                    total={10} />

                                <Popover
                                    title="Danh sách bài học"
                                    trigger="click"
                                    placement='left'
                                    content={
                                        <div style={{ maxWidth: 380, maxHeight: 500, overflowY: 'auto' }}>
                                            <Tooltip title="A picnic by the River">
                                                <LinkStyled to="/lession/1">Bài 1</LinkStyled>
                                            </Tooltip>
                                            <Tooltip title="A picnic by the River">
                                                <LinkStyled to="/lession/2">Bài 2</LinkStyled>
                                            </Tooltip>
                                            <Tooltip title="A picnic by the River">
                                                <LinkStyled to="/lession/3">Bài 3</LinkStyled>
                                            </Tooltip>
                                            <Tooltip title="A picnic by the River">
                                                <LinkStyled to="/lession/4">Bài 4</LinkStyled>
                                            </Tooltip>
                                            <Tooltip title="A picnic by the River">
                                                <LinkStyled to="/lession/5">Bài 5</LinkStyled>
                                            </Tooltip>
                                            <Tooltip title="A picnic by the River">
                                                <LinkStyled to="/lession/6">Bài 6</LinkStyled>
                                            </Tooltip>
                                            <Tooltip title="A picnic by the River">
                                                <LinkStyled to="/lession/7">Bài 7</LinkStyled>
                                            </Tooltip>
                                        </div>}
                                >
                                    <ButtonStyled
                                        icon={<SendOutlined style={{ transform: 'rotate(-45deg)' }} />}
                                        color='#085fc5'>
                                        Chuyển nhanh
                                    </ButtonStyled>
                                </Popover>

                            </div>
                        </GroupContent>

                    </Wrapper>
                </Col>
            </Row>
            <ToolBox />
        </LessionDetailStyled>
    );
}

export default LessionDetailPage;