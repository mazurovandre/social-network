import React, {FC, useEffect} from "react";
import {getUserStatusThunk, getUserThunk, updateUserStatusThunk} from "../../redux/profileReducer";
import {connect} from "react-redux";
import Profile from "./Profile";
import withAuthRedirectComponent from "../../hoc/withAuthRedirect";
import {compose} from "redux";
// import {ProfilePropsType as MapStateToPropsType, UserInfoType} from "../../types/types";
import {AppStateType} from "../../redux/redux-store";
import {UserInfoType} from "../../types/types";


type MapStateToPropsType = {
    loginId: number | null
    profile: UserInfoType
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

const ProfileContainer:FC<ProfileContainerType> = ({userId, loginId, getUserThunk, getUserStatusThunk}) => {

    const isMyPage = userId === loginId

    useEffect(() => {
        getUserThunk(userId);
        getUserStatusThunk(userId)
    }, [getUserThunk, getUserStatusThunk, userId])

    return (
        <Profile isMyPage={isMyPage}/>
    );
};

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    loginId: state.auth.userId,
    profile: state.profilePage.profile
})

export default compose<React.ComponentType>(
    connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType, AppStateType>
    (mapStateToProps,
    {getUserThunk, getUserStatusThunk, updateUserStatusThunk}),withAuthRedirectComponent)(ProfileContainer);