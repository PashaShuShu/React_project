import { addPost, updatePostText } from '../../../../redux/profile-reducer'
import MyPosts from './MyPosts'
import { connect } from 'react-redux'


let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
};

const MyPostContainer = connect(mapStateToProps,{
    updatePostText,
    addPost
})(MyPosts);

export default MyPostContainer;