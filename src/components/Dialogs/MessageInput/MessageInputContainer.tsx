// import {changeMessageAreaActionCreator, sentMessageActionCreator} from "../../../redux/dialogsReducer";
// import MessageInput from "./MessageInput";
// import {connect} from "react-redux";
// import {AppStateType} from "../../../redux/redux-store";
//
// export type MessageInputContainerType = MapStateToPropsType & MapDispatchToPropsType
// type MapStateToPropsType = {
//     messageText: string
// }
// type MapDispatchToPropsType = {
//     changeMessageArea: (text: string) => void
//     sentMessage: () => void
// }
//
// let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
//     return {
//         messageText: state.dialogsPage.messageText
//     }
// }
//
// let mapDispatchToProps = (dispatch: any): MapDispatchToPropsType => {
//     return {
//         changeMessageArea: (text) => {
//             let action = changeMessageAreaActionCreator(text);
//             dispatch(action)
//         },
//         sentMessage: () => {
//             dispatch(sentMessageActionCreator());
//         }
//     }
// }
//
// const MessageInputContainer = connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>
// (mapStateToProps, mapDispatchToProps)(MessageInput)
//
// export default MessageInputContainer;