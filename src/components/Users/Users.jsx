import React from "react";
import style from './Users.module.sass';
import User from "./User/User";
import axios from "axios";

// Users API: https://social-network.samuraijs.com/
// API Doc: https://social-network.samuraijs.com/docs#users_get

class Users extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalCount(response.data.totalCount);
        })
    }
    changeCurrentPage(currentPage) {
        this.props.changeCurrentPage(currentPage);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}`).then(response => {
            this.props.setUsers(response.data.items);
        })
    }

    render() {
        const totalPages = Math.ceil(this.props.totalCount / this.props.pageSize);
        const pagesCount = 10;
        const currentPage = this.props.currentPage;
        const pages = [];
        for (let i = 1; i <= totalPages; i++) {
            if (i > pagesCount) {
                break;
            }
            pages.push(i);
        }
        const pagesItems = pages.map(num => <li className={num === currentPage ? style.active : undefined} key={num}
        onClick={() => {this.changeCurrentPage(num)}}>{num}</li>);
        return (
            <div>
                <ul className={style.list}>
                    {this.props.users.map(user => <User key={user.id} info={user} toggleFollow={this.props.toggleFollow}/>)}
                </ul>
                <ul className={style.pagination}>
                    {pagesItems}
                </ul>
            </div>
        );
    }
}

export default Users;