import React, {FC} from "react";
import Paginator from "../common/Paginator/Paginator";
import UsersList from "./UsersList/UsersList";
import {MapStateToPropsType} from "./UsersContainer";

type UsersPropsType = MapStateToPropsType & ownPropsType

type ownPropsType = {
    pageSize: number
    currentPage: number
    changeCurrentPage: (currentPage: number) => void
    changePageSize: (pageSize: number) => void
    toggleFollowUser: (id: number, isFollow: boolean) => void
}

const Users: FC<UsersPropsType> = ({users, totalCount, changeCurrentPage, changePageSize, toggleFollowUser, followingUsers, pageSize, currentPage}) => {
    return (
        <>
            <UsersList users={users} toggleFollowUser={toggleFollowUser} followingUsers={followingUsers}/>
            <Paginator pageSize={pageSize} currentPage={currentPage} totalCount={totalCount} changeCurrentPage={changeCurrentPage}
                       changePageSize={changePageSize}/>
        </>
    );

}

export default Users;