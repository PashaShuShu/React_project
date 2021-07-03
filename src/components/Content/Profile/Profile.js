import classes from './Profile.module.css';
import Post from './MyPosts/MyPosts'

const Profile = ()=>{
    return (
        <div className="Content">
            <div className={classes.content__head}>
                <img src="https://thumbs.dreamstime.com/b/%D0%BF%D0%B0%D0%BD%D0%BE%D1%80%D0%B0%D0%BC%D0%B0-%D0%BF%D1%83%D1%81%D1%82%D1%8B%D0%BD%D0%B8-%D1%81%D0%B0%D1%85%D0%B0%D1%80%D0%B0-28435479.jpg"></img>
            </div>
            
            <div className={classes.post__content}>
                <div className={classes.avatar}>
                    <img src="https://azertag.az/files/galleryphoto/2021/1/1000x669/16131459965491937006_1000x669.jpg"></img>
                </div>
                <div className={classes.description}>
                    Description
                </div>
                <div className={classes.post}>
                    <Post />
                </div>
                
            </div>
        </div>
    );
}

export default Profile;