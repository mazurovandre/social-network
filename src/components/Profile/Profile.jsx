import React from "react";
// import style from './Profile.module.sass';
import Info from "./Info/Info";
import Posts from "./Posts/Posts";

const Profile = (props) => {

    return (
        <div>
            <Info state={props.state.personInfo}/>
            <Posts state={props.state.postsData}/>
        </div>
    );
}

export default Profile;