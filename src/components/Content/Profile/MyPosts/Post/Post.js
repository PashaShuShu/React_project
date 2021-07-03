import classes from "./Post.module.css"

const Post_item = (props)=>{
    return(
        <div className="Post">
            <div className={classes.item}>
                <img src="https://cs9.pikabu.ru/post_img/big/2018/10/22/10/1540228059127699409.jpg"></img><br/>
                <div>
                    {props.name}
                </div>
                <div>
                    {props.message}
                </div>
                <div className={classes.like}>
                    <span>
                        <img src="https://pngicon.ru/file/uploads/like.png"></img>
                    </span> 
                    <input id="like" type='number' value={props.likes_count} readOnly></input>
                </div>            
            </div>
        </div>
    );
} 

export default Post_item;