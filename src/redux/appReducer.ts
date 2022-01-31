import {authThunk} from './authReducer';
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";

const SET_INITIALIZED = 'SET_INITIALIZED';

type InitialStateType = {
    isInitialized: boolean
}

let initialState: InitialStateType = {
    isInitialized: false
}

const appReducer = (state = initialState, action: setInitializedActionType): InitialStateType => {
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

type setInitializedActionType = {
    type: typeof SET_INITIALIZED
}

export const setInitialized = (): setInitializedActionType => ({type: SET_INITIALIZED});

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, setInitializedActionType>

export const initializeThunk = (): ThunkType => async dispatch => {
    let promiseAuth = dispatch(authThunk())

    Promise.all([promiseAuth]).then(() => {
        dispatch(setInitialized())
    })
}

export default appReducer;