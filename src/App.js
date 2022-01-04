import React from "react";
import './App.sass';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Footer from "./components/Footer/Footer";
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

const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderContainer />
                <SidebarContainer />
                <main className="main-content">
                    <Routes>
                        <Route path="*" element={<ProfileContainer />}/>
                        <Route path="/profile/:userId/*" element={<ProfileURLContainer />}/>
                        <Route path="/dialogs/*" element={<DialogsContainer />}/>
                        <Route path="/news" element={<News/>}/>
                        <Route path="/music" element={<Music/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                        <Route path="/users/*" element={<UsersContainer/>}/>
                        <Route path="/login/*" element={<Login/>}/>
                    </Routes>
                </main>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
