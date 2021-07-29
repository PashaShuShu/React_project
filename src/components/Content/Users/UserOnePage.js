import classes from './Users.module.css';
import { NavLink } from 'react-router-dom';

const UserOnePage = ({users, followingInProgress, unfollow, follow}) => {
    return (<>
        {
            users.map((user) => {
                return (
                    <div key={user.id} className={classes.friend}>
                        <NavLink to={"/profile/" + user.id}><img src={
                            user.photos.small != null ? user.photos.small : "https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png"}></img>
                        </NavLink>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                        {(user.followed)
                            ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {

                                unfollow(user.id);

                            }}>unfollow</button>
                            : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {

                                follow(user.id);

                            }}>follow</button>}
                    </div>)
            })
        }
    </>);
}
export default UserOnePage;