import React, {FC} from "react";
import {NavLink} from "react-router-dom";
import Menu from "antd/es/menu";

type DialogsListProps = {
    contacts: any
    changeDialog: any
}

const DialogList:FC<DialogsListProps> = ({contacts, changeDialog}) => {

    const contact = contacts.map((item: any) => <Menu.Item key={item.id} onClick={() => changeDialog(item.id)}>
        <NavLink to={`/dialogs/${item.id}`}>
            {item.name}
        </NavLink>
    </Menu.Item>);

    return (
        <Menu
            defaultOpenKeys={['sub1']}
            mode="inline">
            {contact}
        </Menu>

    )
};

export default DialogList;