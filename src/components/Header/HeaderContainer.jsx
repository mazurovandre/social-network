import React from "react";
import Header from "./Header";
import {setUserData} from "../../redux/authReducer";
import {connect} from "react-redux";
import {authMe} from "../../api/api";

class HeaderContainer extends React.Component {

    componentDidMount() {
        authMe().then(data => {
            if (data.resultCode === 0) {
                this.props.setUserData(data.data.id, data.data.login, data.data.email);
            }
        })
    }

    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export default connect(mapStateToProps, {setUserData})(HeaderContainer);