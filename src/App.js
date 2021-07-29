import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Footer from './components/Footer/Footer';
import Nav from './components/Navbar/Navbar';
import ProfileContainer from './components/Content/Profile/ProfileContainer';
import DialogsContainer from './components/Content/Dialogs/DialogsContainer'
import UsersContainer from './components/Content/Users/UsersContainer';
import { Route, withRouter } from 'react-router-dom';
import LoginContainer from './components/Login/LoginContainer';
import Example from './components/Content/Hooks/Example'
import { connect } from 'react-redux';
import React from 'react';
import { compose } from 'redux';
import { initializeApp } from './redux/app-reduser';
import Preloader from './components/Content/common/Preloader/Preloader';

class App extends React.Component {
  componentDidMount() {

    this.props.initializeApp();

  }

  render() {

    if (!this.props.initialized) {
      return <Preloader />
    }
    return (

      
        <div className="app__wrapper">
          <div className="app__wrapper__header">
            <HeaderContainer />
          </div>
          <div className="app__wrapper__nav">
            <Nav />
          </div>
          <div className="app__wrapper__content">
            <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
            <Route path='/dialogs' render={() => <DialogsContainer />} />
            <Route path='/users' render={() => <UsersContainer />} />
            <Route path='/login' render={() => <LoginContainer />} />
            <Route path='/hooks' render={() => <Example />} />
          </div>
          <div className="app__wrapper__footer">
            <Footer />
          </div>
        </div>
      
    );
  }
}

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }),
)(App);
