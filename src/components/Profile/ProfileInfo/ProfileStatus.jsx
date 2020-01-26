import React from "react";

class ProfileStatus extends React.Component {
    state = {
        addedMode: false,
        status: this.props.status
    }

    activeEditMode = () => {
        this.setState({addedMode: true});
    };

    handleChange = (e) => {
        this.setState({status : e.currentTarget.value})
    };

    deactivationEditMode = () => {
        this.setState({addedMode: false});
        this.props.putProfileUserStatus(this.state.status);
    };

    render() {
        return (
            <div>
                {this.state.addedMode
                    ? <input onChange={this.handleChange} autoFocus={true} onBlur={this.deactivationEditMode} type="text" value={this.state.status}/>
                    : <span onDoubleClick={this.activeEditMode}>{this.state.status}</span>
                }
            </div>
        )
    }
};

export default ProfileStatus;