import Header from "./Header";
import {logoutThunk} from "../../redux/authReducer";
import {connect} from "react-redux";

export interface HeaderProps {
    isAuth: boolean
    login: string | null
}

const mapStateToProps = (state: any): HeaderProps => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export default connect(mapStateToProps, {logoutThunk})(Header);