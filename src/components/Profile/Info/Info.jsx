import React from "react";
import style from './Info.module.sass';
// import bg from "../../../images/post.jpg"
import avatar from "../../../images/avatar.jpg"
import Preloader from "../../common/Preloader/Preloader";
import InfoStatus from "./InfoStatus/InfoStatus";

const Info = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
            <div className={style.info}>
                <div className={style.description}>
                    <div className={style.avatar}>
                        <img src={props.profile.photos.small ? props.profile.photos.small : avatar} alt="avatar"/>
                    </div>
                    <div className={style.about}>
                        <h2 className={style.title}>{props.profile.fullName}</h2>
                        <InfoStatus status={props.status} updateStatus={props.updateUserStatusThunk}/>
                    </div>
                </div>
            </div>
    );
}

export default Info;