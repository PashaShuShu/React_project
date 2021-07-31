import { connect } from 'react-redux';
import React from 'react'
import StatusButOnHooks from './StatusButOnHooks';
import { updateStatus } from './../../../../redux/profile-reducer';

class StatusContainer extends React.Component {
    render() {
        return (
            <div>
                <StatusButOnHooks {...this.props} />
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