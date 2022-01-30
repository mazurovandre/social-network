import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const ON_POST_CHANGE = 'ON-POST-CHANGE';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

type postsDataType = {
    id: number;
    message: string;
    likesCount: number
}
type InitialStateType = {
    postsData: Array<postsDataType>;
    newPostText: string;
    profile: any;
    status: string
}

let initialState: InitialStateType = {
    postsData: [
        {id: 1, message: 'Hello, it\'s me', likesCount: 11},
        {id: 2, message: 'I was wondering if after all these years you\'d like to meet', likesCount: 123},
        {id: 3, message: 'To go over everything', likesCount: 532},
        {id: 4, message: 'They say that time\'s supposed to heal ya', likesCount: 251},
        {id: 5, message: 'But I ain\'t done much healing', likesCount: 252}
    ],
    newPostText: '',
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: state.postsData.length + 1,
                message: state.newPostText,
                likesCount: 0
            };
            if (newPost.message !== '') {
                return {
                    ...state,
                    postsData: [...state.postsData, newPost],
                    newPostText: ''
                }
            } else {
                return state;
            }
        case ON_POST_CHANGE:
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status === null ? 'Write your status' : action.status
            }
        default:
            return state;
    }
}

type ActionType = AddPostActionCreatorType | OnPostChangeActionCreatorType | SetUserProfileType | SetStatusType

type AddPostActionCreatorType = {
    type: typeof ADD_POST
}
type OnPostChangeActionCreatorType = {
    type: typeof ON_POST_CHANGE;
    newText: string
}
type SetUserProfileType = {
    type: typeof SET_USER_PROFILE
    profile: any
}
type SetStatusType = {
    type: typeof SET_STATUS
    status: string
}

export const addPostActionCreator = (): AddPostActionCreatorType => ({type: ADD_POST});
export const onPostChangeActionCreator = (text: string): OnPostChangeActionCreatorType => ({type: ON_POST_CHANGE, newText: text});
export const setUserProfile = (profile: any): SetUserProfileType => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status: string): SetStatusType => ({type: SET_STATUS, status});


export const getUserThunk = (id: number) => (dispatch: any): void => {
    profileAPI.getUser(id)
        .then(data => {
            dispatch(setUserProfile(data));
        })
}

export const getUserStatusThunk = (userId: number) => (dispatch: any): void => {
    if (userId === undefined) {
        userId = 21586
    }
    profileAPI.getStatus(userId).then(response => {
        dispatch(setStatus(response.data))
    })
}

export const updateUserStatusThunk = (status: string) => (dispatch: any): void => {
    profileAPI.updateStatus(status).then((response: any) => {
        if (response.resultCode === 0) {
            dispatch(setStatus(status))
        }
    })
}

export default profileReducer;