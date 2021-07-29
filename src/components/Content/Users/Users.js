import React from 'react';
import classes from './Users.module.css';
import UserOnePage from './UserOnePage';
import Paginator from './Paginator';

let Users = (props) => {
    return (
        <div className={classes.friendsList}>
            <UserOnePage
                users={props.users}
                followingInProgress={props.followingInProgress}
                unfollow={props.unfollow}
                follow={props.follow}
            />
            <Paginator
                setCurrentPage={props.setCurrentPage}
                currentPage={props.currentPage}
                onPageChanged={props.onPageChanged}
                pages={props.pages} />

        </div>
    );
}

export default Users;