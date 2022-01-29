const CHANGE_MESSAGE_AREA = 'CHANGE-MESSAGE-AREA';
const SENT_MESSAGE = 'SENT-MESSAGE';

type DialogType = {
    id: number
    name: string
}

type MessageType = {
    id: number
    text: string
    isOutcome: boolean
}

type InitialStateType = {
    dialogsData: Array<DialogType>
    dialogsMessages: Array<MessageType>
    messageText: string
}

let initialState: InitialStateType = {
    dialogsData: [
        {id: 1, name: 'Andrey'},
        {id: 2, name: 'Michael'},
        {id: 3, name: 'Kate'},
        {id: 4, name: 'Rachel'},
        {id: 5, name: 'Vlad'},
        {id: 6, name: 'John'},
        {id: 7, name: 'Tom'}
    ],
    dialogsMessages: [
        {id: 1, text: 'Hi!', isOutcome: false},
        {id: 2, text: 'Hello)', isOutcome: true},
        {id: 3, text: 'How are you?', isOutcome: false},
        {id: 4, text: `I'm fine`, isOutcome: true}
    ],
    messageText: ''
}

const dialogsReducer = (state = initialState, action): InitialStateType => {
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

type ChangeMessageAreaActionCreatorType = {
    type: typeof CHANGE_MESSAGE_AREA;
    newText: string
}

type SentMessageActionCreatorType = {
    type: typeof SENT_MESSAGE
}

export const changeMessageAreaActionCreator = (text: string): ChangeMessageAreaActionCreatorType =>
    ({type: CHANGE_MESSAGE_AREA, newText: text});

export const sentMessageActionCreator = (): SentMessageActionCreatorType =>
    ({type: SENT_MESSAGE});

export default dialogsReducer;