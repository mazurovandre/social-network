import React from "react";
import {changeMessageAreaActionCreator, sentMessageActionCreator} from "../../../redux/dialogsReducer";
import MessageInput from "./MessageInput";


const MessageInputContainer = (props) => {

    const changeMessageArea = (text) => {
        props.store.dispatch(changeMessageAreaActionCreator(text));
    };

    const sentMessage = () => {
        props.store.dispatch(sentMessageActionCreator());
    };

    return <MessageInput state={props.store.getState().dialogsPage} changeMessageArea={changeMessageArea} sentMessage={sentMessage}/>
}

export default MessageInputContainer;