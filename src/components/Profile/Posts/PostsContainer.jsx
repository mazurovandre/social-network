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
            dispatch(addPostActionCreator());
        },
        onPostChange: (text) => {
            let action = onPostChangeActionCreator(text);
            dispatch(action);
        },
    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer;