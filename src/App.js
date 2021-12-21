import React from "react";
import './App.sass';

import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
      <div className='app-wrapper'>
          <Header />
          <Sidebar />
          <Profile />
          <Footer />
      </div>
  );
}

export default App;
