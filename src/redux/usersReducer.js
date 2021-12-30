import avatar from '../images/avatar.jpg'

const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';

let initialState = {
    usersData: [
        {id: 1, isFollowed: true, avatar: avatar, status: 'Привет, как дела?', firstName: 'Александр', lastName: 'Македонский', country: 'Россия', city: 'Москва'},
        {id: 2, isFollowed: false, avatar: avatar, status: 'Хай!', firstName: 'Павел', lastName: 'Иванов', country: 'Украина', city: 'Киев'},
        {id: 3, isFollowed: true, avatar: avatar, status: '', firstName: 'Алексей', lastName: 'Петров', country: 'Германия', city: 'Берлин'},
        {id: 4, isFollowed: false, avatar: avatar, status: 'Статус', firstName: 'Максим', lastName: 'Смирнов', country: 'Англия', city: 'Лондон'}
    ]
}

const usersReducer = (state = initialState, action) => {
    const newState = {usersData: []};
    state.usersData.map(user => newState.usersData.push({...user}));
    switch (action.type) {
        case TOGGLE_FOLLOW:
            newState.usersData[action.id - 1].isFollowed = !newState.usersData[action.id - 1].isFollowed;
            return newState;
        default:
            return state;
    }
}
export const toggleFollowActionCreator = (id) => ({type: TOGGLE_FOLLOW, id: id});
export default usersReducer;