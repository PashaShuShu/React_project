import classes from './Users.module.css';
import { NavLink } from 'react-router-dom';
import noPhoto from '../../../img/ava2.gif'

const UserOnePage = ({users, followingInProgress, unfollow, follow}) => {
    return (<>
        {
            users.map((user) => {
                return (
                    <div key={user.id} className={classes.friend}>
                        <NavLink to={"/profile/" + user.id}><img src={
                            user.photos.small != null ? user.photos.small : noPhoto}></img>
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