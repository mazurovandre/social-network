import React, {FC} from "react";
import style from './Info.module.sass';
import avatar from "../../../images/avatar.jpg"
import Preloader from "../../common/Preloader/Preloader";
import InfoStatus from "./InfoStatus/InfoStatus";
import {InfoProps} from "./InfoContainer";



const Info:FC<InfoProps> = ({profile, status, updateUserStatusThunk}) => {
    if (!profile) {
        return <Preloader />
    }
    console.log("Info status", status)
    return (
            <div className={style.info}>
                <div className={style.description}>
                    <div className={style.avatar}>
                        <img src={profile.photos.small ? profile.photos.small : avatar} alt="avatar"/>
                    </div>
                    <div className={style.about}>
                        <h2 className={style.title}>{profile.fullName}</h2>
                        <InfoStatus status={status} updateStatus={updateUserStatusThunk}/>
                    </div>
                </div>
            </div>
    );
}

export default Info;