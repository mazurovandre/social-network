import React, {FC} from "react";
import PostsContainer from "./Posts/PostsContainer";
import InfoContainer from "./Info/InfoContainer";
import '../../index.css'

export type ProfileType = {
    isMyPage: boolean
}


const Profile: FC<ProfileType> = ({isMyPage}) => {
    return (
        <>
            <InfoContainer isMyPage={isMyPage}/>
            <PostsContainer isMyPage={isMyPage}/>
        </>
    )
}

export default Profile