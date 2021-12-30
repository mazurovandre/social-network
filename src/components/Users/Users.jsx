import React from "react";
import style from './Users.module.sass';
import User from "./User/User";

const Users = (props) => {

    const users = props.usersData.map(user => <User key={user.id} info={user} toggleFollow={props.toggleFollow}/>)

    return (
        <ul className={style.list}>
            {users}
        </ul>
    );
}

export default Users;