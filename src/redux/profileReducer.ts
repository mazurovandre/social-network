import {profileAPI} from "../api/api";
import {ResultCodes} from "../types/types";

const ADD_POST = 'ADD_POST';
const SET_LIKE = 'SET_LIKE';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

export type postsDataType = {
    id: number;
    message: string;
    likesCount: number;
    isLiked: boolean
}
type InitialStateType = {
    postsData: Array<postsDataType>;
    profile: any;
    status: string
}

let initialState: InitialStateType = {
    postsData: [
        {id: 1, message: 'Hello, it\'s me', likesCount: 11, isLiked: false},
        {id: 2, message: 'I was wondering if after all these years you\'d like to meet', likesCount: 123, isLiked: true},
        {id: 3, message: 'To go over everything', likesCount: 532, isLiked: true},
        {id: 4, message: 'They say that time\'s supposed to heal ya', likesCount: 251, isLiked: false},
        {id: 5, message: 'But I ain\'t done much healing', likesCount: 252, isLiked: false}
    ],
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: state.postsData.length + 1,
                message: action.text,
                likesCount: 0,
                isLiked: false
            };
            if (newPost.message !== '') {
                return {
                    ...state,
                    postsData: [newPost, ...state.postsData]
                }
            } else {
                return state;
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_LIKE:
            let postWithLike = {...state.postsData[action.index]};
            postWithLike.isLiked ? postWithLike.likesCount -= 1 : postWithLike.likesCount += 1;
            postWithLike.isLiked = !postWithLike.isLiked
            return {
                ...state,
                postsData: [
                    ...state.postsData.slice(0, action.index),
                    postWithLike,
                    ...state.postsData.slice(action.index + 1)
                ]
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state;
    }
}

type ActionType = AddPostACType | ToggleLikeACType | SetUserProfileACType | SetStatusACType

export type AddPostACType = {
    type: typeof ADD_POST,
    text: string
}

export type ToggleLikeACType = {
    type: typeof SET_LIKE,
    index: number
}

type SetUserProfileACType = {
    type: typeof SET_USER_PROFILE
    profile: any
}
type SetStatusACType = {
    type: typeof SET_STATUS
    status: string
}

// AC = Action Creator

export const addPostAC = (text: string): AddPostACType => ({type: ADD_POST, text});
export const toggleLikeAC = (index: number): ToggleLikeACType => ({type: SET_LIKE, index});
export const setUserProfileAC = (profile: any): SetUserProfileACType => ({type: SET_USER_PROFILE, profile});
export const setStatusAC = (status: string): SetStatusACType => ({type: SET_STATUS, status});


export const getUserThunk = (id: number) => (dispatch: any): void => {
    profileAPI.getUser(id)
        .then(data => {
            dispatch(setUserProfileAC(data));
        })
}

export const getUserStatusThunk = (userId: number) => (dispatch: any): void => {
    profileAPI.getStatus(userId).then(response => {
        dispatch(setStatusAC(response.data))
    })
}

export const updateUserStatusThunk = (status: string) => (dispatch: any): void => {
    profileAPI.updateStatus(status).then((response: any) => {
        if (response.data.resultCode === ResultCodes.Success) {
            dispatch(setStatusAC(status))
        }
    })
}

export default profileReducer;