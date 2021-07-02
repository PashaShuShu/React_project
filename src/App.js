import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/NavBar';
import Content from './components/Content';

const App = ()=> {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
