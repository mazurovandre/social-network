import React, {FC, useEffect, useRef, useState} from "react";
import style from './Dialogs.module.sass';
import DialogList from "./DialogList/DialogList";
import Message from "./Message/Message";
// import MessageInputContainer from "./MessageInput/MessageInputContainer";
import {InitialStateType as DialogsProps} from "../../redux/dialogsReducer";


const Dialogs:FC<DialogsProps> = ({dialogsData}) => {

    const [selectedDialog, setSelectedDialog] = useState(1)

    const contacts = dialogsData.map(data => {
        return {
            id: data.id,
            name: data.name
        }
    })

    const messages = dialogsData[selectedDialog].dialog.map(message =>
        <Message key={message.id} message={message.text} isOutcome={message.isOutcome}/>);

    const messagesEndRef = useRef<null | HTMLLIElement>(null)

    const scrollToBottom = (): void => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages]);

    return (
        <div className={style.dialogs}>
            <div className={style.content}>
                <div className={style.people}>
                    <h4 className={style.title}>Contacts:</h4>
                    <DialogList contacts={contacts} changeDialog={setSelectedDialog}/>
                </div>
                <div className={style.messages}>
                    <h4 className={style.title}>Messages:</h4>
                    <div className={style.messages_block}>
                        <ul className={style.messages_list}>
                            {messages}
                            <li ref={messagesEndRef}/>
                        </ul>
                    </div>
                    {/*<MessageInputContainer />*/}
                </div>
            </div>
        </div>
    );
}

export default Dialogs;