import React from "react";
import {getUserThunk} from "../../redux/profileReducer";
import {connect} from "react-redux";
import Profile from "./Profile";
import withAuthRedirectComponent from "../../hoc/withAuthRedirect";
import {compose} from "redux";


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

export default compose(connect(mapStateToProps, {getUserThunk}),withAuthRedirectComponent)(ProfileContainer)