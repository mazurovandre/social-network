import React, {FC, useEffect, useState} from "react";

type InfoStatusProps = {
    status: string
    updateStatus: (status: string) => void
}

const InfoStatus:FC<InfoStatusProps> = ({status, updateStatus}) => {

    let [editMode, setEditMode] = useState(false);
    let [localStatus, setLocalStatus] = useState(status);

    useEffect(() => {
        setLocalStatus(localStatus);
    }, [localStatus, status])

    const enableEditMode = () => {
        setEditMode(true);
    };

    const disableEditMode = () => {
        setEditMode(false);
        updateStatus(localStatus);
    };

    const onStatusChange = (e: any) => {
        setLocalStatus(e.currentTarget.value);
    }

    return (
        <>
            {!editMode &&
            <h5 onDoubleClick={enableEditMode}>{status || 'Enter your status'}</h5>
            }
            {editMode &&
            <input type='text' value={localStatus} autoFocus={true} onBlur={disableEditMode} onChange={onStatusChange}/>
            }
        </>
    )
}

export default InfoStatus;