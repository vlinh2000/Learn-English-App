import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { images } from 'contants/images';
import styled from 'styled-components';
import ListWord from './ListWord';
import { Button, Col, Pagination, Row, Switch } from 'antd';
import Category from './Category';
import { HistoryOutlined, InfoOutlined, MenuOutlined, PlusOutlined, PlusSquareOutlined, SwapOutlined } from '@ant-design/icons/lib/icons';

LessionDetail.propTypes = {

};

const LessionDetailStyled = styled.div`
    padding:1rem;
`;

const AudioStyled = styled.audio`
    display:block;
    width:100%;
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
    bottom:10px;
    left:10px;
    background:#FFDC00;
    box-shadow:1px 1px 25px -8px #AAA;
    border:none;
    
    &:hover{
        background:#FFDC00;
        color:#0074D9;
        border:solid 1px #0074D9;
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
    color:#969696;
    min-width:120px;
    margin-left:2rem;
`;

const Info = styled.span`
    color:#FF4136;
`;

const PaginationStyled = styled(Pagination)`
    margin-bottom:1rem;

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

function LessionDetail(props) {
    const params = useParams();
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
                            <div>
                                <CateInfo>Chế độ hiện tại:</CateInfo>
                                <Info>Học chậm</Info>
                            </div>
                        </GroupContent>

                        <GroupContent>
                            <Category icon={<SwapOutlined />} title="Chuyển bài học" />
                            <div style={{ marginLeft: '2rem' }}>
                                <PaginationStyled pageSize={1} current={1} total={20} />
                                <Button>Chuyển nhanh</Button>

                            </div>
                        </GroupContent>
                        <GroupContent>
                            <Category icon={<MenuOutlined />} title="Các chế độ khác" />
                            <div>
                                <div>
                                    <CateInfo>Học chậm</CateInfo>
                                    <Info>
                                        <Switch size="small" defaultChecked />
                                    </Info>
                                </div>
                                <div>
                                    <CateInfo>Nghe tự động</CateInfo>
                                    <Info>
                                        <Switch size="small" defaultChecked />
                                    </Info>
                                </div>
                            </div>
                        </GroupContent>

                    </Wrapper>
                </Col>
            </Row>
        </LessionDetailStyled>
    );
}

export default LessionDetail;