import React from 'react';
import PropTypes from 'prop-types';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { images } from 'contants/images';
import styled from 'styled-components';
import ListWord from '../components/ListWord';
import { Button, Col, message, Pagination, Popover, Row, Switch, Tooltip } from 'antd';
import Category from '../components/Category';
import { CustomerServiceOutlined, HistoryOutlined, InfoOutlined, MenuOutlined, NotificationOutlined, PlusOutlined, PlusSquareOutlined, SendOutlined, SwapOutlined } from '@ant-design/icons/lib/icons';
import SideBar from '../components/SideBar';
import { ButtonStyled } from 'assets/styles/GobalStyled';
import ListenAll from '../components/ListenAll';
import AddNewWord from '../components/AddNewWord';
import { MdAssignmentReturn } from 'react-icons/md';
import { LessonApi } from 'api/LessonApi';
import { useSelector } from 'react-redux';
import { fetchWords, increaseListenTime } from '../LessionSlice';
import { useDispatch } from 'react-redux';
import moment from 'moment';

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

    &::-webkit-media-controls-panel {
        background: linear-gradient(to right top, #658ec6, #6cdbeb);
    }
`;

const PictureStyled = styled.img`
    object-fit: contain;
    max-width: 100%;
    max-height: 100%;
    `;

const Wrapper = styled.div`
    box-shadow:1px 1px 25px -8px #AAA;
    padding:1rem 2rem;
    position:relative;
    height:100%;
    width:100%;
    min-height:500px;
    border-radius:2rem;
    margin-right:2rem;
    background: ${props => props.color || `linear-gradient(
        to left top,
        rgba(255, 255, 255, 0.8),
        rgba(255, 255, 255, 0.5)
      );` } 
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

const LinkStyled = styled(Link)`
    padding: 5px 10px;
    background:#de4b6b;   
    margin:5px;
    color:#FFF;
    border-radius:5px;
    display:inline-block;
`;

const BackButton = styled(Link)`
    position:absolute;
    top:20px;
    left:20px;
`;

function LessionDetailPage(props) {
    const { lessonId } = useParams();
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const [lesson, setLesson] = React.useState();

    const { lessons } = useSelector(state => state.homeInfo);

    const { words } = useSelector(state => state.homeInfo);

    const [timeCount, setTimeCount] = React.useState();

    const handleOnchangeLesson = page => {
        navigate(`/lession/${lessons[page]._id}`, { replace: true });
    }

    React.useEffect(() => {
        const fetchLesson = async () => {
            try {
                const response = await LessonApi.get(lessonId);
                setLesson(response.lesson);
                setTimeCount(response.lesson.time);
            } catch (error) {
                message.error(error);
            }
        }


        fetchLesson();
        dispatch(fetchWords({ lessonId }));
    }, [lessonId])

    const handleCount = () => {
        setTimeCount(prev => prev + 1);
        dispatch(increaseListenTime(lessonId));
    }


    return (
        <LessionDetailStyled>
            <BackButton to="/">
                <Tooltip title="Trở lại">
                    <ButtonStyled
                        color='#0074D9'
                        style={{ marginBottom: 10 }}
                        icon={<MdAssignmentReturn />}
                        shape='circle' />
                </Tooltip>
            </BackButton>
            <Row gutter={[20, 20]}>
                <Col lg={{ span: 8 }} md={{ span: 12 }} sm={{ span: 24 }} xs={{ span: 24 }}>
                    <Wrapper color='#FFF'>
                        <PictureStyled src={lesson?.image} alt='img' />
                    </Wrapper>

                </Col>
                <Col lg={{ span: 8 }} md={{ span: 12 }} sm={{ span: 24 }} xs={{ span: 24 }}>
                    <Wrapper>
                        <Category icon={<CustomerServiceOutlined />} title="Âm thanh" />
                        <AudioStyled onEnded={handleCount} controls src={lesson?.audio} />

                        <Category icon={<HistoryOutlined />} title={`Các từ mới (${words.length})`} color="#001f3f" />
                        <ListWord words={words} />

                    </Wrapper>
                </Col>
                <Col lg={{ span: 8 }} md={{ span: 12 }} sm={{ span: 24 }} xs={{ span: 24 }}>
                    <Wrapper>
                        <GroupContent>
                            <Category icon={<InfoOutlined />} title="Thông tin bài học" />
                            <div>
                                <CateInfo>Ngày tạo:</CateInfo>
                                <Info>{moment(lesson?.createAt).format('DD-MM-yyyy h:mm a')}</Info>
                            </div>
                            <div>
                                <CateInfo>Số lần nghe:</CateInfo>
                                <Info>{timeCount}</Info>
                            </div>
                            <div>
                                <CateInfo>Tên chủ sở hữu:</CateInfo>
                                <Info>{lesson?.author}</Info>
                            </div>
                        </GroupContent>

                        <GroupContent>
                            <Category icon={<MenuOutlined />} title="Nghe liên tục" />
                            <div style={{ marginLeft: '2rem' }}>
                                <ListenAll />
                            </div>
                        </GroupContent>
                        <GroupContent>
                            <Category icon={<SwapOutlined />} title="Chuyển bài học" />
                            <div style={{ marginLeft: '2rem' }}>
                                <Popover
                                    title="Danh sách bài học"
                                    trigger="click"
                                    placement='left'
                                    content={
                                        <div style={{ maxWidth: 380, maxHeight: 500, overflowY: 'auto' }}>
                                            {lessons?.map((ls, index) => <Tooltip key={index} title={ls.name}>
                                                <LinkStyled className={lessonId === ls._id && "active"} to={`/lession/${ls._id}`} >Bài {index + 1}</LinkStyled>
                                            </Tooltip>)}
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
        </LessionDetailStyled>
    );
}

export default LessionDetailPage;