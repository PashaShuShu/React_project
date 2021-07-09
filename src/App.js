import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Nav from './components/Navbar/Navbar';
import Profile from './components/Content/Profile/Profile';
import { BrowserRouter, Route } from 'react-router-dom';
import DialogsContainer from './components/Content/Dialogs/DialogsContainer';


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
            store={props.store}
          />} />
          <Route path='/dialogs' render={() => <DialogsContainer
            store={props.store}
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
