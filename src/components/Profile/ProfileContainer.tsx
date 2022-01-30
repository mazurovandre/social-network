import React, {FC, useEffect} from "react";
import {getUserStatusThunk, getUserThunk, updateUserStatusThunk} from "../../redux/profileReducer";
import {connect} from "react-redux";
import Profile from "./Profile";
import withAuthRedirectComponent from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {ProfilePropsType} from "../../types/types";
import {AppStateType} from "../../redux/redux-store";

type MapStateToPropsType = LoginIdPropsType & ProfilePropsType
type LoginIdPropsType = {
    loginId: number | null
}
type MapDispatchToPropsType = {
    getUserThunk: (id: number) => void
    getUserStatusThunk: (userId: number) => void
    updateUserStatusThunk: (status: string) => void
}
type OwnPropsType = {
    userId: number
}
type ProfileContainerType = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType

const ProfileContainer:FC<ProfileContainerType> = (props) => {

    useEffect(() => {
        props.getUserThunk(props.userId || props.loginId as number);
        props.getUserStatusThunk(props.userId || props.loginId as number)
    }, [])

    return (
        <Profile />
    );
};

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    loginId: state.auth.userId,
    profile: state.profilePage.profile,
    status: state.profilePage.status
})

export default compose(
    connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType, AppStateType>
    (mapStateToProps,
    {getUserThunk, getUserStatusThunk, updateUserStatusThunk}),withAuthRedirectComponent)(ProfileContainer);