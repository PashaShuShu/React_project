const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState={
    newPostText: "",
      postsData: [
        { id: 1, name: "Pasha", message: "boo boo bi bi", likes_count: 122 },
        { id: 2, name: "Pasha", message: "ifro frau", likes_count: 233 },
        { id: 3, name: "Pasha", message: "isgold de fag", likes_count: 223 },
        { id: 4, name: "Pasha", message: "de fag", likes_count: 2223 }
      ]
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let lastPost = state.postsData.pop();
            let newPost = {
                id: (lastPost.id + 1),
                name: "Pasha",
                message: state.newPostText,
                likes_count: 0
            };
            state.postsData.push(lastPost);
            state.postsData.push(newPost);
            state.newPostText = "";
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updatePostTextActionCreator = (text) =>
  ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export default profileReducer;