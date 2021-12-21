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
                <Post message="Hello, it's me" likesCount="11"/>
                <Post message="I was wondering if after all these years you'd like to meet" likesCount="123"/>
                <Post message="To go over everything" likesCount="532"/>
                <Post message="They say that time's supposed to heal ya" likesCount="251"/>
                <Post message="But I ain't done much healing" likesCount="252"/>
            </ul>
        </div>
    );
}

export default Posts;