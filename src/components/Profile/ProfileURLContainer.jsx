import React from "react";
import {useParams} from "react-router-dom";
import ProfileContainer from "./ProfileContainer";


const ProfileURLContainer = () => {
    let {userId} = useParams()
    // if (userId === undefined) {
    //     userId = 21586
    // }
    return <ProfileContainer userId={userId}/>
}

export default ProfileURLContainer