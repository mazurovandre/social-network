import React, {FC} from "react";
import style from './Posts.module.sass';
import Post from "./Post/Post";
import {PostsContainerType} from "./PostsContainer";
import PostForm from "./PostForm/PostForm";

const Posts:FC<PostsContainerType> = ({postsData, addPost, isMyPage, setLike}) => {

    const posts = postsData.map((state, index) => <Post key={state.id} index={index} message={state.message} likesCount={state.likesCount} setLike={setLike}/>);

    if (isMyPage) {
        return (
            <div className={style.posts}>
                <PostForm addPost={addPost}/>
                <ul className={style.list}>
                    {posts}
                </ul>
            </div>
        );
    }
    return <></>
}

export default Posts;