import React from "react";
import {loginThunk} from "../../../redux/authReducer";
import {connect} from "react-redux";
import LoginForm from "./LoginForm";

const LoginFormContainer = connect(null, {loginThunk})(LoginForm)

export default LoginFormContainer