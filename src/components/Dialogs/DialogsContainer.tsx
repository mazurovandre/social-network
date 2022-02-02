import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import withAuthRedirectComponent from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {DialogType} from '../../types/types'
import {MessageType} from '../../types/types'
import {AppStateType} from "../../redux/redux-store";
import React from "react";

export type MapStateToPropsType = {
    dialogsData: Array<DialogType>
    dialogsMessages: Array<MessageType>
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        dialogsMessages: state.dialogsPage.dialogsMessages
    }
}

export default compose<React.ComponentType>(connect<MapStateToPropsType, {}, {}, AppStateType>(mapStateToProps, {}), withAuthRedirectComponent)(Dialogs);