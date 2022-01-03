import React from "react";
import style from './User.module.sass';
import avatar from '../../../images/avatar.jpg'
import {NavLink} from "react-router-dom";

const User = (props) => {
    if (props.isFollowing.length > 0) {
        debugger;
    }
    return (
        <li className={style.user}>
            <div className={style.left}>
                <NavLink to={`/profile/${props.id}`}>
                    <img className={style.avatar} src={props.photos.small !== null ? props.photos.small : avatar} alt="avatar"/>
                </NavLink>
                <button className={style.button} disabled={props.isFollowing.some(id => id === props.id)}
                        onClick={() => {
                            props.followed
                            ? props.toggleFollowThunk(props.id, false)
                            : props.toggleFollowThunk(props.id, true)
                        }}
                >{props.followed ? 'Отписаться' : 'Подписаться'}</button>
            </div>
            <div className={style.center}>
                <div className={style.name}>
                    <h3 className={style.lastName}>{props.name}</h3>
                </div>
                <h4 className={style.status}>{props.status}</h4>
            </div>
            <div className={style.right}>
                <h5 className={style.country}>{props.country ? props.country : 'Страна'}</h5>
                <h5 className={style.city}>{props.city ? props.city : 'Город'}</h5>
            </div>
        </li>
    );
}

export default User;