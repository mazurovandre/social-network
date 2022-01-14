import React from "react";
import './App.sass';
import {BrowserRouter, Route, Routes} from 'react-router-dom';


import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import SidebarContainer from "./components/Sidebar/SidebarContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import ProfileURLContainer from "./components/Profile/ProfileURLContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {initializeThunk} from "./redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";

class App extends React.Component {

    componentDidMount() {
        this.props.initializeThunk();
    }

    render() {
        if (!this.props.isInitialized) {
            return <Preloader/>
        }
        return (
            <BrowserRouter>
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <SidebarContainer/>
                    <main className="main-content">
                        <Routes>
                            <Route path="*" element={<ProfileContainer/>}/>
                            <Route path="/profile/:userId/*" element={<ProfileURLContainer/>}/>
                            <Route path="/dialogs/*" element={<DialogsContainer/>}/>
                            <Route path="/news" element={<News/>}/>
                            <Route path="/music" element={<Music/>}/>
                            <Route path="/settings" element={<Settings/>}/>
                            <Route path="/users/*" element={<UsersContainer/>}/>
                            <Route path="/login/*" element={<Login/>}/>
                        </Routes>
                    </main>
                </div>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state) => ({
    isInitialized: state.app.isInitialized
});

export default connect(mapStateToProps, {initializeThunk})(App);