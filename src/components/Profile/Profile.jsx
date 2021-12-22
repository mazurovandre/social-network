import React from "react";
// import style from './Profile.module.sass';
import Info from "./Info/Info";
import Posts from "./Posts/Posts";

const Profile = (props) => {
    return (
        <div>
            <Info name={props.info.name} birthDate={props.info.birthDate} city={props.info.city} education={props.info.education}/>
            <Posts posts={props.posts}/>
        </div>
    );
}

export default Profile;