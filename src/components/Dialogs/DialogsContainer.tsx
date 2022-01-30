import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import withAuthRedirectComponent from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {DialogType} from '../../types/types'
import {MessageType} from '../../types/types'

export interface mapStateToPropsType {
    dialogsData: Array<DialogType>
    dialogsMessages: Array<MessageType>
    isAuth: boolean
}

const mapStateToProps = (state): mapStateToPropsType => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        dialogsMessages: state.dialogsPage.dialogsMessages,
        isAuth: state.auth.isAuth
    }
}

export default compose(connect(mapStateToProps, {}), withAuthRedirectComponent)(Dialogs);