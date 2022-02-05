import React, {FC, useState} from 'react';
import style from './LoginForm.module.sass'
import {MapDispatchToPropsType as LoginFormType} from "./LoginFormContainer";
import {Checkbox, Form, Input} from 'formik-antd'
import {Formik} from 'formik'
import * as Yup from 'yup';
import {EyeInvisibleOutlined, EyeTwoTone} from "@ant-design/icons/lib";
import {Button} from "antd";


const LoginForm: FC<LoginFormType> = ({loginThunk}) => {

    const [errorText, setErrorText] = useState('');

    const onChange = () => {
        setErrorText('')
    }

    const initialValues = {
        email: '',
        password: ''
    }

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid e-mail format').required('E-mail is required'),
        password: Yup.string().required('Password is required')
    })

    const loginValidation = (value: string) => {
        if (errorText) return errorText
    }

    const loginAsGuest = () => {
        loginThunk({
            email: 'free@samuraijs.com',
            password: 'free'
        }, setErrorText)
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, {setSubmitting}) => {
                setTimeout(() => {
                    loginThunk(values, setErrorText)
                    setSubmitting(false);
                }, 500);
            }}
        >
            {props => (
                <Form className={style.form}>
                    <div className={style.block}>
                        <Form.Item name='email' validate={loginValidation}>
                            <Input name='email' placeholder="Enter e-mail" onChange={onChange} validate={loginValidation}/>
                        </Form.Item>
                    </div>
                    <div className={style.block}>
                        <Form.Item name='password' validate={loginValidation}>
                            <Input.Password validate={loginValidation}
                                name='password' onChange={onChange}
                                placeholder="Enter password"
                                iconRender={visible => (visible ? <EyeTwoTone/> : <EyeInvisibleOutlined/>)}
                            />
                        </Form.Item>

                        <Form.Item name="rememberMe" valuePropName="checked">
                            <Checkbox name="rememberMe">Remember me</Checkbox>
                        </Form.Item>

                    </div>
                    <div className={style.buttons}>
                        <Button htmlType="submit" type='primary' disabled={props.isSubmitting}>Log in</Button>
                        <Button onClick={loginAsGuest} disabled={props.isSubmitting}>Log in as Guest</Button>
                    </div>
                </Form>
            )}

        </Formik>
    );
};

export default LoginForm;