import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
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
export const setUserData = (userId, login, email, isAuth) => ({type: SET_USER_DATA, data: {userId, email, login, isAuth}});


export const authThunk = () => {
    return (dispatch) => {
        return authAPI.authMe().then(data => {
            if (data.resultCode === 0) {
                dispatch(setUserData(data.data.id, data.data.login, data.data.email, true));
            }
        })
    }
}

export const loginThunk = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe).then(data => {
        if (data.resultCode === 0) {
            dispatch(authThunk());
        } else {
            console.error('Failed to login to the server');
            dispatch(setUserData(null, null, null, false));
        }
    })
}

export const logoutThunk = () => (dispatch) => {
    authAPI.logout().then(data => {
        if (data.resultCode === 0) {
            dispatch(setUserData(null, null, null, false));
        } else {
            console.error('Failed to logoff from the server');
        }
    })
}

export default authReducer;