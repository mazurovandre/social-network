import React from "react";
import {connect} from "react-redux";
import {changeCurrentPageAC, setTotalCountAC, setUsersAC, toggleFollowAC} from "../../redux/usersReducer";
import Users from "./Users";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalCount: state.usersPage.totalCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleFollow: (id) => {
            dispatch(toggleFollowAC(id));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setTotalCount: (totalCount) => {
            dispatch(setTotalCountAC(totalCount));
        },
        changeCurrentPage: (currentPage) => {
            dispatch(changeCurrentPageAC(currentPage));
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;