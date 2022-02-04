import {DialogType} from '../types/types'

const SENT_MESSAGE = 'SENT-MESSAGE';

export type InitialStateType = {
    dialogsData: Array<DialogType>
}

let initialState: InitialStateType = {
    dialogsData: [
        {id: 1, name: 'Andrey', dialog: [
                {id: 1, text: 'Hi Andrey!', isOutcome: false},
                {id: 2, text: 'Hello)', isOutcome: true},
                {id: 3, text: 'How are you?', isOutcome: false},
                {id: 4, text: `I'm fine`, isOutcome: true}
            ]},
        {id: 2, name: 'Michael', dialog: [
                {id: 1, text: 'Hi Michael!', isOutcome: false},
                {id: 2, text: 'Hello)', isOutcome: true},
                {id: 3, text: 'How are you?', isOutcome: false},
                {id: 4, text: `I'm fine`, isOutcome: true}
            ]},
        {id: 3, name: 'Kate', dialog: [
                {id: 1, text: 'Hi Kate!', isOutcome: false},
                {id: 2, text: 'Hello)', isOutcome: true},
                {id: 3, text: 'How are you?', isOutcome: false},
                {id: 4, text: `I'm fine`, isOutcome: true}
            ]},
        {id: 4, name: 'Rachel', dialog: [
                {id: 1, text: 'Hi Rachel!', isOutcome: false},
                {id: 2, text: 'Hello)', isOutcome: true},
                {id: 3, text: 'How are you?', isOutcome: false},
                {id: 4, text: `I'm fine`, isOutcome: true}
            ]},
        {id: 5, name: 'Jim', dialog: []},
        {id: 6, name: 'Vlad', dialog: [
                {id: 1, text: 'Hi Vlad!', isOutcome: false},
                {id: 2, text: 'Hello)', isOutcome: true},
                {id: 3, text: 'How are you?', isOutcome: false},
                {id: 4, text: `I'm fine`, isOutcome: true}
            ]},
        {id: 7, name: 'Tom', dialog: [
                {id: 1, text: 'Hi Tom!', isOutcome: false},
                {id: 2, text: 'Hello)', isOutcome: true},
                {id: 3, text: 'How are you?', isOutcome: false},
                {id: 4, text: `I'm fine`, isOutcome: true}
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