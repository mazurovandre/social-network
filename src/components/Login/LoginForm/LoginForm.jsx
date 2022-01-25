import React, {useState} from "react";
import style from './LoginForm.module.sass'
import {Field, Form, Formik} from "formik";
import * as Yup from 'yup';

const LoginForm = (props) => {

    const [errorStatus, setErrorStatus] = useState('');

    const initialValues = {
        email: 'free@samuraijs.com',
        password: 'free'
    }

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid e-mail format').required('E-mail is required'),
        password: Yup.string().required('Password is required')
    })

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={async (values, {resetForm}) => {
                await new Promise((resolve, reject) => {
                    resolve(props.loginThunk(values, setErrorStatus))
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
                    <button type="submit" disabled={props.isSubmitting}>Log in</button>
                </Form>
            )}

        </Formik>
    );
};

export default LoginForm;