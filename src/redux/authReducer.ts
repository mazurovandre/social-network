import {authAPI} from "../api/api";
import {ResultCodes} from "../types/types";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";

const SET_USER_DATA = 'SET_USER_DATA';

export type InitialStateType = {
    userId: number | null,
    login: string | null,
    email: string | null,
    isAuth: boolean
}

let initialState: InitialStateType = {
    userId: null,
    login: null,
    email: null,
    isAuth: false
}

const authReducer = (state = initialState, action: SetUserDataActionType): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            };
        default:
            return state;
    }
}

type SetUserDataActionDataType = {
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
}

type SetUserDataActionType = {
    type: typeof SET_USER_DATA,
    data: SetUserDataActionDataType
}

export const setUserData = (userId: number | null, login: string | null,
    email: string | null, isAuth: boolean): SetUserDataActionType => ({
    type: SET_USER_DATA,
    data: {userId, email, login, isAuth}
});

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, SetUserDataActionType>


export const authThunk = (): ThunkType => async dispatch => {
    return authAPI.authMe().then(data => {
        if (data.resultCode === ResultCodes.Success) {
            dispatch(setUserData(data.data.id, data.data.login, data.data.email, true));
        }
    })
}

export const loginThunk = ({email, password, rememberMe}: any, setErrorText: any): ThunkType => async dispatch => {
    authAPI.login(email, password, rememberMe = true).then(data => {
        if (data.resultCode === ResultCodes.Success) {
            dispatch(authThunk());
            setErrorText('')
        } else {
            setErrorText(...data.messages);
        }
    })
}

export const logoutThunk = (): ThunkType => async dispatch => {
    authAPI.logout().then(data => {
        if (data.resultCode === ResultCodes.Success) {
            dispatch(setUserData(null, null, null, false));
        } else {
            console.error('Failed to logoff from the server');
        }
    })
}

export default authReducer;