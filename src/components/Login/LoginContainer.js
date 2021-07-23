import React from "react";
import { loginUser } from "../../redux/auth-reduser";
import { connect } from "react-redux";
import Login from './Login';

class LoginContainer extends React.Component {
    render() {
        return(
            <>
                <Login isAuth ={this.props.isAuth} loginUser={this.props.loginUser}/>
            </>
        )
    }
}

let mapStateToProps = (state) => { 
    return {
        isAuth: state.auth.isAuth
    }
};

export default connect(mapStateToProps, {
    loginUser,
})(LoginContainer);