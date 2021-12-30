const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FOLLOW:
            const newState = {users: [...state.users]};
            const targetUser = newState.users.find(user => user.id === action.id);
            targetUser.followed = !targetUser.followed
            return newState;
        case SET_USERS:
            return {
                users: [...action.users]
            }
        default:
            return state;
    }
}

export const toggleFollowActionCreator = (id) => ({type: TOGGLE_FOLLOW, id: id});
export const setUsersActionCreator = (users) => ({type: SET_USERS, users: users});
export default usersReducer;