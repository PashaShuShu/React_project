import classes from "./MyPosts.module.css"
import Post_item from './Post/Post'
import React from 'react'
import MyPostForm from './Forms/MyPostForm'

const MyPosts = (props) => {
    
    let postsItem = props.posts.map(el => {
        return <Post_item name={el.name} key={el.id} message={el.message} likes_count={el.likes_count} />
    })
    postsItem.reverse();

    return (
        <div className="Post">
            <div className={classes.post}>
                <div className={classes.my__post}>
                    <MyPostForm addPost={props.addPost} updatePostText={props.updatePostText} />
                </div>
                <div className={classes.posts}>
                    {postsItem}
                </div>
            </div>
        </div>
    );
}



export default MyPosts;