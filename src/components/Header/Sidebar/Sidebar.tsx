import React, {FC} from "react";
import style from './Sidebar.module.sass';
import {NavLink} from "react-router-dom";
import Menu from "antd/lib/menu";
import {CommentOutlined, TeamOutlined, UserOutlined} from "@ant-design/icons/lib";

const Sidebar:FC = () => {
    return (
            <nav className={style.sidebar}>
                <Menu
                    defaultSelectedKeys={['1']}
                    mode="horizontal">
                    <Menu.Item key='1' title='Profile'>
                        <NavLink to="/">
                            <UserOutlined/> Profile
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key='2' title='Messages'>
                        <NavLink to="/dialogs">
                            <CommentOutlined/> Messages
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key='3' title='Find people'>
                        <NavLink to="/users">
                            <TeamOutlined/> Find people
                        </NavLink>
                    </Menu.Item>
                </Menu>
            </nav>
    );
}

export default Sidebar;

