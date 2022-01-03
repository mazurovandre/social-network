import React from "react";
import style from './User.module.sass';
import avatar from '../../../images/avatar.jpg'
import {NavLink} from "react-router-dom";
import {followUser, unfollowUser} from "../../../api/api";

const User = (props) => {

    const toggleFollow = (id) => {
        props.toggleFollow(id);
    }

    return (
        <li className={style.user}>
            <div className={style.left}>
                <NavLink to={`/profile/${props.info.id}`}>
                    <img className={style.avatar} src={props.info.photos.small !== null ? props.info.photos.small : avatar} alt="avatar"/>
                </NavLink>
                <button className={style.button}

                        onClick={() => {
                            if (!props.info.followed) {
                                followUser(props.info.id).then(data => {
                                    if (data.resultCode === 0) {
                                        toggleFollow(props.info.id)
                                    }
                                })
                            } else {
                                unfollowUser(props.info.id).then(data => {
                                    if (data.resultCode === 0) {
                                        toggleFollow(props.info.id)
                                    }
                                })
                            }
                        }}

                >{props.info.followed ? 'Отписаться' : 'Подписаться'}</button>
            </div>
            <div className={style.center}>
                <div className={style.name}>
                    <h3 className={style.lastName}>{props.info.name}</h3>
                </div>
                <h4 className={style.status}>{props.info.status}</h4>
            </div>
            <div className={style.right}>
                <h5 className={style.country}>{props.info.country ? props.info.country : 'Страна'}</h5>
                <h5 className={style.city}>{props.info.city ? props.info.city : 'Город'}</h5>
            </div>
        </li>
    );
}

export default User;