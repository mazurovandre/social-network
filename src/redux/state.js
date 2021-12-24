import avatar from '../images/avatar.jpg';

let store = {
    _rerenderDOM() {},
    state: {
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
    addPost() {
        let newPost = {};
        newPost.id = this.state.profilePage.postsData.length + 1;
        newPost.message = this.state.profilePage.newPostText;
        newPost.likesCount = 0;
        this.state.profilePage.postsData.push(newPost);
        this.state.profilePage.newPostText = '';
        this._rerenderDOM(this.state);
    },
    onPostChange(newText) {
        this.state.profilePage.newPostText = newText;
        this._rerenderDOM(this.state);
    },
    messageTextChange(newText) {
        this.state.dialogsPage.messageText = newText;
        this._rerenderDOM(this.state);
    },
    sentMessage() {
        let newMessage = {};
        newMessage.id = this.state.dialogsPage.dialogsMessages.length + 1;
        newMessage. text = this.state.dialogsPage.messageText;
        newMessage.isOutcome = true;
        this.state.dialogsPage.dialogsMessages.push(newMessage);
        this.state.dialogsPage.messageText = '';
        this._rerenderDOM(this.state);
    },
    subscribe(observer) {
        this._rerenderDOM = observer
    }
};

export default store;