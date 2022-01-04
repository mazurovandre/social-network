import React from "react";

class InfoStatus extends React.Component {
    state = {
        editMode: false
    }

    enableEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    disableEditMode = () => {
        this.setState({
            editMode: false
        })
    }

    render() {
        return <>
            {!this.state.editMode &&
                <h5 onDoubleClick={this.enableEditMode}>{this.props.status}</h5>
            }
            {this.state.editMode &&
                <input type='text' value={this.props.status} autoFocus={true} onBlur={this.disableEditMode} onChange={() => {}}/>
            }
            </>

    }
}

export default InfoStatus;