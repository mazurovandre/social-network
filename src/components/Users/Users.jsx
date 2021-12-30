import React from "react";
import style from './Users.module.sass';
import avatar from '../../images/avatar.jpg'
import User from "./User/User";
// import axios from "axios";

const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            {id: 1, isFollowed: true, avatar: avatar, status: 'Привет, как дела?', firstName: 'Александр', lastName: 'Македонский', country: 'Россия', city: 'Москва'},
            {id: 2, isFollowed: false, avatar: avatar, status: 'Хай!', firstName: 'Павел', lastName: 'Иванов', country: 'Украина', city: 'Киев'},
            {id: 3, isFollowed: true, avatar: avatar, status: '', firstName: 'Алексей', lastName: 'Петров', country: 'Германия', city: 'Берлин'},
            {id: 4, isFollowed: false, avatar: avatar, status: 'Статус', firstName: 'Максим', lastName: 'Смирнов', country: 'Англия', city: 'Лондон'}
        ])
    }

    const users = props.users.map(user => <User key={user.id} info={user} toggleFollow={props.toggleFollow}/>)

    return (
        <ul className={style.list}>
            {users}
        </ul>
    );
}

export default Users;