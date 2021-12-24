import React from "react";
// import style from './Profile.module.sass';
import Info from "./Info/Info";
import Posts from "./Posts/Posts";
// import {onPostChange} from "../../redux/state";
// import App from "../../App";

const Profile = (props) => {

    return (
        <div>
            <Info state={props.state}/>
            <Posts state={props.state} store={props.store}/>
        </div>
    );
}

export default Profile;