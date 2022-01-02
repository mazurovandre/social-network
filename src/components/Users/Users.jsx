import React from "react";
import style from './Users.module.sass';
import User from "./User/User";

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
        <div>
            <ul className={style.list}>
                {props.users.map(user => <User key={user.id} info={user} toggleFollow={props.toggleFollow}/>)}
            </ul>
            <ul className={style.pagination}>
                {pagesItems}
            </ul>
        </div>
    );
}

export default Users;