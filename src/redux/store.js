import avatar from '../images/avatar.jpg';
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

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
                {id: 1, name: 'Andrew'},
                {id: 2, name: 'Max'},
                {id: 3, name: 'Steve'},
                {id: 4, name: 'Marry'},
                {id: 5, name: 'Kate'},
                {id: 6, name: 'Kevin'},
                {id: 7, name: 'Margaret'}
            ],
            dialogsMessages: [
                {id: 1, text: 'Hi!', isOutcome: false},
                {id: 2, text: 'Hello)', isOutcome: true},
                {id: 3, text: 'How you doing?', isOutcome: false},
                {id: 4, text: 'Fine', isOutcome: true}
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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._rerenderDOM(this._state);
    }
};

export default store;