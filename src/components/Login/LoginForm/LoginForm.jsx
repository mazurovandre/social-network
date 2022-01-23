import React, {useState} from "react";
import style from './LoginForm.module.sass'
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup';


const LoginForm = (props) => {

    const [errorStatus, setErrorStatus] = useState('');

    const initialValues = {
        email: 'mazurovandre@gmail.com',
        password: 'kamasutra123'
    }

    const validateLogin = () => {
        if (errorStatus) {
            return errorStatus;
        }
    }

    const onSubmit = values => {
        props.loginThunk(values, setErrorStatus);
    }

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid e-mail format').required('E-mail is required'),
        password: Yup.string().required('Password is required')
    })

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}

        >
            <Form className={style.form}>
                <div className={style.block}>
                    <Field type='text' name='email' placeholder='E-mail'/>
                    <p className={style.error_message}>
                        {errorStatus}
                        <ErrorMessage name='email'/>
                    </p>
                </div>
                <div className={style.block}>
                    <Field type='password' name='password' placeholder='Password'/>
                    <p className={style.error_message}>
                        {errorStatus}
                        <ErrorMessage name='password'/>
                    </p>
                </div>
                <button type="submit">Log in</button>
            </Form>
        </Formik>
    );
};

export default LoginForm;


/*
const initialValues = {
    name: '',
    email: '',
    channel: ''
}

const onSubmit = values => {
    console.log(values);
}

const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email format').required('Required'),
    channel: Yup.string().required('Required')
})
*/


/*const LoginForm = () => {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            <Form className={style.form}>
                <div className={style.block}>
                    <label htmlFor="name">Name</label>
                    <Field
                        type="text"
                        id="name"
                        name="name"
                    />
                    <ErrorMessage component='p' name='name' className={style.error_message}/>
                </div>

                <div className={style.block}>
                    <label htmlFor="email">E-mail</label>
                    <Field
                        type="email"
                        id='email'
                        name='email'
                    />
                    <ErrorMessage component='p' name='email' className={style.error_message}/>
                </div>

                <div className={style.block}>
                    <label htmlFor='channel'>Channel</label>
                    <Field
                        type='text'
                        id='channel'
                        name='channel'
                    />
                    <ErrorMessage component='p' name='channel' className={style.error_message}/>
                </div>

                <button type='submit'>Submit</button>
            </Form>

        </Formik>
    );
};*/


/*
const LoginForm = (props) => {
    return (
        <Formik
            initialValues={{ email: 'mazurovandre@gmail.com', password: 'kamasutra123', isRemembered: false }}
            validate={values => {
                const errors = {};
                if (!values.email) {
                    errors.email = 'E-mail is required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid e-mail address';
                }
                if (!values.password) {
                    errors.password = 'Password is required'
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                props.loginThunk(values.email, values.password, values.isRemembered)
            }}
        >
            {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  /!* and other goodies *!/
              }) => (
                <form onSubmit={handleSubmit} className={style.form}>
                    <div className={style.block}>
                        <input
                            type="email"
                            name="email"
                            placeholder='e-mail'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                        />
                        <p className={style.error_message}>
                            {errors.email && touched.email && errors.email}
                        </p>
                    </div>
                    <div className={style.block}>
                        <input
                            type="password"
                            name="password"
                            placeholder='password'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                        />
                        <p className={style.error_message}>
                            {errors.password && touched.password && errors.password}
                        </p>
                    </div>
                    <p className={style.label}>
                        <input type="checkbox"
                               name='rememberMe'
                               id='remember'
                               onChange={handleChange}
                               value={values.isRemembered}/>
                        <label htmlFor="remember">Remember me</label>
                    </p>
                    <button type="submit" disabled={isSubmitting}>Log in</button>
                </form>
            )}
        </Formik>
    )
}*/


// const initialValues = {
//     name: '',
//     email: '',
//     channel: ''
// }
//
// const onSubmit = values => {
//     console.log(values);
// }
//
// const validate = values => {
//     let errors = {}
//
//     if (!values.name) {
//         errors.name = 'Required'
//     }
//
//     if (!values.email) {
//         errors.email = 'Required'
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
//         errors.email = 'Invalid email format'
//     }
//
//     if (!values.channel) {
//         errors.channel = 'Required'
//     }
//
//     return errors
// }
//
// const LoginForm = () => {
//
//     const formik = useFormik({
//         initialValues,
//         onSubmit,
//         validate
//     })
//
//     console.log(formik.touched)
//
//     return (
//         <div>
//             <form onSubmit={formik.handleSubmit} className={style.form}>
//                 <div className={style.block}>
//                     <label htmlFor="name">Name</label>
//                     <input
//                         type="text"
//                         id="name"
//                         name="name"
//                         onChange={formik.handleChange}
//                         onBlur={formik.handleBlur}
//                         value={formik.values.name}
//                     />
//                     {formik.touched.name && formik.errors.name ? <p className={style.error_message}>{formik.errors.name}</p> : null}
//                 </div>
//
//                 <div className={style.block}>
//                     <label htmlFor="email">E-mail</label>
//                     <input
//                         type="email"
//                         id='email'
//                         name='email'
//                         onChange={formik.handleChange}
//                         onBlur={formik.handleBlur}
//                         value={formik.values.email}
//                     />
//                     {formik.touched.email && formik.errors.email ? <p className={style.error_message}>{formik.errors.email}</p> : null}
//                 </div>
//
//                 <div className={style.block}>
//                     <label htmlFor='channel'>Channel</label>
//                     <input
//                         type='text'
//                         id='channel'
//                         name='channel'
//                         onChange={formik.handleChange}
//                         onBlur={formik.handleBlur}
//                         value={formik.values.channel}
//                     />
//                     {formik.touched.channel && formik.errors.channel ? <p className={style.error_message}>{formik.errors.channel}</p> : null}
//                 </div>
//
//                 <button type='submit'>Submit</button>
//             </form>
//
//         </div>
//     );
// };
//
// export default LoginForm