import { addPostActionCreator, updatePostTextActionCreator } from '../../../../redux/profile-reducer'
import MyPosts from './MyPosts'
import { connect } from 'react-redux'


let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        updateNewPostText: (text) => {
            dispatch(updatePostTextActionCreator(text));        
        },
    }
}

const MyPostContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);

export default MyPostContainer;