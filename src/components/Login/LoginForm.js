import { Form, Field } from "react-final-form"
import { requiredField } from './../../utils/validators/validators';

const LoginForm = (props) => {
    const onSubmit = (e) => {
        props.loginUser(e.login, e.password, e.rememberMe);
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
                                {meta.error && meta.touched && <span>{meta.error}</span>}
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