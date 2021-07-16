import React from 'react';
import classes from './Users.module.css';
import { NavLink } from 'react-router-dom';

let Users = (props) => {
    return (
        <div className={classes.friendsList}>
            {
                props.users.map((user) => {
                    return (
                        <div key={user.id} className={classes.friend}>
                            <NavLink to={"/profile/" + user.id}><img src={
                                user.photos.small != null ? user.photos.small : "https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png"}></img>
                            </NavLink>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                            {(user.followed)
                                ? <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {

                                    props.unfollow(user.id);

                                }}>unfollow</button>
                                : <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {

                                    props.follow(user.id);

                                }}>follow</button>}
                        </div>)
                })
            }
            <div>
                {props.pages.map(p => {
                    return (
                        <span
                            className={
                                props.currentPage === p ? classes.selectedPage : ""
                            }
                            onClick={() => {
                                props.onPageChanged(p)
                            }}
                        > {p} </span>
                    )
                }
                )}
            </div>
        </div>
    );
}

export default Users;