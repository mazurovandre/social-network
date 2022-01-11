import React from "react";
import style from './Login.module.sass'
import { Form, Field } from 'react-final-form'

const Login = () => {
    const onSubmit = () => {
        console.log('SUBMIIIIT!')
    }

    const validate = () => {
        console.log('VALIDATE!!')
    }

    return (
        <Form
            onSubmit={onSubmit}
            validate={validate}
            render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                    <h1 className={style.title}>Authorize</h1>
                    <h2>Simple Default Input</h2>
                    <div>
                        <label>First Name</label>
                        <Field name="firstName" component="input" placeholder="First Name" />
                    </div>

                    <h2>An Arbitrary Reusable Input Component</h2>
                    <div>
                        <label>Interests</label>
                        {/*<Field name="interests" component={InterestPicker} />*/}
                    </div>

                    <h2>Render Function</h2>
                    <Field
                        name="bio"
                        render={({ input, meta }) => (
                            <div>
                                <label>Bio</label>
                                <textarea {...input} />
                                {meta.touched && meta.error && <span>{meta.error}</span>}
                            </div>
                        )}
                    />

                    <h2>Render Function as Children</h2>
                    <Field name="phone">
                        {({ input, meta }) => (
                            <div>
                                <label>Phone</label>
                                <input type="text" {...input} placeholder="Phone" />
                                {meta.touched && meta.error && <span>{meta.error}</span>}
                            </div>
                        )}
                    </Field>

                    <button type="submit">Submit</button>
                </form>
            )}
        />
    )
}

export default Login