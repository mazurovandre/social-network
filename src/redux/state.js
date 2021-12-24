import avatar from '../images/avatar.jpg';
import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
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
    },
    dialogsPage: {
        dialogsData: [
            {id: 1, name: 'Андрей'},
            {id: 2, name: 'Михаил'},
            {id: 3, name: 'Игорь'},
            {id: 4, name: 'Елена'},
            {id: 5, name: 'Екатерина'},
            {id: 6, name: 'Дмитрий'},
            {id: 7, name: 'Ольга'}
        ],
        dialogsMessages: [
            {id: 1, text: 'Привет!', isOutcome: false},
            {id: 2, text: 'Привет)', isOutcome: true},
            {id: 3, text: 'Как дела?', isOutcome: false},
            {id: 4, text: 'Норм', isOutcome: true}
        ],
        messageText: ''
    },
    sidebar: {
        friends: [
            {id: 1, name: 'Игорь', avatar: avatar},
            {id: 2, name: 'Ольга', avatar: avatar},
            {id: 3, name: 'Елена', avatar: avatar},
            {id: 4, name: 'Михаил', avatar: avatar}
        ]
    }
}

export const addPost = () => {
    let newPost = {};
    newPost.id = state.profilePage.postsData.length + 1;
    newPost.message = state.profilePage.newPostText;
    newPost.likesCount = 0;
    state.profilePage.postsData.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export const onPostChange = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const messageTextChange = (newText) => {
    state.dialogsPage.messageText = newText;
    rerenderEntireTree(state);
}

export const sentMessage = () => {
    let newMessage = {};
    newMessage.id = state.dialogsPage.dialogsMessages.length + 1;
    newMessage. text = state.dialogsPage.messageText;
    newMessage.isOutcome = true;
    state.dialogsPage.dialogsMessages.push(newMessage);
    state.dialogsPage.messageText = '';
    rerenderEntireTree(state);
}

export default state;