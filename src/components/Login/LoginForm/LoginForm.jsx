import React from "react";
import style from './LoginForm.module.sass'
import {Formik} from "formik";

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
                  /* and other goodies */
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
}

export default LoginForm