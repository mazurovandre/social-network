import React from "react";
import style from './Users.module.sass';
import User from "./User/User";
import axios from "axios";

const Users = (props) => {

    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            props.setUsers(response.data.items)
        })
    }

    // Users API https://social-network.samuraijs.com/

    const users = props.users.map(user => <User key={user.id} info={user} toggleFollow={props.toggleFollow}/>)

    return (
        <ul className={style.list}>
            {users}
        </ul>
    );
}

export default Users;