import avatar from '../images/avatar.jpg';

const ADD_POST = 'ADD-POST';
const ON_POST_CHANGE = 'ON-POST-CHANGE';
const CHANGE_MESSAGE_AREA = 'CHANGE-MESSAGE-AREA';
const SENT_MESSAGE = 'SENT-MESSAGE';

let store = {
    _rerenderDOM() {},
    _state: {
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
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._rerenderDOM = observer
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {};
            newPost.id = this._state.profilePage.postsData.length + 1;
            newPost.message = this._state.profilePage.newPostText;
            newPost.likesCount = 0;
            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._rerenderDOM(this._state);
        } else if (action.type === ON_POST_CHANGE) {
            this._state.profilePage.newPostText = action.newText;
            this._rerenderDOM(this._state);
        } else if (action.type === CHANGE_MESSAGE_AREA) {
            this._state.dialogsPage.messageText = action.newText;
            this._rerenderDOM(this._state);
        } else if (action.type === SENT_MESSAGE) {
            let newMessage = {};
            newMessage.id = this._state.dialogsPage.dialogsMessages.length + 1;
            newMessage. text = this._state.dialogsPage.messageText;
            newMessage.isOutcome = true;
            this._state.dialogsPage.dialogsMessages.push(newMessage);
            this._state.dialogsPage.messageText = '';
            this._rerenderDOM(this._state);
        }
    }
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const onPostChangeActionCreator = (text) => ({type: ON_POST_CHANGE, newText: text});
export const changeMessageAreaActionCreator = (text) => ({type: CHANGE_MESSAGE_AREA, newText: text});
export const sentMessageActionCreator = () => ({type: SENT_MESSAGE});

export default store;