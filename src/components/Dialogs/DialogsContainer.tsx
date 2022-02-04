import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import withAuthRedirectComponent from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {AppStateType} from "../../redux/redux-store";
import React from "react";
import {InitialStateType as mapStateToPropsType, sentMessageAC} from "../../redux/dialogsReducer";

export type DialogsContainerPropsType = mapStateToPropsType & MapDispatchToPropsType

type MapDispatchToPropsType = {
    sentMessage: (index: number, text: string) => void
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        dialogsData: state.dialogsPage.dialogsData
    }
}

const mapDispatchToProps = (dispatch: any): MapDispatchToPropsType => {
    return {
        sentMessage: (index, text) => {
            dispatch(sentMessageAC(index, text));
        }
    }
}

export default compose<React.ComponentType>(connect<mapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, mapDispatchToProps), withAuthRedirectComponent)(Dialogs);