import {usersAPI} from "../api/api";

const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const CHANGE_CURRENT_PAGE = 'CHANGE_CURRENT_PAGE';
const TOGGLE_FETCHING = 'TOGGLE_FETCHING';
const TOGGLE_FOLLOWING = 'TOGGLE_FOLLOWING';

let initialState = {
    users: [],
    totalCount: 0,
    pageSize: 10,
    currentPage: 1,
    isFetching: false,
    isFollowing: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FOLLOW:
            const newState = {
                ...state,
                users: [...state.users]
            };
            const targetUser = newState.users.find(user => user.id === action.id);
            targetUser.followed = !targetUser.followed
            return newState;
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            }
        case SET_TOTAL_COUNT:
            return {
                ...state,
                totalCount: action.totalCount
            }
        case CHANGE_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case TOGGLE_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_FOLLOWING:
            let newState2 = {
                ...state,
                isFollowing: action.isFollowing
                    ? [...state.isFollowing, action.id]
                    : state.isFollowing.filter(id => id !== action.id)
                // isFollowing: [action.id]
            }
            console.log(newState2);
            return newState2
        default:
            return state;
    }
}

// Action Creators

export const toggleFollow = (id) => ({type: TOGGLE_FOLLOW, id});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setTotalCount = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount});
export const changeCurrentPage = (currentPage) => ({type: CHANGE_CURRENT_PAGE, currentPage});
export const toggleFetching = (isFetching) => ({type: TOGGLE_FETCHING, isFetching});
export const toggleFollowing = (isFollowing, id) => ({type: TOGGLE_FOLLOWING, isFollowing, id});

// Redux Thunks

export const getUsersThunk = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleFetching(true));
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleFetching(false));
            dispatch(changeCurrentPage(currentPage))
            dispatch(setUsers(data.items));
            dispatch(setTotalCount(data.totalCount));
        })
    }
}

export const toggleFollowThunk = (id, isFollow) => {
    return (dispatch) => {
        dispatch(toggleFollowing(true, id));
        if (isFollow) {
            usersAPI.followUser(id).then(data => {
                if (data.resultCode === 0) {
                    dispatch(toggleFollow(id))
                }})
        } else {
            usersAPI.unfollowUser(id).then(data => {
                if (data.resultCode === 0) {
                    dispatch(toggleFollow(id))
                }
            })
        }
        dispatch(toggleFollowing(false, id));
}}

export default usersReducer;