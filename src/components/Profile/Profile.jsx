import React from "react";
// import style from './Profile.module.sass';
import Info from "./Info/Info";
import Posts from "./Posts/Posts";

const Profile = () => {
    return (
        <div>
            <Info />
            <Posts />
        </div>
    );
}

export default Profile;