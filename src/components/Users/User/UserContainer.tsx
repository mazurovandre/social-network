import React, {FC} from "react";
import {connect} from "react-redux";
import {toggleFollowThunk} from "../../../redux/usersReducer";
import User from "./User";
import {AppStateType} from "../../../redux/redux-store";
import {UserType as OwnPropsType}  from "../../../types/types";

export type UserContainerProps = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType;

type MapStateToPropsType = {
    isFollowing: Array<number>
}

type MapDispatchToPropsType = {
    toggleFollowThunk: (id: number, isFollow: boolean) => void
}

const UserContainer:FC<UserContainerProps> = (props) => {
    return <User {...props}/>
}

const mapStateToProps = (state: AppStateType) => {
    return {
        isFollowing: [...state.usersPage.isFollowing]
    }
}

export default connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType, AppStateType>(mapStateToProps, {toggleFollowThunk})(UserContainer);