import { getAuthUserData } from './auth-reduser'

const SET_INITIALIZED = 'SET_INITIALIZED';

let initialState = {
    initialized: false
};

let appReduser = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED:
            
            return {
                ...state,
                initialized: true
            }
        default: return { ...state }
    }
};

export const setInitializedSuccess = () => ({ type: SET_INITIALIZED })

export const initializeApp = () => dispatch => {
    let promise = dispatch(getAuthUserData())
    Promise.all([promise]).then(() => {
        
        dispatch(setInitializedSuccess())
    });

}

export default appReduser;