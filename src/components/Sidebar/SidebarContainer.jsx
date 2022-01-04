import React from "react";
import {connect} from "react-redux";
import Sidebar from "./Sidebar";

const mapStateToProps = (state) => {
    return {
        friends: state.sidebar.friends,
        isAuth: state.auth.isAuth
    }
}

const SidebarContainer = connect(mapStateToProps, {})(Sidebar)

export default SidebarContainer;