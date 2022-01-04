import React from "react";

class InfoStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
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
        console.log('Пропсы:', this.props);
        console.log('Статус', this.props.updateStatus(this.state.status));

        this.props.updateStatus(this.state.status)
        // debugger
    }

    onStatusChange = (e) => {
        this.setState(
            {status: e.currentTarget.value})
    }

    render() {
        return <>
            {!this.state.editMode &&
                <h5 onDoubleClick={this.enableEditMode}>{this.props.status}</h5>
            }
            {this.state.editMode &&
                <input type='text' value={this.state.status} autoFocus={true} onBlur={this.disableEditMode} onChange={this.onStatusChange}/>
            }
            </>

    }
}

export default InfoStatus;