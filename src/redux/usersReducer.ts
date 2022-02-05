import {followAPI, usersAPI} from "../api/api";
import {ResultCodes, UserType} from "../types/types";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";

const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const CHANGE_FOLLOWING_USERS = 'CHANGE_FOLLOWING_USERS';

let initialState = {
    users: [] as Array<UserType>,
    totalCount: 0,
    followingUsers: [] as Array<number>
}

export type InitialStateType = typeof initialState;

const usersReducer = (state = initialState, action: ActionType): InitialStateType => {
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
        case CHANGE_FOLLOWING_USERS:
            return {
                ...state,
                followingUsers: action.isFollowing
                    ? [...state.followingUsers, action.id]
                    : state.followingUsers.filter(id => id !== action.id)
            }
        default:
            return state;
    }
}

// Types for Action Creators

type ActionType = ToggleFollowType | SetUsersType | SetTotalCountType | ChangeFollowingUsersType

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
type ChangeFollowingUsersType = {
    type: typeof CHANGE_FOLLOWING_USERS;
    isFollowing: boolean;
    id: number
}

// Action Creators

export const toggleFollow = (id: number): ToggleFollowType => ({type: TOGGLE_FOLLOW, id});
export const setUsers = (users: Array<any>): SetUsersType => ({type: SET_USERS, users});
export const setTotalCount = (totalCount: number): SetTotalCountType => ({type: SET_TOTAL_COUNT, totalCount});
export const changeFollowingUsers = (isFollowing: boolean, id: number): ChangeFollowingUsersType => ({type: CHANGE_FOLLOWING_USERS, isFollowing, id});

// Redux Thunks

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionType>

export const getUsersThunk = (currentPage: number, pageSize: number): ThunkType => async dispatch => {
    usersAPI.requestUsers(currentPage, pageSize).then(data => {
        dispatch(setUsers(data.items));
        dispatch(setTotalCount(data.totalCount));
    })
}

export const toggleFollowThunk = (id: number, isFollow: boolean): ThunkType => async dispatch => {
    // debugger
    dispatch(changeFollowingUsers(true, id));
    if (isFollow) {
        followAPI.followUser(id).then(data => {
            if (data.resultCode === ResultCodes.Success) {
                dispatch(toggleFollow(id))
                dispatch(changeFollowingUsers(false, id));
            }})
    } else {
        followAPI.unfollowUser(id).then(data => {
            if (data.resultCode === ResultCodes.Success) {
                dispatch(toggleFollow(id))
                dispatch(changeFollowingUsers(false, id));
            }
        })
    }

}

export default usersReducer;