import React, {FC, useEffect} from "react";
import style from './App.module.sass';
import './index.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {initializeThunk} from "./redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";
import {AppStateType} from "./redux/redux-store";
import {withSuspense} from "./hoc/withSuspense";
import withUserID from "./hoc/withUserID";
import 'antd/dist/antd.css';
import {Layout} from 'antd';
const {Header, Content} = Layout;

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"))
const UsersContainer = React.lazy(() => import("./components/Users/UsersContainer"))
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"))

const LazyDialogsContainer = withSuspense(DialogsContainer);
const LazyUsersContainer = withSuspense(UsersContainer);
const LazyProfileContainer = withSuspense(withUserID(ProfileContainer));

const App: FC<MapStateToPropsType & MapDispatchToPropsType> = ({isInitialized, initializeThunk}) => {

    useEffect(() => {
        initializeThunk();
    })

    if (!isInitialized) return <Preloader/>

    return (
        <BrowserRouter>
            <Layout style={{backgroundColor: 'white'}}>
                <Header className={style.header} style={{backgroundColor: 'white', padding: '0px'}}>
                    <HeaderContainer/>
                </Header>
                <Layout style={{backgroundColor: 'white'}}>
                    <Content className='container' style={{padding: '20px'}}>
                        <Routes>
                            <Route path="*" element={<LazyProfileContainer/>}/>
                            <Route path="/profile/:ID/*" element={<LazyProfileContainer/>}/>
                            <Route path="/dialogs/*" element={<LazyDialogsContainer/>}/>
                            <Route path="/users/*" element={<LazyUsersContainer/>}/>
                            <Route path="/login/*" element={<Login/>}/>
                        </Routes>
                    </Content>
                </Layout>
            </Layout>
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

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>
(mapStateToProps, {initializeThunk})(App);