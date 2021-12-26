import avatar from "../images/avatar.jpg";

let initialState = {
    friends: [
        {id: 1, name: 'Игорь', avatar: avatar},
        {id: 2, name: 'Ольга', avatar: avatar},
        {id: 3, name: 'Елена', avatar: avatar},
        {id: 4, name: 'Михаил', avatar: avatar}
    ]
}

const sidebarReducer = (state = initialState, action) => {

    return state;
}

export default sidebarReducer;