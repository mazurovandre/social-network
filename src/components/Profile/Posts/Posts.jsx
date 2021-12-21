import React from "react";
import style from './Posts.module.sass';
import Post from "./Post/Post";

const Posts = () => {
    return (
        <div className={style.posts}>
            <form className={style.form}>
                <h5 className={style.title}>Мои посты</h5>
                <textarea name="form" id="form" cols="30" rows="10" placeholder="Напишите свой пост"/>
                <button>Отправить</button>
            </form>
            <ul className={style.list}>
                <Post />
                <Post />
            </ul>
        </div>
    );
}

export default Posts;