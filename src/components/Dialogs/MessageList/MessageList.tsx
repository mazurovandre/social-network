import Empty from "antd/lib/empty";
import React, {FC, useEffect, useRef} from "react";
import Message from "../Message/Message";
import style from './MessageList.module.sass';

type MessageListProps = {
    messages: any
    id: number
}

const MessageList:FC<MessageListProps> = ({messages, id}) => {

    const dialog = messages[id - 1].dialog.map((message: any) => <Message key={message.id} message={message.text} isOutcome={message.isOutcome}/>)

    const messagesEndRef = useRef<null | HTMLLIElement>(null)

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }, [messages]);

    return (
        <>
            {messages[id - 1].dialog.length === 0 && <div className={style.icon_block}>
                <Empty description={'Write your first message'} />
            </div>}
            {messages[id - 1].dialog.length && <ul className={style.list}>
                {dialog}
                <li ref={messagesEndRef}/>
            </ul>}
        </>
    );
};

export default MessageList;