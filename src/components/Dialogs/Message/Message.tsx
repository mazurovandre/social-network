import React, {FC} from "react";
import style from './Message.module.sass';

interface MessageProps {
    message: string
    isOutcome: boolean
}

const Message:FC<MessageProps> = ({isOutcome, message}) => {
    return (
        <li className={isOutcome ? `${style.message} ${style.outcome}` : style.message}>
            <p className={style.text}>{message}</p>
        </li>
    )
}

export default Message;