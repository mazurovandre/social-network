import React from "react";
import './App.sass';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
// import {messageTextChange, onPostChange, sentMessage} from "./redux/state";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Sidebar state={props.appState.sidebar}/>
                <main className="main-content">
                    <Routes>
                        <Route path="/" element={<Profile state={props.appState.profilePage} addPost={props.addPost}  onPostChange={props.onPostChange}/>}/>
                        <Route path="/dialogs" element={<Dialogs state={props.appState.dialogsPage} messageTextChange={props.messageTextChange} sentMessage={props.sentMessage}/>}/>
                        <Route path="/news" element={<News/>}/>
                        <Route path="/music" element={<Music/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                    </Routes>
                </main>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
