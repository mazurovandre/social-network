import React from "react";
import {getUserStatusThunk, getUserThunk, updateUserStatusThunk} from "../../redux/profileReducer";
import {connect} from "react-redux";
import Profile from "./Profile";
import withAuthRedirectComponent from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {
    componentDidMount = () => {
        this.props.getUserThunk(this.props.userId);
        this.props.getUserStatusThunk(this.props.userId)
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile} status={this.props.status}/>;
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})

export default compose(connect(mapStateToProps,
    {getUserThunk, getUserStatusThunk, updateUserStatusThunk}),withAuthRedirectComponent)(ProfileContainer)