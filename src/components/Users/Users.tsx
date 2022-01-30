import React, {FC} from "react";
import style from './Users.module.sass';
import UserContainer from "./User/UserContainer";
import Paginator from "../common/Paginator/Paginator";
import {UserType} from "../../types/types";

interface UsersProps {
    totalCount: number
    pageSize: number
    currentPage: number
    changeCurrentPage: (currentPage: number) => void
    users: Array<UserType>
}

const Users:FC<UsersProps> = (props) => {
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