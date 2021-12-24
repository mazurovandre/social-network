import React from "react";
import style from './MessageInput.module.sass';
// import {messageTextChange, sentMessage} from "../../../redux/state";
// import App from "../../../App";

const MessageInput = (props) => {
    const messageArea = React.createRef();

    const changeMessageArea = () => {
        let text = messageArea.current.value;
        props.store.messageTextChange(text);
    };

    const sentMessage = () => {
        props.store.sentMessage();
    };

    return (
        <form className={style.message} onSubmit={event => {
            event.preventDefault();
            sentMessage();
        }}>
            <input type='text' ref={messageArea} className={style.textarea} onChange={changeMessageArea} value={props.state.dialogsPage.messageText}/>
            <button type='submit' className={style.btn}>Отправить</button>
        </form>
    )
}

export default MessageInput;