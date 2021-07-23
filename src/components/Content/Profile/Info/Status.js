import React from 'react';



class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }


    activateEditMode = () => {
        this.setState({
            editMode: true
        })

    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }

    onChangeStatusText = (e) => {
        let text = e.currentTarget.value;
        this.setState({
            status: text
        });
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevProps.status !== this.props.status)
            this.setState({
                status: this.props.status
            })

    }

    render() {

        return (
            <>
                <div>
                    {!this.state.editMode ?
                        <div>
                            <span onDoubleClick={this.activateEditMode}>
                                {this.props.status || "I dont have status"
                                }
                            </span>
                        </div>
                        :
                        <div>
                            <input
                                placeholder="мой статус"
                                onChange={this.onChangeStatusText}
                                onMouseLeave={this.deactivateEditMode}
                                value={this.state.status || "I dont have status"
                                }></input>
                        </div>
                    }
                </div>
            </>
        )
    }
}

export default ProfileStatus;