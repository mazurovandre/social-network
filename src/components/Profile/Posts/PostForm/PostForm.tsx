import React, {FC} from 'react';
import style from "./PostForm.module.sass";
import {Field, Form, Formik} from "formik";
import Button from 'antd/lib/button/button';
import SendOutlined from '@ant-design/icons/lib/icons/SendOutlined';

type PostFormType = {
    addPost: (text: string) => void
}

const PostForm:FC<PostFormType> = ({addPost}) => {

    const initialValues = {
        text: ''
    }

    return (
            <Formik
                initialValues={initialValues}
                onSubmit={(values, {resetForm}) => {
                    addPost(values.text);
                    resetForm({values: initialValues})
                }}>
                <Form className={style.form}>
                    <h5 className={style.title}>My posts:</h5>
                    <Field className={style.textarea} name='text' component='textarea' placeholder="Write what's on your mind"/>
                    <div className={style.post}>
                        <Button htmlType='submit' type='primary'>
                            <SendOutlined /> Post
                        </Button>
                    </div>
                </Form>
            </Formik>
    );
};

export default PostForm;