import React, {useEffect, useState} from "react";

const InfoStatus = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status])

    const enableEditMode = () => {
        setEditMode(true);
    };

    const disableEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    };

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <>
            {!editMode &&
            <h5 onDoubleClick={enableEditMode}>{status || 'Enter your status'}</h5>
            }
            {editMode &&
            <input type='text' value={status} autoFocus={true} onBlur={disableEditMode} onChange={onStatusChange}/>
            }
        </>
    )
}

export default InfoStatus;