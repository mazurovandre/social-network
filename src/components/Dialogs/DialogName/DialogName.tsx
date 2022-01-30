import React, {FC} from "react";
import style from './DialogName.module.sass';
import {NavLink} from "react-router-dom";
import {DialogType as DialogNameProps} from './../../../types/types'

const DialogName:FC<DialogNameProps> = ({id, name}) => {
    const path = "/dialogs/" + id;
    return (
        <li className={style.name}>
            <NavLink to={path}>{name}</NavLink>
        </li>
    )
};

export default DialogName;