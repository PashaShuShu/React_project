import Profile from './Profile';
import React from 'react';
import { connect } from 'react-redux';
import { getUserProfile, getStatus, updateStatus, uploadPhoto } from './../../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from './../../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
    refreshProfile() {
        let userId = this.props.match.params.userId;

        if (!userId) {

            userId = this.props.authUserId;

            if (!userId) this.props.history.push("/login");

        }

        this.props.getUserProfile(userId);
        this.props.getStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile();
    }
    componentDidUpdate() {
        this.refreshProfile();
    }

    render() {

        return (
            <Profile
                owner={!this.props.match.userId}
                uploadPhoto={this.props.uploadPhoto}
                {...this.props}
                status={this.props.status} />
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    authUserId: state.auth.userId,
    status: state.profilePage.status
})

export default compose(
    connect(mapStateToProps, {
        getUserProfile,
        getStatus,
        updateStatus,
        uploadPhoto,
    }),
    withRouter,
    withAuthRedirect,
)(ProfileContainer)