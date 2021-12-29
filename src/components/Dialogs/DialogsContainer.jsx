import React from "react";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";

const mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        dialogsMessages: state.dialogsPage.dialogsMessages
    }
}

const mapDispatchToProps = () => {
    return {}
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;