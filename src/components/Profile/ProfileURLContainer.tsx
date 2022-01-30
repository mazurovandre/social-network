import React, {FC} from "react";
import {useParams} from "react-router-dom";
import ProfileContainer from "./ProfileContainer";

const ProfileURLContainer:FC<{}> = () => {
    const {userId} = useParams<{userId: string}>()

    // @ts-ignore
    return <ProfileContainer userId={Number(userId)}/>
}

export default ProfileURLContainer