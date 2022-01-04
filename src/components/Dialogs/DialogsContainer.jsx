import React from "react";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import withAuthRedirectComponent from "../../hoc/withAuthRedirect";

const mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        dialogsMessages: state.dialogsPage.dialogsMessages,
        isAuth: state.auth.isAuth
    }
}

// let AuthRedirectComponent = (props) => {
//     if (!props.isAuth) {
//         return (
//             <Routes>
//                 <Route path="*" element={<Login />}/>
//             </Routes>
//         )
//     }
//     return <Dialogs {...props} />
// }

const AuthRedirectComponent = withAuthRedirectComponent(Dialogs)

const DialogsContainer = connect(mapStateToProps, {})(AuthRedirectComponent)

export default DialogsContainer;