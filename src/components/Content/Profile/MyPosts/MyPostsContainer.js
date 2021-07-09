import React from 'react'
import { addPostActionCreator, updatePostTextActionCreator } from '../../../../redux/profile-reducer'
import MyPosts from './MyPosts'

const MyPostContainer = (props) => {
    let state = props.store.getState();

    let addPost = () => {
        let action = addPostActionCreator();
        props.store.dispatch(action);
    }

    let onPostChange = (text) => {
        let action = updatePostTextActionCreator(text)
        props.store.dispatch(action);

    }

    return (
        <MyPosts
            addPost={addPost}
            updateNewPostText={onPostChange}
            posts = {state.profilePage.postsData}
            newPostText = {state.profilePage.newPostText}
        />
    );
}

export default MyPostContainer;