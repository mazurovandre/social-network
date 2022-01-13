import React from "react";
import style from './Login.module.sass'
import LoginFormContainer from "./LoginForm/LoginFormContainer";

const Login = () => {
    return (
        <>
            <h2 className={style.title}>Please, log in!</h2>
            <LoginFormContainer className={style.form}/>
            <div className={style.test_info}>
                <h4>Test account:</h4>
                <p>E-mail: mazurovandre@gmail.com</p>
                {/*<p>E-mail: free@samuraijs.com</p>*/}
                <p>Password: kamasutra123</p>
                {/*<p>Password: free</p>*/}
            </div>
        </>
    )
};

export default Login