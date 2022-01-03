import bg from '../images/post.jpg';
import ava from '../images/avatar.jpg';
import {usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const ON_POST_CHANGE = 'ON-POST-CHANGE';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

export const myProfile = {
    fullName: 'Мазуров Андрей',
    aboutMe: 'Статус 3000',
    lookingForAJob: true,
    lookingForAJobDescription: 'Да возьмите меня кто-нибудь',
    photos: {
        large: bg,
        small: ava
    },
    contacts: {
        facebook: 'www.facebook.com',
        vk: 'www.vk.com',
        github: 'www.github.com',
        website: 'mazurovandre.github.io',
    }
}

let initialState = {
    postsData: [
        {id: 1, message: 'Hello, it\'s me', likesCount: 11},
        {id: 2, message: 'I was wondering if after all these years you\'d like to meet', likesCount: 123},
        {id: 3, message: 'To go over everything', likesCount: 532},
        {id: 4, message: 'They say that time\'s supposed to heal ya', likesCount: 251},
        {id: 5, message: 'But I ain\'t done much healing', likesCount: 252}
    ],
    newPostText: '',
    profile: null
}

const profileReducer = (state = initialState, action) => {
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
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const onPostChangeActionCreator = (text) => ({type: ON_POST_CHANGE, newText: text});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});


export const getUserThunk = (id) => {
    return (dispatch) => {
        usersAPI.getUser(id).then(data => {
            console.log(data);
            dispatch(setUserProfile(data));
        })
    }
}




export default profileReducer;