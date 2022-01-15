import React from "react";
import style from './Posts.module.sass';
import Post from "./Post/Post";

const Posts = (props) => {

    const posts = props.postsData.map(state => <Post key={state.id} state={state}/>);
    const newPostElement = React.createRef();


    const addPost = () => {
        props.addPost();
    };

    const onPostChange = () => {
        const text = newPostElement.current.value;
        props.onPostChange(text);
    }

    return (
        <div className={style.posts}>
            <form className={style.form} onSubmit={event => {
                event.preventDefault();
                addPost();
            }}>
                <h5 className={style.title}>My posts:</h5>
                <textarea ref={newPostElement} name="form" id="form" cols="30" rows="10" placeholder="Write what's on your mind"
                          value={props.newPostText} onChange={onPostChange}/>
                <button type='submit'>Post</button>
            </form>
            <ul className={style.list}>
                {posts}
            </ul>
        </div>
    );
}

export default Posts;