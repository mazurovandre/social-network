import React from "react";
import style from './Posts.module.sass';
import Post from "./Post/Post";

const Posts = (props) => {
    console.log(props)
    const posts = props.state.profilePage.postsData.map(state => <Post key={state.id} state={state}/>);
    const newPostElement = React.createRef();

    const addPost = () => {
        props.dispatch({type: 'ADD-POST'});
    };

    const onPostChange = () => {
        const text = newPostElement.current.value;
        // props.store.onPostChange(text);
        props.dispatch({type: 'ON-POST-CHANGE', newText: text});
    }

    return (
        <div className={style.posts}>
            <form className={style.form} onSubmit={event => {
                event.preventDefault();
                addPost();
            }}>
                <h5 className={style.title}>Мои посты:</h5>
                <textarea ref={newPostElement} name="form" id="form" cols="30" rows="10" placeholder="Напишите свой пост"
                          value={props.state.profilePage.newPostText} onChange={onPostChange}/>
                <button type='submit'>Отправить</button>
            </form>
            <ul className={style.list}>
                {posts}
            </ul>
        </div>
    );
}

export default Posts;