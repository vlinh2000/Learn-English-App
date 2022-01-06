import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { images } from 'contants/images';
import styled from 'styled-components';

LessionDetail.propTypes = {

};

const LessionDetailStyled = styled.div`
    // border:1px solid #ccc;
`;
const MainContent = styled.div`
    padding:1rem;
    display:flex;
    justify-content:space-around;
`;
const AudioStyled = styled.audio`
    display:block;
    width:100%;
`;

const PictureStyled = styled.img`
    margin-bottom:1rem;
`;

const Wrapper = styled.div`
    box-shadow:1px 1px 25px -8px #AAA;
    padding:1rem 2rem;
`;

const NewWordStyled = styled.div`

    h5{
        text-align:center;    
        font-size:16px;
        color:#FFDC00;
    }

    ul{
        list-style:none;
        margin-left:1rem;
    }

    margin-top:1rem;
    min-width:400px;
`;

function LessionDetail(props) {
    const params = useParams();
    return (
        <LessionDetailStyled>
            <MainContent>
                <Wrapper>
                    <PictureStyled src={images.EXAMPLE} alt='img' />
                </Wrapper>
                <Wrapper>

                    <AudioStyled controls src='https://f9-stream.nixcdn.com/NhacCuaTui1025/ThichThiToTinh-AnieNhuThuyHoangRapper-7124599.mp3?st=Q25W1HpVOveVMFfx-t62qQ&e=1641527376&t=1641440966985'></AudioStyled>
                    <NewWordStyled>
                        <h5>Từ mới trong bài</h5>
                        <ul>
                            <li>spot : chổ,nơi </li>
                            <li>spot : chổ,nơi </li>
                        </ul>
                    </NewWordStyled>
                </Wrapper>
            </MainContent>
        </LessionDetailStyled>
    );
}

export default LessionDetail;