import React from "react";
import style from './MessageInput.module.sass';


const MessageInput = (props) => {
    const messageArea = React.createRef();

    const changeMessageArea = () => {
        let text = messageArea.current.value;
        props.changeMessageArea(text);
    };

    const sentMessage = () => {
        props.sentMessage();
    };

    return (
        <form className={style.message} onSubmit={event => {
            event.preventDefault();
            sentMessage();
        }}>
            <input type='text' ref={messageArea} className={style.textarea} onChange={changeMessageArea} value={props.state.messageText}/>
            <button type='submit' className={style.btn}>Отправить</button>
        </form>
    )
}

export default MessageInput;