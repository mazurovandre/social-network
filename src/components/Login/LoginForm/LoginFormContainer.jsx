import React from "react";
import {loginThunk} from "../../../redux/authReducer";
import {connect} from "react-redux";
import LoginForm from "./LoginForm";

const mapStateToProps = () => {
    return {}
}

const LoginFormContainer = connect(mapStateToProps, {loginThunk})(LoginForm)

export default LoginFormContainer