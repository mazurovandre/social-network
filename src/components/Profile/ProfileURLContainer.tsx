import React, {FC} from "react";
import {useParams} from "react-router-dom";
import ProfileContainer from "./ProfileContainer";



const ProfileURLContainer:FC<{}> = () => {
    const {userId} = useParams<{userId?: string}>()

    return <ProfileContainer userId={userId}/>
}

export default ProfileURLContainer