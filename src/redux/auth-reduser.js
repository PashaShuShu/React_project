import { userAPI, loginAPI } from './../api/api';

const SET_AUTH_USER_DATA = 'SET-AUTH-USET-DATA';
const SET_USER_LOGDATA_ERROR = 'SET-USER-LOGDATA-ERROR';
const SET_CAPTCHA_URL = 'SET-USER-CAPTCHA-URL';


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    error: null,
    protection: {
        captchaURL: "",

    }
}


const authReduser = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.payload,
                error: null,
                captcha: "",
            }
        case SET_USER_LOGDATA_ERROR:
            return {
                ...state,
                error: action.error,
                captcha: "",
            }
        case SET_CAPTCHA_URL:
            return {
                ...state,
                protection: {
                    ...state.protection,
                    captchaURL: action.url
                }
            }
        default:
            return state;
    }
}


export const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_AUTH_USER_DATA, payload: { userId, email, login, isAuth } });
export const setUserLogdataError = (text) => ({ type: SET_USER_LOGDATA_ERROR, error: text })
export const setCaptchaURL = (url) => ({ type: SET_CAPTCHA_URL, url });


export const getAuthUserData = () => async dispatch => {
    let response = await userAPI.authMe();

    if (response.resultCode === 0) {
        let { id, email, login } = response.data;
        dispatch(setAuthUserData(id, email, login, true));
    }

}

export const loginUser = (login, password, rememberMe, captcha) => async dispatch => {
    let response = await loginAPI.loginUser(login, password, rememberMe, captcha)

    if (response.data.resultCode === 0) {
        console.log("success");
        dispatch(getAuthUserData());
    } else if (response.data.resultCode === 10) {
        dispatch(getCaptchaURL());
    } else {
        let message = response.data.messages.length > 0 ?
            response.data.messages[0]
            :
            "some error";
        dispatch(setUserLogdataError(message))
    }


}
export const logoutUser = () => async dispatch => {
    let response = await loginAPI.logoutUser()

    if (response.data.resultCode === 0) {
        console.log("EXIT")
        dispatch(setAuthUserData(null, null, null, false))
    }

}
export const getCaptchaURL = () => async dispatch => {
    let response = await loginAPI.getCaptcha()
    
    let captcha = response.data.url;
    dispatch(setCaptchaURL(captcha));

}

export default authReduser;