const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

let initialState = {
    newPostText: '',
    profile: null,
    postsData: [
        { id: 1, name: "Pasha", message: "boo boo bi bi", likes_count: 122 },
        { id: 2, name: "Pasha", message: "ifro frau", likes_count: 233 },
        { id: 3, name: "Pasha", message: "isgold de fag", likes_count: 223 },
        { id: 4, name: "Pasha", message: "de fag", likes_count: 2223 }
    ]
}

const profileReducer = (state = initialState, action) => {
    let stateCopy = { ...state };
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
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updatePostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile})

export default profileReducer;