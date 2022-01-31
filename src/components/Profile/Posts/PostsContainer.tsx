import Posts from "./Posts";
import {connect} from "react-redux";
import {addPostActionCreator, onPostChangeActionCreator, postsDataType} from "../../../redux/profileReducer";
import {AppStateType} from "../../../redux/redux-store";

type MapStateToPropsType = {
    postsData: Array<postsDataType>
    newPostText: string
}
type MapDispatchToPropsType = {
    addPost: () => void
    onPostChange: (text: string) => void
}

export type PostsContainerType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch: any): MapDispatchToPropsType => {
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

const PostsContainer = connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>
(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer;