import { profileAPI } from '../api/api';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_NEW_STATUS_TEXT = 'SET-NEW-STATUS-TEXT';
const UPLOAD_PHOTO_SUCCESS = 'UPLOAD-PHOTO-SUCCESS';

let initialState = {
    newPostText: '',
    profile: null,
    status: "",
    postsData: [
        { id: 1, name: "Pasha", message: "boo boo bi bi", likes_count: 122 },
        { id: 2, name: "Pasha", message: "ifro frau", likes_count: 233 },
        { id: 3, name: "Pasha", message: "isgold de fag", likes_count: 223 },
        { id: 4, name: "Pasha", message: "de fag", likes_count: 2223 }
    ]
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return ({
                ...state,
                newPostText: "",
                postsData: [...state.postsData, {
                    id: (state.postsData.length + 1),
                    name: "Pasha",
                    message: state.newPostText,
                    likes_count: 0
                }]
            });
        }
        case UPDATE_NEW_POST_TEXT: {
            return ({
                ...state,
                newPostText: action.newText
            });
        }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile,
            }
        case SET_NEW_STATUS_TEXT:
            return {
                ...state,
                status: action.text
            }
        case UPLOAD_PHOTO_SUCCESS:
            return{
                ...state,
                profile: {...state.profile, photos: action.photo}
            }
        default:
            return state;
    }
}

export const addPost = () => ({ type: ADD_POST })
export const updatePostText = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })
export const setUserProfileSuccess = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setNewStatsText = (text) => ({ type: SET_NEW_STATUS_TEXT, text })
export const uploadPhotoSuccess = (photo) => ({type: UPLOAD_PHOTO_SUCCESS, photo})


export const getUserProfile = (userId = 2) => {
    return ((dispatch) => {

        profileAPI.getUserProfile(userId).then(data => {
            dispatch(setUserProfileSuccess(data))
        });

    })
}

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getUserStatus(userId)
        .then(response => {
            dispatch(setNewStatsText(response.data))
        })
}

export const updateStatus = (text) => (dispatch) => {
    profileAPI.putUserStatus(text)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setNewStatsText(text))
            }
        })
}

export const uploadPhoto = (photo) => async dispatch => {
    let response = await profileAPI.putPhoto(photo)
    if (response.data.resultCode === 0) {
        dispatch(setNewStatsText(response.data.data.photos.small))
        return("succsess")
    }
    return(response.data.messages[0]);
}

export default profileReducer;