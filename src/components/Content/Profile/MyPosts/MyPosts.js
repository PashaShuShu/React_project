import classes from "./MyPosts.module.css"
import Post_item from './Post/Post'

const Post = ()=>{
    return(
        <div className="Post">
            <div className={classes.post}>
                <div className={classes.my__post}>
                   <textarea></textarea><br/>
                   <button>Add post</button><br/>
                   <button>Remuve</button>
                </div>
                <div className={classes.posts}>
                   <Post_item name="Jakob" message="hile gidra!!!" likes_count="23"/> 
                   <Post_item name="Anastaisha" message="we are the chempions" likes_count="2"/> 
                   <Post_item /> 
                   <Post_item /> 
                   <Post_item /> 
                   <Post_item /> 
                </div>
            </div>
        </div>
    );
} 

export default Post;