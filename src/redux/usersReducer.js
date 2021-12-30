const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const CHANGE_CURRENT_PAGE = 'CHANGE_CURRENT_PAGE';

let initialState = {
    users: [],
    totalCount: 0,
    pageSize: 10,
    currentPage: 1
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
        default:
            return state;
    }
}

export const toggleFollowAC = (id) => ({type: TOGGLE_FOLLOW, id});
export const setUsersAC = (users) => ({type: SET_USERS, users});
export const setTotalCountAC = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount});
export const changeCurrentPageAC = (currentPage) => ({type: CHANGE_CURRENT_PAGE, currentPage});
export default usersReducer;