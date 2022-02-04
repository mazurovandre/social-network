import React, {FC, useState} from "react";
import style from './Dialogs.module.sass';
import DialogList from "./DialogList/DialogList";
import MessageList from "./MessageList/MessageList";
import Empty from "antd/lib/empty";
import {DialogsContainerPropsType as DialogsPropsType} from "./DialogsContainer";
import MessageInput from "./MessageInput/MessageInput";


const Dialogs:FC<DialogsPropsType> = ({dialogsData, sentMessage}) => {

    const [selectedDialog, setSelectedDialog] = useState(null)

    const contacts = dialogsData.map(data => {
        return {
            id: data.id,
            name: data.name
        }
    })

    const messages = dialogsData.map(data => {
        return {
            dialog: data.dialog
        }
    })

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
                        {!selectedDialog &&
                            <div className={style.icon_block}>
                                <Empty description={'Choose your contact'} />
                            </div>}
                        {selectedDialog && <MessageList messages={messages} id={selectedDialog}/>}
                    </div>
                    <MessageInput id={selectedDialog} sentMessage={sentMessage} />
                </div>
            </div>
        </div>
    );
}

export default Dialogs;