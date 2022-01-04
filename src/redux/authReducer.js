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
                ...action.data,
                isAuth: true
            };
        default:
            return state;
    }
}
export const setUserData = (userId, login, email) => ({type: SET_USER_DATA, data: {userId, email, login}});


export const authThunk = () => {
    return (dispatch) => {
        authAPI.authMe().then(data => {
            if (data.resultCode === 0) {
                dispatch(setUserData(data.data.id, data.data.login, data.data.email));
            }
        })
    }
}

export default authReducer;