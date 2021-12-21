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
// import {Routes} from "react-router";

const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Sidebar/>
                <main className="main-content">
                    <Routes>
                        <Route path="/" element={<Profile/>}/>
                        <Route path="/dialogs" element={<Dialogs/>}/>
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
