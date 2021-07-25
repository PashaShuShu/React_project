import Header from "./Header";
import React from "react";
import { connect } from 'react-redux';
import { setAuthUserData, logoutUser } from '../../redux/auth-reduser';


class HeaderContainer extends React.Component{

    render(){
        return(
            <Header {...this.props}/>
        )
    }
}

const mapStateToProps = (state)=>({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

export default connect(mapStateToProps,{
    logoutUser
})(HeaderContainer);