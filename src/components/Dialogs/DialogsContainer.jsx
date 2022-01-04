import React from "react";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import withAuthRedirectComponent from "../../hoc/withAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        dialogsMessages: state.dialogsPage.dialogsMessages,
        isAuth: state.auth.isAuth
    }
}

export default compose(connect(mapStateToProps, {}), withAuthRedirectComponent)(Dialogs);