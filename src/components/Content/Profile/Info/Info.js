import classes from './Info.module.css';
import Preloader from './../../common/Preloader/Preloader';
import StatusContainer from './StatusContainer';

const Info = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div className={classes.info}>
            <div className={classes.avatar}>
                <img src={(props.profile.photos.large) ? props.profile.photos.large : "https://img.icons8.com/cotton/2x/fa314a/person-male--v2.png"}></img>
            </div>
            <div className={classes.description}>
                {props.profile.fullName}
                <div>
                    <h3>About me</h3>
                    <StatusContainer status={props.status} />
                </div>
                <div>
                    <h3>instagram: <a href={props.profile.contacts.instagram}>чекай мой инст</a></h3>
                    <h3>git: <a href={props.profile.contacts.github}>чекай мой гит</a></h3>
                </div>
            </div>

        </div>
    );
}
export default Info;