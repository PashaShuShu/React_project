import { Form, Field } from "react-final-form"
import { requiredField } from './../../utils/validators/validators';


const LoginForm = ({ loginUser, error, captchaURL }) => {
    const onSubmit = async values => {
        loginUser(values.login, values.password, values.rememberMe, values.captcha)
        if (error) {
            return { login: error }
        }
    }
    return (
        <Form
            onSubmit={onSubmit}
            validate={requiredField}
            render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>

                    <Field name="login">
                        {({ input, meta }) => (
                            <div>
                                <input {...input} type="text" placeholder="login" />
                                {(meta.error || meta.submitError) && meta.touched && <span>{meta.error || meta.submitError}</span>}
                            </div>
                        )}
                    </Field>

                    <Field name="password">
                        {({ input, meta }) => (
                            <div>
                                <input {...input} type="password" placeholder="Password" />
                                {meta.error && meta.touched && <span>{meta.error}</span>}
                            </div>
                        )}
                    </Field>
                    {captchaURL ?
                        <div>
                            <img src={captchaURL}></img>
                            <div>
                                <Field name="captcha" type="text" component="input" />
                            </div>
                        </div>
                        : null
                    }
                    <div>
                        <Field name="rememberMe" component="input" type="checkbox" />
                        <supn>remember me</supn>
                    </div>
                    <button type="submit"> log in </button>
                </form>
            )
            } />
    )
}

export default LoginForm;