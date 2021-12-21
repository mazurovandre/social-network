import React from "react";
import style from './Post.module.sass';
import img from "../../../../images/avatar.jpg"

const Post = () => {
    return (
        <li className={style.post}>
            <div className={style.avatar}>
                <img src={img} alt="avatar"/>
            </div>
            <p className={style.text}>advnkanknka</p>
        </li>
    );
}

export default Post;