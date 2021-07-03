import classes from './App.module.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Nav from './components/Navbar/Navbar';
import Profile from './components/Content/Profile/Profile';
import Dialogs from './components/Content/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';


const App = ()=> {
  return (
    <BrowserRouter>
      <div className={classes.app__wrapper}>
        <div className={classes.app__wrapper__header}>
          <Header />
        </div>
        <div className={classes.app__wrapper__nav}>
          <Nav />
        </div>
        <div className={classes.app__wrapper__content}>
          <Route path='/profile' component={Profile} />
          <Route path='/dialogs' component={Dialogs} />
        </div>
        <div className={classes.app__wrapper__footer}>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
