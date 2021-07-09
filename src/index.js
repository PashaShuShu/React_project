import './index.css';
import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


let renderEntireTree = (state) => {

    ReactDOM.render(
        <React.StrictMode>
            <App store={store}/>
        </React.StrictMode>,
        document.getElementById('root')
    );

}

renderEntireTree(store.getState());

store.subscribe(()=>{
    let state = store.getState();
    renderEntireTree(state);
});