import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import withAuthRedirectComponent from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {DialogType} from '../../types/types'
import {MessageType} from '../../types/types'
import {AppStateType} from "../../redux/redux-store";
import React from "react";

export interface MapStateToPropsType {
    dialogsData: Array<DialogType>
    dialogsMessages: Array<MessageType>
    isAuth: boolean
}

interface MapDispatchToPropsType {}
interface OwnProps {}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        dialogsMessages: state.dialogsPage.dialogsMessages,
        isAuth: state.auth.isAuth
    }
}

export default compose<React.ComponentType>(connect<MapStateToPropsType, MapDispatchToPropsType, OwnProps, AppStateType>(mapStateToProps, {}), withAuthRedirectComponent)(Dialogs);