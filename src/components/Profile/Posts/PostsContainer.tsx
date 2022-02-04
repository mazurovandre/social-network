import Posts from "./Posts";
import {connect} from "react-redux";
import {
    addPostAC,
    AddPostACType,
    postsDataType, setLikeAC, SetLikeACType
} from "../../../redux/profileReducer";
import {AppStateType} from "../../../redux/redux-store";
import {ProfileType} from "../Profile";
import {Dispatch} from "redux";

type MapStateToPropsType = {
    postsData: Array<postsDataType>
}
type MapDispatchToPropsType = {
    addPost: (text: string) => void
    setLike: (index: number, isLike: boolean) => void
}

export type PostsContainerType = MapStateToPropsType & MapDispatchToPropsType & ProfileType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        postsData: state.profilePage.postsData
    }
}

const mapDispatchToProps = (dispatch: Dispatch<AddPostACType | SetLikeACType>): MapDispatchToPropsType => {
    return {
        addPost: (text) => {
            dispatch(addPostAC(text));
        },
        setLike: (index, isLike) => {
            dispatch(setLikeAC(index, isLike))
        }
    }
}

const PostsContainer = connect<MapStateToPropsType, MapDispatchToPropsType, ProfileType, AppStateType>
(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer;