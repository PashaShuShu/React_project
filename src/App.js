import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Nav from './components/Navbar/Navbar';
import ProfileContainer from './components/Content/Profile/ProfileContainer';
import DialogsContainer from './components/Content/Dialogs/DialogsContainer'
import UsersContainer from './components/Content/Users/UsersContainer';
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
          <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
          <Route path='/dialogs' render={() => <DialogsContainer />} />
          <Route path='/friends' render={()=><UsersContainer />}/>
        </div>
        <div className="app__wrapper__footer">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
