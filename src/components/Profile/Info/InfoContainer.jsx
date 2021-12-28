import React from "react";
import {connect} from "react-redux";
import Info from "./Info";

const mapStateToProps = (state) => {
    return {
        personInfo: state.profilePage.personInfo
    }
}

const mapDispatchToProps = () => {
    return {}
}

const InfoContainer = connect(mapStateToProps, mapDispatchToProps)(Info)

export default InfoContainer;