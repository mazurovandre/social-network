import React from "react";
import style from './Users.module.sass';
import UserContainer from "./User/UserContainer";
import Paginator from "../common/Paginator/Paginator";

const Users = (props) => {

    return (
        <>
            <ul className={style.list}>
                {props.users.map(user => <UserContainer key={user.id} {...user}/>)}
            </ul>
            <Paginator {...props} />
        </>
    );
}

export default Users;