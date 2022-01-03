import React from "react";
import {setUserProfile} from "../../redux/profileReducer";
import {connect} from "react-redux";
import Profile from "./Profile";
import {getUser} from "../../api/api";


class ProfileContainer extends React.Component {
    componentDidMount = () => {
        let userId = this.props.userId;
        getUser(userId).then(data => {
                this.props.setUserProfile(data);
            })
    }

    render() {
        return <Profile {...this.props}/>;
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);