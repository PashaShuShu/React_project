
import { applyMiddleware, combineReducers, createStore } from "redux";
import authReduser from "./auth-reduser";
import dialogReducer from './dialog-reducer';
import profileReducer from './profile-reducer';
import sidebarReducer from './sidebar-reducer';
import usersReducer from './users-reducer';
import thunkMiddleware from 'redux-thunk';
import appReduser from './app-reduser';


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReduser,
    app: appReduser,

})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));


export default store;