import React from "react";
import Posts from "./Posts";
import {connect} from "react-redux";
import {addPostActionCreator, onPostChangeActionCreator} from "../../../redux/profileReducer";

const mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        onPostChange: (text) => {
            dispatch(onPostChangeActionCreator(text))
        },
    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer;