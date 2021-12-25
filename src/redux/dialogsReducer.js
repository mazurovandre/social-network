const CHANGE_MESSAGE_AREA = 'CHANGE-MESSAGE-AREA';
const SENT_MESSAGE = 'SENT-MESSAGE';

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case CHANGE_MESSAGE_AREA:
            state.messageText = action.newText;
            break;
        case SENT_MESSAGE:
            let newMessage = {};
            newMessage.id = state.dialogsMessages.length + 1;
            newMessage.text = state.messageText;
            newMessage.isOutcome = true;
            state.dialogsMessages.push(newMessage);
            state.messageText = '';
            break;
    }
    return state;
}

export default dialogsReducer;