import React, {FC, useRef} from "react";
import style from './Posts.module.sass';
import Post from "./Post/Post";
import {PostsContainerType} from "./PostsContainer";

const Posts:FC<PostsContainerType> = ({postsData, addPost, onPostChange, newPostText, isMyPage}) => {

    const posts = postsData.map(state => <Post key={state.id} state={state}/>);
    const newPostElement = useRef<HTMLTextAreaElement | null>(null);

    const changePost = () => {
        if (newPostElement.current) {
            const text = newPostElement.current.value;
            onPostChange(text);
        }
    }
    if (isMyPage) {
        return (
            <div className={style.posts}>
                <form className={style.form} onSubmit={event => {
                    event.preventDefault();
                    addPost();
                }}>
                    <h5 className={style.title}>My posts:</h5>
                    <textarea ref={newPostElement} name="form" id="form" cols={30} rows={10} placeholder="Write what's on your mind"
                              value={newPostText} onChange={changePost}/>
                    <button type='submit'>Post</button>
                </form>
                <ul className={style.list}>
                    {posts}
                </ul>
            </div>
        );
    }
    return <></>
}

export default Posts;