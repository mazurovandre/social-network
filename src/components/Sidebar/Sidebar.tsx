import React, {FC} from "react";
import style from './Sidebar.module.sass';
import {NavLink} from "react-router-dom";

const Sidebar:FC<{}> = () => {
    return (
        <aside className={style.sidebar}>
            <nav>
                <ul className={style.list}>
                    <li className={style.item}>
                        <NavLink to="/"
                                 className={link => link.isActive ? `${style.link} ${style.active}` : style.link}>Profile</NavLink>
                    </li>
                    <li className={style.item}>
                        <NavLink to="/dialogs"
                                 className={link => link.isActive ? `${style.link} ${style.active}` : style.link}>Messages</NavLink>
                    </li>
                    <li className={style.item}>
                        <NavLink to="/news"
                                 className={link => link.isActive ? `${style.link} ${style.active}` : style.link}>News</NavLink>
                    </li>
                    <li className={style.item}>
                        <NavLink to="/music"
                                 className={link => link.isActive ? `${style.link} ${style.active}` : style.link}>Music</NavLink>
                    </li>
                    <li className={style.item}>
                        <NavLink to="/settings"
                                 className={link => link.isActive ? `${style.link} ${style.active}` : style.link}>Settings</NavLink>
                    </li>
                    <li className={style.item}>
                        <NavLink to="/users"
                                 className={link => link.isActive ? `${style.link} ${style.active}` : style.link}>Find people</NavLink>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}

export default Sidebar;

