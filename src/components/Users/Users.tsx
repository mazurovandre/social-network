import React, {FC} from "react";
import Paginator from "../common/Paginator/Paginator";
import {UserType} from "../../types/types";
import UsersList from "./UsersList/UsersList";

type UsersProps = {
    users: Array<UserType>
    totalCount: number
    pageSize: number
    currentPage: number
    changeCurrentPage: (currentPage: number) => void

}

const Users: FC<UsersProps> = ({users, totalCount, pageSize, currentPage, changeCurrentPage}) => {
    return (
        <>
            <UsersList users={users}/>
            <Paginator totalCount={totalCount} pageSize={pageSize} currentPage={currentPage}
                       changeCurrentPage={changeCurrentPage}/>
        </>
    );
}

export default Users;