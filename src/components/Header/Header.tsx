import React, {FC} from "react";
import style from './Header.module.sass';
import '../../index.css'
import logo from '../../images/logo.svg';
import {HeaderProps} from './HeaderContainer'
import Button from "antd/lib/button/button";
import Sidebar from "./Sidebar/Sidebar";
import Col from "antd/lib/grid/col";
import Row from "antd/lib/grid/row";
import {Dropdown} from "antd";
import Menu from "antd/lib/menu";
import DownOutlined from "@ant-design/icons/lib/icons/DownOutlined";
import SettingOutlined from "@ant-design/icons/lib/icons/SettingOutlined";
import {LogoutOutlined} from "@ant-design/icons/lib";

const Header: FC<HeaderProps> = ({login, isAuth, logoutThunk}) => {

    const menu = (
        <Menu>
            <Menu.Item key={'edit'} disabled={true} style={{padding: '15px 10px'}}>
                <SettingOutlined style={{marginRight: '5px'}}/> Edit Profile
            </Menu.Item>
            <Menu.Item key={'logoff'} style={{padding: '15px 10px'}} onClick={logoutThunk}>
                <LogoutOutlined style={{marginRight: '5px'}}/> Logoff
            </Menu.Item>
        </Menu>
    );

    return (
        <div className='container'>
            <Row>
                <Col span={2}>
                    <div className={style.logo}>
                        <img src={logo} alt="logo"/>
                    </div>
                </Col>
                <Col span={18}>
                    <Sidebar/>
                </Col>
                <Col span={4}>
                    <div className={style.login}>
                        {isAuth && <Dropdown overlay={menu} placement="bottomRight">
                            <Button>{login} <DownOutlined/></Button>
                        </Dropdown>}
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default Header;