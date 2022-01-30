import {authAPI} from "../api/api";

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

export const setUserData = (
    userId: number | null,
    login: string | null,
    email: string | null,
    isAuth: boolean): SetUserDataActionType => ({
    type: SET_USER_DATA,
    data: {userId, email, login, isAuth}
});

export const authThunk = () => (dispatch: any) => {
    return authAPI.authMe().then(data => {
        if (data.resultCode === 0) {
            dispatch(setUserData(data.data.id, data.data.login, data.data.email, true));
        }
    })
}

export const loginThunk = ({email, password, rememberMe}: any, setErrorStatus: any) => (dispatch: any) => {
    authAPI.login(email, password, rememberMe = true).then(data => {
        if (data.resultCode === 0) {
            dispatch(authThunk());
            setErrorStatus('')
        } else {
            setErrorStatus(...data.messages);
        }
    })
}

export const logoutThunk = () => (dispatch: any) => {
    authAPI.logout().then(data => {
        if (data.resultCode === 0) {
            dispatch(setUserData(null, null, null, false));
        } else {
            console.error('Failed to logoff from the server');
        }
    })
}

export default authReducer;