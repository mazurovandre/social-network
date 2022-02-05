import {DialogType} from '../types/types'

const SENT_MESSAGE = 'SENT_MESSAGE';

export type InitialStateType = {
    dialogsData: Array<DialogType>
}

let initialState: InitialStateType = {
    dialogsData: [
        {id: 1, name: 'Andrey', dialog: [
                {id: 1, text: 'Hello!', isOutcome: false},
                {id: 2, text: 'Hi Andrey!', isOutcome: true},
                {id: 3, text: 'How is your social network doing?)', isOutcome: false},
                {id: 4, text: `Yo...`, isOutcome: false}
            ]},
        {id: 2, name: 'Michael', dialog: [
                {id: 1, text: 'Yo!', isOutcome: false},
                {id: 2, text: 'Hello', isOutcome: true},
                {id: 3, text: 'When you already find a job?', isOutcome: false}
            ]},
        {id: 3, name: 'Kate', dialog: [
                {id: 1, text: 'Hi=*', isOutcome: false},
                {id: 2, text: 'Hello, Kate!', isOutcome: true},
                {id: 3, text: 'Text me when you\'re bored', isOutcome: false}
            ]},
        {id: 4, name: 'Rachel', dialog: [
                {id: 1, text: 'Hi)', isOutcome: false}
            ]},
        {id: 5, name: 'Jim', dialog: []},
        {id: 6, name: 'Vlad', dialog: [
                {id: 1, text: 'Happy Birthday!', isOutcome: false},
                {id: 2, text: 'Thank you!', isOutcome: true},
                {id: 3, text: 'Happy Birthday!', isOutcome: true},
                {id: 4, text: `Thank you!`, isOutcome: false}
            ]},
        {id: 7, name: 'Mark', dialog: [
                {id: 1, text: 'Oh hi Mark!', isOutcome: true},
                {id: 2, text: 'Anyway how\'s your sex life', isOutcome: true},
                {id: 3, text: 'Shut up!', isOutcome: false},
                {id: 4, text: `Haha, what a story, Mark`, isOutcome: true}
            ]}
    ]
}

const dialogsReducer = (state = initialState, action: DialogsReducerActionType): InitialStateType => {
    switch (action.type) {
        case SENT_MESSAGE:
            let dataWithNewMessage = {...state.dialogsData[action.index]};
            dataWithNewMessage.dialog = [...state.dialogsData[action.index].dialog]
            const newMessage = {
                id: state.dialogsData[action.index].dialog.length + 1,
                text: action.text,
                isOutcome: true
            };
            dataWithNewMessage.dialog.push(newMessage)
            return {
                dialogsData: [
                    ...state.dialogsData.slice(0, action.index),
                    dataWithNewMessage,
                    ...state.dialogsData.slice(action.index + 1)
                ]
            }
        default:
            return state;
    }
}

type DialogsReducerActionType = SentMessageACType

type SentMessageACType = {
    type: typeof SENT_MESSAGE
    index: number
    text: string
}

export const sentMessageAC = (index: number, text: string): SentMessageACType =>
    ({type: SENT_MESSAGE, index, text});

export default dialogsReducer;