const CHANGE_MESSAGE_AREA = 'CHANGE-MESSAGE-AREA';
const SENT_MESSAGE = 'SENT-MESSAGE';

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_MESSAGE_AREA:
            return {
                ...state,
                messageText: action.newText
            }
        case SENT_MESSAGE:
            const newMessage = {
                id: state.dialogsMessages.length + 1,
                text: state.messageText,
                isOutcome: true
            };
            if (newMessage.text) {
                return {
                    ...state,
                    messageText: '',
                    dialogsMessages: [...state.dialogsMessages, newMessage]
                }
            }
            return state;
        default:
            return state;
    }
}
export const changeMessageAreaActionCreator = (text) => ({type: CHANGE_MESSAGE_AREA, newText: text});
export const sentMessageActionCreator = () => ({type: SENT_MESSAGE});

export default dialogsReducer;