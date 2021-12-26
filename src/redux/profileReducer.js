const ADD_POST = 'ADD-POST';
const ON_POST_CHANGE = 'ON-POST-CHANGE';

let initialState = {
    personInfo: {
        name: 'Мазуров Андрей',
        birthDate: '22 марта 1994 г.',
        city: 'Санкт-Петербург',
        education: 'Университет ИТМО'
    },
    postsData: [
        {id: 1, message: 'Hello, it\'s me', likesCount: 11},
        {id: 2, message: 'I was wondering if after all these years you\'d like to meet', likesCount: 123},
        {id: 3, message: 'To go over everything', likesCount: 532},
        {id: 4, message: 'They say that time\'s supposed to heal ya', likesCount: 251},
        {id: 5, message: 'But I ain\'t done much healing', likesCount: 252}
    ],
    newPostText: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {};
            newPost.id = state.postsData.length + 1;
            newPost.message = state.newPostText;
            newPost.likesCount = 0;
            state.postsData.push(newPost);
            state.newPostText = '';
            break;
        case ON_POST_CHANGE:
            state.newPostText = action.newText;
            break;
    }
    return state;
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const onPostChangeActionCreator = (text) => ({type: ON_POST_CHANGE, newText: text});

export default profileReducer;