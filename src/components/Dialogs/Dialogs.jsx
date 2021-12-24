import React from "react";
import style from './Dialogs.module.sass';
import DialogName from "./DialogName/DialogName";
import Message from "./Message/Message";
import MessageInput from "./MessageInput/MessageInput";
// import {messageTextChange, sentMessage} from "../../redux/state";
// import App from "../../App";

const Dialogs = (props) => {
    const dialogs = props.state.dialogsPage.dialogsData.map(person => <DialogName key={person.id} name={person.name} id={person.id.toString()}/>);
    const messages = props.state.dialogsPage.dialogsMessages.map(message => <Message key={message.id} message={message.text} isOutcome={message.isOutcome}/>);

    return (
        <div className={style.dialogs}>
            <div className={style.content}>
                <div className={style.people}>
                    <h4 className={style.title}>Контакты:</h4>
                    <ul className={style.people_list}>
                        {dialogs}
                    </ul>
                </div>
                <div className={style.messages}>
                    <h4 className={style.title}>Сообщения:</h4>
                    <div className={style.messages_block}>
                        <ul className={style.messages_list}>
                            {messages}
                        </ul>
                    </div>
                    <div className={style.input}>
                        <MessageInput state={props.state} store={props.store}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;