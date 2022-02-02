import Posts from "./Posts";
import {connect} from "react-redux";
import {
    addPostActionCreator,
    AddPostActionCreatorType,
    onPostChangeActionCreator,
    OnPostChangeActionCreatorType,
    postsDataType
} from "../../../redux/profileReducer";
import {AppStateType} from "../../../redux/redux-store";
import {ProfileType} from "../Profile";
import {Dispatch} from "redux";

type MapStateToPropsType = {
    postsData: Array<postsDataType>
    newPostText: string
}
type MapDispatchToPropsType = {
    addPost: () => void
    onPostChange: (text: string) => void
}

export type PostsContainerType = MapStateToPropsType & MapDispatchToPropsType & ProfileType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch: Dispatch<AddPostActionCreatorType | OnPostChangeActionCreatorType>): MapDispatchToPropsType => {
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

const PostsContainer = connect<MapStateToPropsType, MapDispatchToPropsType, ProfileType, AppStateType>
(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer;