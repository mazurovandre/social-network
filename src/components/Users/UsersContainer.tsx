import React, {FC, useEffect, useState} from "react";
import {connect} from "react-redux";
import {getUsersThunk, toggleFollowThunk} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import withAuthRedirectComponent from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getUsersTotalCount,
    getUsers
} from "../../redux/usersSelectors";
import {AppStateType} from "../../redux/redux-store";
import {UserType} from "../../types/types";

type UsersContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

export type MapStateToPropsType = {
    totalCount: number
    users: Array<UserType>
    followingUsers: Array<number>
}


type MapDispatchToPropsType = {
    getUsersThunk: (currentPage: number, pageSize: number) => void
    toggleFollowThunk: (id: number, isFollow: boolean) => void
}

const UsersContainer: FC<UsersContainerPropsType> = ({users, totalCount, getUsersThunk, toggleFollowThunk, followingUsers}) => {

    const [currentPage, setCurrentPage] = useState(1)
    const [pageSize, setPageSize] = useState(10)

    useEffect(() => {
        getUsersThunk(currentPage, pageSize);
    }, [currentPage, pageSize])

    const changeCurrentPage = (currentPage: number) => {
        setCurrentPage(currentPage)
    }

    const changePageSize = (pageSize: number) => {
        setPageSize(pageSize)
    }

    const toggleFollowUser = (id: number, isFollow: boolean) => {
        toggleFollowThunk(id, isFollow);
    }

    return (
        <>
            <Users totalCount={totalCount}
                   pageSize={pageSize}
                   users={users}
                   currentPage={currentPage}
                   followingUsers={followingUsers}
                   changeCurrentPage={changeCurrentPage}
                   changePageSize={changePageSize}
                   toggleFollowUser={toggleFollowUser}
            />
            {!users && <Preloader/>}
        </>
    );
};

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: getUsers(state),
        totalCount: getUsersTotalCount(state),
        followingUsers: [...state.usersPage.followingUsers]
    }
}

export default compose<React.ComponentType>(
    connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>
    (mapStateToProps, {getUsersThunk, toggleFollowThunk}), withAuthRedirectComponent)(UsersContainer)

