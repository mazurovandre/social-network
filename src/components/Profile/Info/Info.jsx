import React from "react";
import style from './Info.module.sass';
import bg from "../../../images/post.jpg"
import avatar from "../../../images/avatar.jpg"

const Info = (props) => {
    return (
        <div className={style.info}>
            <div className={style.photo}>
                <img src={bg} alt="profile-bg"/>
            </div>
            <div className={style.description}>
                <div className={style.avatar}>
                    <img src={avatar} alt="avatar"/>
                </div>
                <div className={style.about}>
                    <h2 className={style.title}>{props.state.profilePage.personInfo.name}</h2>
                    <h6 className={style.text}>Дата рождения: {props.state.profilePage.personInfo.birthDate}</h6>
                    <h6 className={style.text}>Город: {props.state.profilePage.personInfo.city}</h6>
                    <h6 className={style.text}>Образование: {props.state.profilePage.personInfo.education}</h6>
                </div>
            </div>
        </div>
        );
}

export default Info;