import {Route, Routes} from "react-router-dom";
import React, {FC} from "react";
import {connect} from "react-redux";
import Login from "../components/Login/Login";
import {AppStateType} from "../redux/redux-store";

type MapStateToPropsForRedirectType = {
    isAuth: boolean
}

const mapStateToPropsForRedirect = (state: AppStateType): MapStateToPropsForRedirectType => ({
    isAuth: state.auth.isAuth
});


export function withAuthRedirectComponent<WCP>(WrappedComponent: React.ComponentType<WCP>) {
    const RedirectComponent:FC<MapStateToPropsForRedirectType> = (props) => {
        const {isAuth, ...restProps} = props
        if (!isAuth) {
            return (
                <Routes>
                    <Route path="*" element={<Login/>}/>
                </Routes>
            )
        }
        return <WrappedComponent {...restProps as WCP} />
    }

    return connect<MapStateToPropsForRedirectType, {}, {}, AppStateType>(mapStateToPropsForRedirect)(RedirectComponent)
}

export default withAuthRedirectComponent