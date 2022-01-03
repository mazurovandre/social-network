import React from "react";
import {connect} from "react-redux";
import {toggleFollowThunk} from "../../../redux/usersReducer";
import User from "./User";

const UserContainer = (props) => {

    return <User {...props}/>
}

const mapStateToProps = (state) => {
    return {
        isFollowing: state.usersPage.isFollowing
    }
}

export default connect(mapStateToProps, {toggleFollowThunk})(UserContainer);