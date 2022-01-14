import {authThunk} from "./authReducer";

const SET_INITIALIZED = 'SET_INITIALIZED';

let initialState = {
    isInitialized: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                isInitialized: true
            };
        default:
            return state;
    }
}
export const setInitialized = () => ({type: SET_INITIALIZED});

export const initializeThunk = () => (dispatch) => {
    let promiseAuth = dispatch(authThunk())

    Promise.all([promiseAuth]).then(() => {
        dispatch(setInitialized())
    })
}

export default appReducer;