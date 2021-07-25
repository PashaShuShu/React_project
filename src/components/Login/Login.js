import LoginForm from "./LoginForm";
import { Redirect } from 'react-router-dom';

const Login = (props) => {
    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginForm
                captchaURL={props.captchaURL}
                error={props.error}
                loginUser={props.loginUser}
            />
        </div>
    )
}

export default Login;