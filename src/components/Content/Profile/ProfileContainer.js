import Profile from './Profile';
import React from 'react';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { setUserProfile } from './../../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { userAPI } from './../../../api/api';


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;

        if (!userId) userId = 2;

        userAPI.getUserProfile(userId).then(data => { this.props.setUserProfile(data) });
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} />
            </div>
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
})

let withUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {
    setUserProfile
})(withUrlDataContainerComponent);