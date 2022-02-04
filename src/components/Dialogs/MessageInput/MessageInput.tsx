import React, {FC} from "react";
import style from './MessageInput.module.sass';
import {Field, Form, Formik} from "formik";
import Button from "antd/lib/button/button";
import SendOutlined from "@ant-design/icons/lib/icons/SendOutlined";


type MessageInputPropsType = {
    id: number | null
    sentMessage: (index: number, text: string) => void
}

const MessageInput:FC<MessageInputPropsType> = ({id, sentMessage}) => {
    const idNumber = Number(id) - 1;

    const initialValues = {
        text: ''
    }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={(values, {resetForm}) => {
                sentMessage(idNumber, values.text);
                resetForm({values: initialValues})
            }}>
            {id && <Form className={style.form}>
                <Field className={style.input} name='text'/>
                <Button className={style.btn} htmlType='submit' type='primary'>
                    <SendOutlined /> Sent
                </Button>
            </Form>}
        </Formik>
    )
}

export default MessageInput;