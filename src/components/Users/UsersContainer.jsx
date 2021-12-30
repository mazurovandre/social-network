import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {toggleFollowActionCreator} from "../../redux/usersReducer";

const mapStateToProps = (state) => {
    return {
        usersData: state.usersPage.usersData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleFollow: (id) => {
            dispatch(toggleFollowActionCreator(id));
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;