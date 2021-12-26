import React from "react";
import Posts from "./Posts";
import {addPostActionCreator, onPostChangeActionCreator} from "../../../redux/profileReducer";

const PostsContainer = (props) => {
    const addPost = () => {
        props.store.dispatch(addPostActionCreator());
    };
    const onPostChange = (text) => {
        props.store.dispatch(onPostChangeActionCreator(text));
    }
    return <Posts state={props.store.getState().profilePage} onPostChange={onPostChange} addPost={addPost} />;
}

export default PostsContainer;