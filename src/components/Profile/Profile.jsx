import React from "react";
import PostsContainer from "./Posts/PostsContainer";
import Info from "./Info/Info";


const Profile = (props) => {

    return (
        <>
            <Info {...props}/>
            <PostsContainer/>
        </>
    )
}

export default Profile