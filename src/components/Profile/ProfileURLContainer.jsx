import React from "react";
import {useParams} from "react-router-dom";
import ProfileContainer from "./ProfileContainer";


const ProfileURLContainer = () => {
    const {userId} = useParams()
    return <ProfileContainer userId={userId}/>
}

export default ProfileURLContainer