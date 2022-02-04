import React, {FC, useEffect} from "react";
import {connect} from "react-redux";
import {getUsersThunk, toggleFollowThunk} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import withAuthRedirectComponent from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getUsersTotalCount,
    getUsers,
    getUsersPageSize,
    getUsersCurrentPage,
    getUsersIsFetching,
} from "../../redux/usersSelectors";
import {AppStateType} from "../../redux/redux-store";
import {UserType} from "../../types/types";

export type UsersContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

type MapStateToPropsType = {
    users: Array<UserType>
    totalCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    isFollowing: Array<number>
}

type MapDispatchToPropsType = {
    getUsersThunk: (currentPage: number, pageSize: number) => void
    toggleFollowThunk: (id: number, isFollow: boolean) => void
}

const UsersContainer: FC<UsersContainerPropsType> = ({users, totalCount,
                                                    pageSize, currentPage,
                                                    isFetching, getUsersThunk,}) => {

    useEffect(() => {
        getUsersThunk(currentPage, pageSize);
    }, [])

    const changeCurrentPage = (currentPage: number) => {
        getUsersThunk(currentPage, pageSize);
    }

    return (
        <>
            <Users totalCount={totalCount}
                   pageSize={pageSize}
                   currentPage={currentPage}
                   users={users}
                   changeCurrentPage={changeCurrentPage}/>
            {isFetching && <Preloader/>}
        </>
    );
};

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: getUsers(state),
        totalCount: getUsersTotalCount(state),
        pageSize: getUsersPageSize(state),
        currentPage: getUsersCurrentPage(state),
        isFetching: getUsersIsFetching(state),
        isFollowing: [...state.usersPage.isFollowing]
    }
}

export default compose<React.ComponentType>(
    connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>
    (mapStateToProps, {getUsersThunk, toggleFollowThunk}), withAuthRedirectComponent)(UsersContainer)

