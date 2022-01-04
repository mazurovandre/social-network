import React from "react";
import {getUserThunk} from "../../redux/profileReducer";
import {connect} from "react-redux";
import Profile from "./Profile";
import withAuthRedirectComponent from "../../hoc/withAuthRedirect";


class ProfileContainer extends React.Component {
    componentDidMount = () => {
        this.props.getUserThunk(this.props.userId);
    }

    render() {
        return <Profile {...this.props}/>;
    }
}

// let AuthRedirectComponent = (props) => {
//     if (!props.isAuth) {
//         return (
//             <Routes>
//                 <Route path="*" element={<Login />}/>
//             </Routes>
//         )
//     }
//     return <ProfileContainer {...props} />
// }


let AuthRedirectComponent = withAuthRedirectComponent(ProfileContainer);

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    // isAuth: state.auth.isAuth
})


export default connect(mapStateToProps, {getUserThunk})(AuthRedirectComponent);