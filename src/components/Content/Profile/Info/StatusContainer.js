import { updateNewStatsText } from '../../../../redux/profile-reducer';
import { connect } from 'react-redux';
import React from 'react'
import Status from './Status'
import { updateStatus } from './../../../../redux/profile-reducer';

class StatusContainer extends React.Component {
    render() {
        return (
            <div>
                <Status {...this.props} />
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    status: state.profilePage.status,
})

export default connect(mapStateToProps, {
    updateStatus,
})(StatusContainer)