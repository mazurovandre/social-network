import React, {FC, useState} from "react";
import style from './Dialogs.module.sass';
import DialogList from "./DialogList/DialogList";
import MessageList from "./MessageList/MessageList";
import Empty from "antd/lib/empty";
import {DialogsContainerPropsType as DialogsPropsType} from "./DialogsContainer";
import MessageInput from "./MessageInput/MessageInput";
import {Col, Row} from "antd";


const Dialogs: FC<DialogsPropsType> = ({dialogsData, sentMessage}) => {

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
        <Row className={style.dialogs}>
            <Col xl={6} lg={6} md={8} sm={8} xs={8}>
                <h4 className={style.title}>Contacts:</h4>
                <DialogList contacts={contacts} changeDialog={setSelectedDialog}/>
            </Col>
            <Col xl={18} lg={18} md={16} sm={16} xs={16} className={style.messages}>
                <h4 className={style.title}>Messages:</h4>
                <div className={style.messages_block}>
                    {!selectedDialog &&
                    <div className={style.icon_block}>
                        <Empty description={'Choose your contact'}/>
                    </div>}
                    {selectedDialog && <MessageList messages={messages} id={selectedDialog}/>}
                </div>
                <MessageInput id={selectedDialog} sentMessage={sentMessage}/>
            </Col>

        </Row>
    );
}

export default Dialogs;