import React from 'react';
import ListItem from '../components/ListItem';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLessons, GetLessons } from '../LessionSlice';
import { Carousel } from 'antd';
import styled from 'styled-components';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

MainPage.propTypes = {

};

const CarouselStyled = styled(Carousel)`
    .slick-dots{
        bottom:-30px!important;
    } 

    .slick-dots li{
        width:25px;
    }

    .slick-dots li button{
        height:7px;
    }

`;

const MoveRight = styled.span`
    display:inline-block;
    position:absolute;
    right: 30px;
    top:46%;
    height:30px;
    width:30px;
    text-align:center;
    color:#FFF;
    line-height:30px;
    border-radius:50%;
    background:#AFCBE5;
    cursor:pointer;
    transition:all .3s;
    box-shadow:1px 1px 5px 1px #AAA;
    &:hover{
        background:#FFF;
        color:#000;
    }
    `;

const MoveLeft = styled.span`
    display:inline-block;
    position:absolute;
    left:30px;
    top:46%;
    height:30px;
    width:30px;
    text-align:center;
    color:#FFF;
    line-height:30px;
    border-radius:50%;
    background:#AFCBE5;
    cursor:pointer;
    transition:all .3s;
    box-shadow:1px 1px 5px 1px #AAA;
    &:hover{
        background:#FFF;
        color:#000;
    }
`;

function MainPage(props) {
    const { lessons } = useSelector(state => state.homeInfo);
    const [lessonsSlice, setLessonsSlice] = React.useState();

    let carouselRef = React.createRef()
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(fetchLessons());
    }, []);

    React.useEffect(() => {
        console.log("Lặp")
        let slice = [...lessons];
        let result = new Array(Math.ceil(slice.length / 10)).fill().map(() => slice.splice(0, 10));
        setLessonsSlice(result);
    }, [lessons]);

    return (
        <div style={{ padding: '0 3rem' }}>
            <CarouselStyled effect='fade' ref={carouselRef}>
                {
                    lessonsSlice?.map((lss, index) => <ListItem lessons={lss} key={index} />)
                }
            </CarouselStyled>
            <MoveLeft onClick={() => carouselRef.current.prev()}>
                <MdChevronLeft />
            </MoveLeft>
            <MoveRight onClick={() => carouselRef.current.next()}>
                <MdChevronRight />
            </MoveRight>
        </div >
    );
}

export default MainPage;