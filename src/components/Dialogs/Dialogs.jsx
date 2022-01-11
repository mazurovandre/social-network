import React from "react";
import style from './Dialogs.module.sass';
import DialogName from "./DialogName/DialogName";
import Message from "./Message/Message";
import MessageInputContainer from "./MessageInput/MessageInputContainer";
import Login from "../Login/Login";
import {Routes, Route} from 'react-router-dom';

const Dialogs = (props) => {
    const dialogs = props.dialogsData.map(person => <DialogName key={person.id} name={person.name} id={person.id.toString()}/>);
    const messages = props.dialogsMessages.map(message => <Message key={message.id} message={message.text} isOutcome={message.isOutcome}/>);

    if (!props.isAuth) {
        return (
            <Routes>
                <Route path="/" element={<Login />} />
            </Routes>
        )
    }

    return (
        <div className={style.dialogs}>
            <div className={style.content}>
                <div className={style.people}>
                    <h4 className={style.title}>Contacts:</h4>
                    <ul className={style.people_list}>
                        {dialogs}
                    </ul>
                </div>
                <div className={style.messages}>
                    <h4 className={style.title}>Messages:</h4>
                    <div className={style.messages_block}>
                        <ul className={style.messages_list}>
                            {messages}
                        </ul>
                    </div>
                    <div className={style.input}>
                        <MessageInputContainer />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;