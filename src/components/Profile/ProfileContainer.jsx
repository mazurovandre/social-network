import React from "react";
import PostsContainer from "./Posts/PostsContainer";
import axios from "axios";
import {setUserProfile} from "../../redux/profileReducer";
import {connect} from "react-redux";
import Info from "./Info/Info";
// import {useMatch} from "react-router";

class ProfileContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount = () => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${2}`)
            .then(response => {
                this.props.setUserProfile(response.data);
            })
    }


    render() {
        return (
            <div>
                <Info {...this.props}/>
                <PostsContainer/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})


// useMatch


export default connect(mapStateToProps, {setUserProfile})(ProfileContainer)

// export default ProfileContainer;