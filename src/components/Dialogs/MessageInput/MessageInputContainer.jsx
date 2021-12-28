import React from "react";
import {changeMessageAreaActionCreator, sentMessageActionCreator} from "../../../redux/dialogsReducer";
import MessageInput from "./MessageInput";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        changeMessageArea: (text) => {
            let action = changeMessageAreaActionCreator(text);
            dispatch(action)
        },
        sentMessage: () => {
            dispatch(sentMessageActionCreator());
        }
    }
}

const MessageInputContainer = connect(mapStateToProps, mapDispatchToProps)(MessageInput)

export default MessageInputContainer;