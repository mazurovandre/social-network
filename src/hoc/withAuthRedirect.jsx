import {Route, Routes} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";
import Login from "../components/Login/Login";

const mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth
});


export const withAuthRedirectComponent = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) {
                return (
                    <Routes>
                        <Route path="*" element={<Login/>}/>
                    </Routes>
                )
            }
            return <Component {...this.props} />
        }
    }

    return connect(mapStateToPropsForRedirect)(RedirectComponent)
}

export default withAuthRedirectComponent