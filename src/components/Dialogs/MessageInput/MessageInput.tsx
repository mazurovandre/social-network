// import React, {FC, useRef} from "react";
// import style from './MessageInput.module.sass';
// import {MessageInputContainerType} from "./MessageInputContainer";
//
//
// const MessageInput:FC<MessageInputContainerType> = ({messageText, changeMessageArea, sentMessage}) => {
//     const messageArea = useRef<HTMLInputElement>(null);
//
//     const changeMessageField = () => {
//         if (messageArea.current) {
//             let text = messageArea.current.value;
//             changeMessageArea(text);
//         }
//     };
//
//     return (
//         <form className={style.message} onSubmit={event => {
//             event.preventDefault();
//             sentMessage();
//         }}>
//             <input type='text' ref={messageArea} className={style.textarea} onChange={changeMessageField} value={messageText}/>
//             <button type='submit' className={style.btn}>Sent</button>
//         </form>
//     )
// }
//
// export default MessageInput;