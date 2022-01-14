import React from "react";
import {connect} from "react-redux";
import Info from "./Info";
import {updateUserStatusThunk} from "../../../redux/profileReducer";

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}

const InfoContainer = connect(mapStateToProps, {updateUserStatusThunk})(Info)

export default InfoContainer;