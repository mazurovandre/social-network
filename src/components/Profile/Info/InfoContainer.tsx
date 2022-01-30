import {connect} from "react-redux";
import Info from "./Info";
import {updateUserStatusThunk} from "../../../redux/profileReducer";
import {AppStateType} from "../../../redux/redux-store";
import {UserInfoType} from "../../../types/types";

export type InfoProps = MapStateToProps & MapDispatchToProps;

type MapStateToProps = {
    profile: UserInfoType
    status: string
}

type MapDispatchToProps = {
    updateUserStatusThunk: (status: string) => void
}

const mapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}

const InfoContainer = connect<MapStateToProps, MapDispatchToProps, {}, AppStateType>(mapStateToProps, {updateUserStatusThunk})(Info)

export default InfoContainer;