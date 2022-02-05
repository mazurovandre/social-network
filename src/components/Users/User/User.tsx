// import React, {FC} from "react";
// import style from './User.module.sass';
// import avatar from '../../../images/avatar.jpg'
// import {NavLink} from "react-router-dom";
// import {UserContainerProps} from "./UserContainer";
//
// const User:FC<UserContainerProps> = (
//     {id, name, status,
//         photos, isFollowing,
//         followed, toggleFollowThunk}) => {
//     return (
//         <li className={style.user}>
//     <div className={style.left}>
//         <NavLink to={`/profile/${id}`}>
//             <img className={style.avatar} src={photos.small !== null ? photos.small : avatar} alt="avatar"/>
//         </NavLink>
//         <button className={style.button} disabled={isFollowing.some(id => id === id)}
//                 onClick={() => {
//                     followed
//                         ? toggleFollowThunk(id, false)
//                         : toggleFollowThunk(id, true)
//                 }}
//         >{followed ? 'Unfollow' : 'Follow'}</button>
//     </div>
//     <div className={style.center}>
//         <div className={style.name}>
//             <h3 className={style.lastName}>{name}</h3>
//         </div>
//         <h4 className={style.status}>{status}</h4>
//     </div>
// </li>
//     );
// }

// export default User;


// <li className={style.user}>
//     <div className={style.left}>
//         <NavLink to={`/profile/${id}`}>
//             <img className={style.avatar} src={photos.small !== null ? photos.small : avatar} alt="avatar"/>
//         </NavLink>
//         <button className={style.button} disabled={isFollowing.some(id => id === id)}
//                 onClick={() => {
//                     followed
//                         ? toggleFollowThunk(id, false)
//                         : toggleFollowThunk(id, true)
//                 }}
//         >{followed ? 'Unfollow' : 'Follow'}</button>
//     </div>
//     <div className={style.center}>
//         <div className={style.name}>
//             <h3 className={style.lastName}>{name}</h3>
//         </div>
//         <h4 className={style.status}>{status}</h4>
//     </div>
// </li>