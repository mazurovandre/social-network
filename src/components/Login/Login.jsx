import React from "react";
import style from './Login.module.sass'
import LoginFormContainer from "./LoginForm/LoginFormContainer";

const Login = () => {
    return (
        <>
            <h2 className={style.title}>Please, log in!</h2>
            <LoginFormContainer className={style.form}/>
        </>
    )
};

export default Login