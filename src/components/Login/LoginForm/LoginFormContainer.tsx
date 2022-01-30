import {loginThunk} from "../../../redux/authReducer.ts";
import {connect} from "react-redux";
import LoginForm from "./LoginForm";

const LoginFormContainer = connect(null, {loginThunk})(LoginForm)

export default LoginFormContainer