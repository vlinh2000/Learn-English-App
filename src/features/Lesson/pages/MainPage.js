import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Col, Row, Space } from 'antd';
import { images } from 'contants/images';

import styled from 'styled-components';
import SideBar from '../components/SideBar';
import ListItem from '../components/ListItem';

MainPage.propTypes = {

};



function MainPage(props) {

    const lessons =
        [
            { _id: 1, title: "Bài 1 : Picnic on the river", description: "Ngày học : 10:22 1/9/2022", image: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" },
            { _id: 2, title: "Bài 1 : Picnic on the river", description: "Ngày học : 10:22 1/9/2022", image: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" },
            { _id: 3, title: "Bài 1 : Picnic on the river", description: "Ngày học : 10:22 1/9/2022", image: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" },
            { _id: 4, title: "Bài 1 : Picnic on the river", description: "Ngày học : 10:22 1/9/2022", image: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" }
        ]

    return (
        <div style={{ width: "90%", margin: '3rem auto' }}>
            <ListItem lessons={lessons} />
        </div>
    );
}

export default MainPage;