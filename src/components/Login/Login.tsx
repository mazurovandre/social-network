import React, {FC} from "react";
import style from './Login.module.sass'
import LoginFormContainer from "./LoginForm/LoginFormContainer";

const Login:FC = () => {
    return (
        <div className={style.form}>
            <h2 className={style.title}>Please, log in!</h2>
            <LoginFormContainer/>
        </div>
    )
};

export default Login