import React from "react";
import style from './Info.module.sass';
import bg from "../../../images/post.jpg"
import avatar from "../../../images/avatar.jpg"

const Info = () => {
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
                    <h2 className={style.title}>Мазуров Андрей</h2>
                    <h6 className={style.text}>Дата рождения: 22 марта 1994 г.</h6>
                    <h6 className={style.text}>Город: Санкт-Петербург</h6>
                    <h6 className={style.text}>Образование: Университет ИТМО</h6>
                </div>
            </div>
        </div>
        );
}

export default Info;