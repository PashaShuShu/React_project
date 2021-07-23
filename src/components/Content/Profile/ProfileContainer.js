import Profile from './Profile';
import React from 'react';
import { connect } from 'react-redux';
import { getUserProfile, getStatus, updateStatus } from './../../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from './../../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;

        if (!userId) userId = this.props.id;
        this.props.getUserProfile(userId);
        this.props.getStatus(userId)
    }

    render() {
        
        return (
            <Profile {...this.props} status={this.props.status} />
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    id: state.auth.userId,
    status: state.profilePage.status
})

export default compose(
    connect(mapStateToProps, { getUserProfile, getStatus }),
    withRouter,
    withAuthRedirect,

)(ProfileContainer)