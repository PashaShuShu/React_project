import classes from "./MyPosts.module.css"
import Post_item from './Post/Post'
import React from 'react'
import { addPostActionCreator, updatePostTextActionCreator} from '../../../../redux/profile-reducer'

const MyPost = (props) => {
    let postsItem = props.profilePage.postsData.map(el => {
        return <Post_item name={el.name} message={el.message} likes_count={el.likes_count} />
    })
    postsItem.reverse();

    let newPostElement = React.createRef();

    let addPost = () => {
        let action = addPostActionCreator();
        props.dispatch(action);
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updatePostTextActionCreator(text)
        props.dispatch(action);
    }

    return (
        <div className="Post">
            <div className={classes.post}>
                <div className={classes.my__post}>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.profilePage.newPostText} /><br />
                    <button onClick={addPost}>Add post</button><br />
                </div>
                <div className={classes.posts}>
                    {postsItem}
                </div>
            </div>
        </div>
    );
}

export default MyPost;