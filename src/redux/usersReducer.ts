import {followAPI, usersAPI} from "../api/api";
import {UserType} from "../types/types";

const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const CHANGE_CURRENT_PAGE = 'CHANGE_CURRENT_PAGE';
const TOGGLE_FETCHING = 'TOGGLE_FETCHING';
const TOGGLE_FOLLOWING = 'TOGGLE_FOLLOWING';

let initialState = {
    users: [] as Array<UserType>,
    totalCount: 0,
    pageSize: 10,
    currentPage: 1,
    isFetching: false,
    isFollowing: [] as Array<number>
}

type InitialStateType = typeof initialState;

const usersReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case TOGGLE_FOLLOW:
            const newState = {
                ...state,
                users: [...state.users]
            };
            const targetUser: UserType | undefined = newState.users.find(user => user.id === action.id);
            if (targetUser !== undefined) {
                targetUser.followed = !targetUser.followed
            }
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
            return {
                ...state,
                isFollowing: action.isFollowing
                    ? [...state.isFollowing, action.id]
                    : state.isFollowing.filter(id => id !== action.id)
            }
        default:
            return state;
    }
}

// Types for Action Creators

type ToggleFollowType = {
    type: typeof TOGGLE_FOLLOW;
    id: number
}
type SetUsersType = {
    type: typeof SET_USERS;
    users: Array<any>
}
type SetTotalCountType = {
    type: typeof SET_TOTAL_COUNT;
    totalCount: number
}
type ChangeCurrentPageType = {
    type: typeof CHANGE_CURRENT_PAGE;
    currentPage: number
}
type ToggleFetchingType = {
    type: typeof TOGGLE_FETCHING;
    isFetching: boolean
}
type ToggleFollowingType = {
    type: typeof TOGGLE_FOLLOWING;
    isFollowing: boolean;
    id: number
}

// Action Creators

export const toggleFollow = (id: number): ToggleFollowType => ({type: TOGGLE_FOLLOW, id});
export const setUsers = (users: Array<any>): SetUsersType => ({type: SET_USERS, users});
export const setTotalCount = (totalCount: number): SetTotalCountType => ({type: SET_TOTAL_COUNT, totalCount});
export const changeCurrentPage = (currentPage: number): ChangeCurrentPageType => ({type: CHANGE_CURRENT_PAGE, currentPage});
export const toggleFetching = (isFetching: boolean): ToggleFetchingType => ({type: TOGGLE_FETCHING, isFetching});
export const toggleFollowing = (isFollowing: boolean, id: number): ToggleFollowingType => ({type: TOGGLE_FOLLOWING, isFollowing, id});

// Redux Thunks

export const getUsersThunk = (currentPage: number, pageSize: number) => (dispatch: any) => {
    dispatch(toggleFetching(true));
    usersAPI.requestUsers(currentPage, pageSize).then(data => {
        dispatch(toggleFetching(false));
        dispatch(changeCurrentPage(currentPage))
        dispatch(setUsers(data.items));
        dispatch(setTotalCount(data.totalCount));
    })
}

export const toggleFollowThunk = (id: number, isFollow: boolean) => (dispatch: any) => {
    dispatch(toggleFollowing(true, id));
    if (isFollow) {
        followAPI.followUser(id).then(data => {
            if (data.resultCode === 0) {
                dispatch(toggleFollow(id))
            }})
    } else {
        followAPI.unfollowUser(id).then(data => {
            if (data.resultCode === 0) {
                dispatch(toggleFollow(id))
            }
        })
    }
    dispatch(toggleFollowing(false, id));
}

export default usersReducer;