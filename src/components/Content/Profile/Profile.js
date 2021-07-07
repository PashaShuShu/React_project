import classes from './Profile.module.css';
import MyPost from './MyPosts/MyPosts'
import Info from './Info/Info'

const Profile = (props) => {
    return (
        <div className="Content">
            <div className={classes.content__head}>
                <img src="https://i.gifer.com/1Zla.gif"></img>
            </div>
            <div className={classes.post__content}>
                <Info description="Pasha`s profile" />
                <h3>My posts</h3>
                <MyPost
                    profilePage={props.profilePage}
                    dispatch={props.dispatch}/>
            </div>
        </div>
    );
}

export default Profile;