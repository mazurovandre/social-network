import React from "react";
import style from './Users.module.sass';
import UserContainer from "./User/UserContainer";

const Users = (props) => {
    const totalPages = Math.ceil(props.totalCount / props.pageSize);
    const pagesCount = 10;
    const currentPage = props.currentPage;
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
        if (i > pagesCount) {
            break;
        }
        pages.push(i);
    }

    const pagesItems = pages.map(num => <li className={num === currentPage ? style.active : undefined} key={num}
                                            onClick={() => {props.changeCurrentPage(num)}}>{num}</li>);
    return (
        <>
            <ul className={style.list}>
                {props.users.map(user => <UserContainer key={user.id} {...user}/>)}
            </ul>
            <ul className={style.pagination}>
                {pagesItems}
            </ul>
        </>
    );
}

export default Users;