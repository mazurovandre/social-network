import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import withAuthRedirectComponent from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {AppStateType} from "../../redux/redux-store";
import React from "react";
import {InitialStateType as dialogsDataType} from "../../redux/dialogsReducer";

const mapStateToProps = (state: AppStateType): dialogsDataType => {
    return {
        dialogsData: state.dialogsPage.dialogsData
    }
}

export default compose<React.ComponentType>(connect<dialogsDataType, {}, {}, AppStateType>(mapStateToProps, {}), withAuthRedirectComponent)(Dialogs);