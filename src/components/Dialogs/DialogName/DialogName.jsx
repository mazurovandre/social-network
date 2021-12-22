import React from "react";
import style from './DialogName.module.sass';
import {NavLink} from "react-router-dom";

const DialogName = (props) => {
    const path = "/dialogs/" + props.id;
    return (
        <li className={style.name}>
            <NavLink to={path}>{props.name}</NavLink>
        </li>
    )
};

export default DialogName;