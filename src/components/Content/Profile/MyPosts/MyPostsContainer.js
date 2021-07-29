import { addPost, updatePostText } from '../../../../redux/profile-reducer'
import MyPosts from './MyPosts'
import { connect } from 'react-redux'
import React, { useEffect } from 'react'

const MyPostsContainer = (props) => {
    console.log("rerender")
    return (
        <MyPosts {...props} />
    )
}

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
};

export default connect(mapStateToProps, {
    updatePostText,
    addPost
})(MyPostsContainer);