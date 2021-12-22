import React from "react";
import style from './Message.module.sass';

const Message = (props) => {
    return (
        <li className={props.isOutcome ? `${style.message} ${style.outcome}` : style.message}>
            <p className={style.text}>{props.message}</p>
        </li>
    )
}

export default Message;