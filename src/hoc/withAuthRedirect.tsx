import {Route, Routes} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";
import Login from "../components/Login/Login";
import {AppStateType} from "../redux/redux-store";

type MapStateToPropsForRedirectType = {
    isAuth: boolean
}

const mapStateToPropsForRedirect = (state: AppStateType): MapStateToPropsForRedirectType => ({
    isAuth: state.auth.isAuth
});


export const withAuthRedirectComponent = (Component: any) => {
    class RedirectComponent extends React.Component<MapStateToPropsForRedirectType> {
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