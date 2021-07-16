import { userAPI } from './../api/api';

const SET_AUTH_USER_DATA = 'SET-AUTH-USET-DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,
}

const authReduser = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true,
            }
        default:
            return state;
    }
}

export const setAuthUserDataSuccess = (userId, email, login) => ({type: SET_AUTH_USER_DATA, data:{userId, email, login}});

export const setAuthUserData = () => {
    return (dispatch) => {
        userAPI.authMe().then(data => {
            if(data.resultCode === 0){
                let {id, email, login} = data.data;
                dispatch(setAuthUserDataSuccess(id, email, login));
            }
        });
    }
}

export default authReduser;