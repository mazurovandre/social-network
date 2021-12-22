import React from "react";
import style from './Posts.module.sass';
import Post from "./Post/Post";

const Posts = (props) => {
    const postsData = props.posts;
    return (
        <div className={style.posts}>
            <form className={style.form}>
                <h5 className={style.title}>Мои посты</h5>
                <textarea name="form" id="form" cols="30" rows="10" placeholder="Напишите свой пост"/>
                <button>Отправить</button>
            </form>
            <ul className={style.list}>
                <Post message={postsData[0].message} likesCount={postsData[0].likesCount}/>
                <Post message={postsData[1].message} likesCount={postsData[1].likesCount}/>
                <Post message={postsData[2].message} likesCount={postsData[2].likesCount}/>
                <Post message={postsData[3].message} likesCount={postsData[3].likesCount}/>
                <Post message={postsData[4].message} likesCount={postsData[4].likesCount}/>
            </ul>
        </div>
    );
}

export default Posts;