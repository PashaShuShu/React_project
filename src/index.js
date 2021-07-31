import './index.css';
import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import MainApp from './App';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
    <MainApp/>,
    document.getElementById('root')
);