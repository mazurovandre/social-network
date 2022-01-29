import {authThunk} from './authReducer';

const SET_INITIALIZED = 'SET_INITIALIZED';

export type InitialStateType = {
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

export type setInitializedActionType = {
    type: typeof SET_INITIALIZED
}

export const setInitialized = (): setInitializedActionType => ({type: SET_INITIALIZED});

export const initializeThunk = () => (dispatch: any) => {
    let promiseAuth = dispatch(authThunk())

    Promise.all([promiseAuth]).then(() => {
        dispatch(setInitialized())
    })
}

export default appReducer;