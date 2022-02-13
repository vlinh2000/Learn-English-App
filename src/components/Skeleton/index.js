import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Card } from 'antd';
import "./Skeleton.css";

Skeleton.propTypes = {

};

function Skeleton(props) {
    const { isSkeletonMainPage } = props;
    const [lessons, setLessons] = React.useState([]);

    React.useEffect(() => {
        let list = isSkeletonMainPage ? new Array(10).fill() : new Array(1).fill();

        setLessons(list);
    }, [])

    return (
        <div>
            {
                lessons?.map((lesson, index) => <div className='wrapper' key={index}>
                    <div>
                        <div className='skeleton banner'></div>
                        <div className='skeleton name'></div>
                        <div className='skeleton time'></div>
                        <div className='skeleton listen-count'></div>
                        <div className='skeleton menu'></div>
                    </div>
                </div>)
            }
        </div>
    );
}

export default Skeleton;