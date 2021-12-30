import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {setUsersActionCreator, toggleFollowActionCreator} from "../../redux/usersReducer";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleFollow: (id) => {
            dispatch(toggleFollowActionCreator(id));
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users));
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;