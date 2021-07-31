import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Footer from './components/Footer/Footer';
import Nav from './components/Navbar/Navbar';
import ProfileContainer from './components/Content/Profile/ProfileContainer';
import UsersContainer from './components/Content/Users/UsersContainer';
import { Route, withRouter, BrowserRouter } from 'react-router-dom';
import LoginContainer from './components/Login/LoginContainer';
import { connect, Provider } from 'react-redux';
import React from 'react';
import { compose } from 'redux';
import { initializeApp } from './redux/app-reduser';
import Preloader from './components/Content/common/Preloader/Preloader';
import store from './redux/redux-store';

//! laz components
const Example = React.lazy(() => import('./components/Content/Hooks/Example'));
const DialogsContainer = React.lazy(() => import('./components/Content/Dialogs/DialogsContainer'));


class App extends React.Component {
  componentDidMount() {

    this.props.initializeApp();

  }

  render() {

    /* if (!this.props.initialized) {
      return <Preloader />
    } */
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
          <Route path='/dialogs' render={() => {
            return (
              <React.Suspense fallback={<div>Loading...</div>}>
                <DialogsContainer />
              </React.Suspense>
            )
          }} />
          <Route path='/users' render={() => <UsersContainer />} />
          <Route path='/login' render={() => <LoginContainer />} />
          <Route path='/hooks' render={() => {
            return (
              <React.Suspense fallback={<div>Loading...</div>}>
                <Example />
              </React.Suspense>
            )
          }} />
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


let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }),
)(App);

let MainApp = (props) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  )
}

export default MainApp;