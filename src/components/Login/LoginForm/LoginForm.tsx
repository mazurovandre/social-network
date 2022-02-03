import React, {FC, useState} from "react";
import style from './LoginForm.module.sass'
import {Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import {MapDispatchToPropsType as LoginFormType} from "./LoginFormContainer";

const LoginForm:FC<LoginFormType> = ({loginThunk}) => {

    const [errorStatus, setErrorStatus] = useState('');

    const initialValues = {
        email: '',
        password: ''
    }

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid e-mail format').required('E-mail is required'),
        password: Yup.string().required('Password is required')
    })

    const loginAsGuest = (e: any) => {
        e.preventDefault()
        loginThunk({
            email: 'free@samuraijs.com',
            password: 'free'
        }, setErrorStatus)
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={async (values, {resetForm}) => {
                await new Promise((resolve, reject) => {
                    resolve(loginThunk(values, setErrorStatus))
                    reject(resetForm({values: initialValues}))
                })
            }}
        >
            {props => (
                <Form className={style.form}>
                    <div className={style.block}>
                        <Field type='text' name='email' placeholder='E-mail'/>
                        <p className={style.error_message}>
                            {props.errors.email || errorStatus}
                        </p>
                    </div>
                    <div className={style.block}>
                        <Field type='password' name='password' placeholder='Password'/>
                        <p className={style.error_message}>
                            {props.errors.password || errorStatus}
                        </p>
                    </div>
                    <div className={style.buttons}>
                        <button className={style.login_btn} type="submit" disabled={props.isSubmitting}>Log in</button>
                        <button className={style.guest_btn} onClick={loginAsGuest}
                                disabled={props.isSubmitting}>Log in as Guest</button>
                    </div>

                </Form>
            )}

        </Formik>
    );
};

export default LoginForm;