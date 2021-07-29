import { connect } from 'react-redux';
import { follow, unfollow, requestUsersPages, setCurrentPage } from "../../../redux/users-reducer";
import Users from './Users';
import React from 'react';
import Preloader from './../common/Preloader/Preloader';
import {getUsersSuperSelector, getUsers, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress } from "../../../redux/users-selectors"

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.requestUsersPages(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.requestUsersPages(pageNumber, this.props.pageSize);
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return <>
            {this.props.isFetching
                ? <Preloader />
                : <Users
                    pages={pages}
                    pageSize={this.props.pageSize}
                    totalUsersCount={this.props.totalUsersCount}
                    users={this.props.users}
                    unfollow={this.props.unfollow}
                    follow={this.props.follow}
                    onPageChanged={this.onPageChanged}
                    followingInProgress={this.props.followingInProgress}
                    toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
                    currentPage={this.props.currentPage}
                    setCurrentPage={this.props.setCurrentPage}
                />}

        </>
    }
}


let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage, 
    requestUsersPages
})(UsersContainer);
