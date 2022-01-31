import React, {FC, useEffect, useState} from "react";
import style from "../Info.module.sass";

type InfoStatusProps = {
    status: string
    updateStatus: (status: string) => void
}

const InfoStatus:FC<InfoStatusProps> = ({status, updateStatus}) => {

    console.log(status)
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
        <div className={style.status}>
            {!editMode &&
            <h5 onDoubleClick={enableEditMode}>{status || 'Enter your status'}</h5>
            }
            {editMode &&
            <input type='text' value={localStatus} autoFocus={true} onBlur={disableEditMode} onChange={onStatusChange}/>
            }
        </div>
    )
}

export default InfoStatus;