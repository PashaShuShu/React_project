import classes from './Profile.module.css';
import Info from './Info/Info'
import MyPostContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
    return (
        <div className="Content">
            <div className={classes.content__head}>
                <img src="https://i.gifer.com/1Zla.gif"></img>
            </div>
            <div className={classes.post__content}>
                <Info
                    uploadPhoto={props.uploadPhoto}
                    owner={props.owner}
                    profile={props.profile}
                    status={props.status}
                    updateStatus={props.updateStatus} />
                <h3>My posts</h3>
                <MyPostContainer />
            </div>
        </div>
    );
}

export default Profile;