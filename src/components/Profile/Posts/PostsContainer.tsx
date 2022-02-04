import Posts from "./Posts";
import {connect} from "react-redux";
import {
    addPostAC,
    AddPostACType,
    postsDataType, toggleLikeAC, ToggleLikeACType
} from "../../../redux/profileReducer";
import {AppStateType} from "../../../redux/redux-store";
import {ProfileType} from "../Profile";
import {Dispatch} from "redux";

type MapStateToPropsType = {
    postsData: Array<postsDataType>
}
type MapDispatchToPropsType = {
    addPost: (text: string) => void
    toggleLike: (index: number) => void
}

export type PostsContainerType = MapStateToPropsType & MapDispatchToPropsType & ProfileType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        postsData: state.profilePage.postsData
    }
}

const mapDispatchToProps = (dispatch: Dispatch<AddPostACType | ToggleLikeACType>): MapDispatchToPropsType => {
    return {
        addPost: (text) => {
            dispatch(addPostAC(text));
        },
        toggleLike: (index) => {
            dispatch(toggleLikeAC(index))
        }
    }
}

const PostsContainer = connect<MapStateToPropsType, MapDispatchToPropsType, ProfileType, AppStateType>
(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer;