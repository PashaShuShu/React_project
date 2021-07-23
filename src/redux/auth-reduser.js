import { userAPI, loginAPI } from './../api/api';

const SET_AUTH_USER_DATA = 'SET-AUTH-USET-DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
}

const authReduser = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state;
    }
}

export const setAuthUserDataSuccess = (userId, email, login, isAuth) => 
({ type: SET_AUTH_USER_DATA, payload: { userId, email, login, isAuth} });

export const setAuthUserData = () => {
    return (dispatch) => {
        userAPI.authMe().then(data => {
            if (data.resultCode === 0) {
                let { id, email, login } = data.data;
                dispatch(setAuthUserDataSuccess(id, email, login, true));
            }
        });
    }
}
export const loginUser = (login, password, rememberMe) => dispatch => {
    loginAPI.loginUser(login, password, rememberMe).then(response => {
        if (response.data.resultCode === 0) {
            console.log("success");

            userAPI.authMe().then(data => {
                if (data.resultCode === 0) {
                    let { id, email, login } = data.data;
                    dispatch(setAuthUserDataSuccess(id, email, login, true));
                }
            });

        }
    })
}

export const logoutUser = () => dispatch => {
    loginAPI.logoutUser().then(response => {
        if (response.data.resultCode === 0) {
            console.log("EXIT")
            dispatch(setAuthUserDataSuccess(null, null, null, false))
        }
    })
}

export default authReduser;