import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Nav from './components/Navbar/Navbar';
import Profile from './components/Content/Profile/Profile';
import Dialogs from './components/Content/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';


const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app__wrapper">
        <div className="app__wrapper__header">
          <Header />
        </div>
        <div className="app__wrapper__nav">
          <Nav />
        </div>
        <div className="app__wrapper__content">
          <Route path='/profile' render={() => <Profile
            dispatch={props.dispatch}
            profilePage={props.state.profilePage}
          />} />
          <Route path='/dialogs' render={() => <Dialogs
            dispatch={props.dispatch}
            dialogsPage={props.state.dialogsPage}
          />} />
        </div>
        <div className="app__wrapper__footer">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
