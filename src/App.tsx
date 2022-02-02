import React, {FC, useEffect} from "react";
import './App.sass';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {initializeThunk} from "./redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";
import Sidebar from "./components/Sidebar/Sidebar";
import {AppStateType} from "./redux/redux-store";
import {withSuspense} from "./hoc/withSuspense";
import withUserID from "./hoc/withUserID";

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"))
const UsersContainer = React.lazy(() => import("./components/Users/UsersContainer"))
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"))

const LazyDialogsContainer = withSuspense(DialogsContainer);
const LazyUsersContainer = withSuspense(UsersContainer);
const LazyProfileContainer = withSuspense(withUserID(ProfileContainer));

const App:FC<MapStateToPropsType & MapDispatchToPropsType> = ({isInitialized, initializeThunk}) => {

    useEffect(() => {
        initializeThunk();
    }, )

    if (!isInitialized) {
        return <Preloader/>
    }
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Sidebar/>
                <main className="main-content">
                    <Routes>
                        <Route path="*" element={<LazyProfileContainer/>}/>
                        <Route path="/profile/:ID/*" element={<LazyProfileContainer/>}/>
                        <Route path="/dialogs/*" element={<LazyDialogsContainer/>}/>
                        <Route path="/news" element={<News/>}/>
                        <Route path="/music" element={<Music/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                        <Route path="/users/*" element={<LazyUsersContainer/>}/>
                        <Route path="/login/*" element={<Login/>}/>
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    )
};

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    isInitialized: state.app.isInitialized
});

type MapStateToPropsType = {
    isInitialized: boolean
}
type MapDispatchToPropsType = {
    initializeThunk: () => void
}

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {initializeThunk})(App);