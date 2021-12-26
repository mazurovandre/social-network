import React from "react";
import style from './Posts.module.sass';
import Post from "./Post/Post";

const Posts = (props) => {
    const posts = props.state.postsData.map(state => <Post key={state.id} state={state}/>);
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
                <h5 className={style.title}>Мои посты:</h5>
                <textarea ref={newPostElement} name="form" id="form" cols="30" rows="10" placeholder="Напишите свой пост"
                          value={props.state.newPostText} onChange={onPostChange}/>
                <button type='submit'>Отправить</button>
            </form>
            <ul className={style.list}>
                {posts}
            </ul>
        </div>
    );
}

export default Posts;