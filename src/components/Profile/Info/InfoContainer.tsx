import {connect} from "react-redux";
import Info from "./Info";
import {updateUserStatusThunk} from "../../../redux/profileReducer";
import {AppStateType} from "../../../redux/redux-store";
import {UserInfoType} from "../../../types/types";

export type InfoProps = MapStateToPropsType & MapDispatchToPropsType;

type MapStateToPropsType = {
    profile: UserInfoType
    status: string
}

type MapDispatchToPropsType = {
    updateUserStatusThunk: (status: string) => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}

const InfoContainer = connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {updateUserStatusThunk})(Info)

export default InfoContainer;