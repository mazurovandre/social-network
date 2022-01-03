import React from "react";
import {getUserThunk, setUserProfile} from "../../redux/profileReducer";
import {connect} from "react-redux";
import Profile from "./Profile";


class ProfileContainer extends React.Component {
    componentDidMount = () => {
        this.props.getUserThunk(this.props.userId);
    }

    render() {
        return <Profile {...this.props}/>;
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

export default connect(mapStateToProps, {setUserProfile, getUserThunk})(ProfileContainer);