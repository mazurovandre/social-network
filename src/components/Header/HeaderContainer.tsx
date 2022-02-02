import Header from "./Header";
import {logoutThunk} from "../../redux/authReducer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";

export type HeaderProps = MapStateToPropsType & MapDispatchToPropsType

type MapStateToPropsType = {
    isAuth: boolean
    login: string | null
}

type MapDispatchToPropsType = {
    logoutThunk: () => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {logoutThunk})(Header);