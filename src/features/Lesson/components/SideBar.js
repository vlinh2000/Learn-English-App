import React from 'react';
import PropTypes from 'prop-types';
import { Button, Menu } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';
import { MenuOutlined, PlusOutlined } from '@ant-design/icons/lib/icons';
import { Link } from 'react-router-dom';

SideBar.propTypes = {

};

function SideBar(props) {
    return (
        <Menu
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline">
            <SubMenu key="sub1" icon={<MenuOutlined />} title="Danh sách bài học" >
                <Menu.Item key="1">
                    <Link to="/">Tất cả bài học</Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to="2">Bài 2</Link>
                </Menu.Item>
                <Menu.Item key="3">
                    <Link to="3">Bài 3</Link>
                </Menu.Item>
                <Menu.Item key="4">
                    <Link to="4">Bài 4</Link>
                </Menu.Item>
                <Menu.Item key="5">
                    <Button ghost type='primary' icon={<PlusOutlined />}>Thêm</Button>
                </Menu.Item>
            </SubMenu>
        </Menu>
    );
}

export default SideBar;