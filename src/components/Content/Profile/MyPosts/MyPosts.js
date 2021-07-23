import classes from "./MyPosts.module.css"
import Post_item from './Post/Post'
import React from 'react'

const MyPosts = (props) => {
    let postsItem = props.posts.map(el => {
        return <Post_item name={el.name} key={el.id} message={el.message} likes_count={el.likes_count} />
    })
    postsItem.reverse();

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className="Post">
            <div className={classes.post}>
                <div className={classes.my__post}>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} /><br />
                    <button onClick={addPost}>Add post</button><br />
                </div>
                <div className={classes.posts}>
                    {postsItem}
                </div>
            </div>
        </div>
    );
}

export default MyPosts;