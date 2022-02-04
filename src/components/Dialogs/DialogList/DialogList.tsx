import React, {FC} from "react";
import {NavLink} from "react-router-dom";
import {List} from "antd";
import Item from "antd/lib/list/Item";

type DialogsListProps = {
    contacts: any
    changeDialog: any
}

const DialogList:FC<DialogsListProps> = ({contacts, changeDialog}) => {

    const contact = contacts.map((item: any) => <Item key={item.id} onClick={() => changeDialog(item.id - 1)}>
        <NavLink to={`/dialogs/${item.id}`}>{item.name}</NavLink>
    </Item>);

    // const path = "/dialogs/" + id;
    return (
        <List>
            {contact}
        </List>

    )
};

export default DialogList;