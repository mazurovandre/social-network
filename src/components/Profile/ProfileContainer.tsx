import React, {FC, useEffect} from "react";
import {getUserStatusThunk, getUserThunk, updateUserStatusThunk} from "../../redux/profileReducer";
import {connect} from "react-redux";
import Profile from "./Profile";
import withAuthRedirectComponent from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {ProfilePropsType as MapStateToPropsType} from "../../types/types";
import {AppStateType} from "../../redux/redux-store";

type MapDispatchToPropsType = {
    getUserThunk: (id: number) => void
    getUserStatusThunk: (userId: number) => void
    updateUserStatusThunk: (status: string) => void
}
type OwnPropsType = {
    userId: number
}
type ProfileContainerType = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType

const ProfileContainer:FC<ProfileContainerType> = ({userId, getUserThunk, getUserStatusThunk}) => {

    useEffect(() => {
        getUserThunk(userId);
        getUserStatusThunk(userId)
    }, [getUserThunk, getUserStatusThunk, userId])

    return (
        <Profile />
    );
};

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})

export default compose<React.ComponentType>(
    connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType, AppStateType>
    (mapStateToProps,
    {getUserThunk, getUserStatusThunk, updateUserStatusThunk}),withAuthRedirectComponent)(ProfileContainer);