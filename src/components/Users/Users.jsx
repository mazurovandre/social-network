import React from "react";
import style from './Users.module.sass';
import User from "./User/User";
import axios from "axios";

// Users API https://social-network.samuraijs.com/

class Users extends React.Component {

    constructor(props) {
        super(props);
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return (
            <ul className={style.list}>
                {this.props.users.map(user => <User key={user.id} info={user} toggleFollow={this.props.toggleFollow}/>)}
            </ul>
        );
    }
}

export default Users;