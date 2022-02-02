import {loginThunk} from "../../../redux/authReducer";
import {connect} from "react-redux";
import LoginForm from "./LoginForm";
import {AppStateType} from "../../../redux/redux-store";

export type MapDispatchToPropsType = {
    loginThunk: ({email, password, rememberMe}: any, setErrorMessage: any) => void
}

const LoginFormContainer = connect<{}, MapDispatchToPropsType, {}, AppStateType>(null, {loginThunk})(LoginForm)

export default LoginFormContainer