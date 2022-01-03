import React from "react";
import {connect} from "react-redux";
import {
    changeCurrentPage,
    setTotalCount,
    setUsers,
    toggleFetching,
    toggleFollow
} from "../../redux/usersReducer";
import Users from "./Users";
import axios from "axios";
import Preloader from "../common/Preloader/Preloader";

// Users API: https://social-network.samuraijs.com/
// API Doc: https://social-network.samuraijs.com/docs#users_get

class UsersContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.toggleFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
            withCredentials: true
        }).then(response => {
            this.props.toggleFetching(false);
            this.props.setUsers(response.data.items);
            this.props.setTotalCount(response.data.totalCount);
        })
    }

    changeCurrentPage = (currentPage) => {
        this.props.changeCurrentPage(currentPage);
        this.props.toggleFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`, {
            withCredentials: true
        }).then(response => {
            this.props.toggleFetching(false);
            this.props.setUsers(response.data.items);
        })
    }

    render() {
        return <>
            <Users totalCount={this.props.totalCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   toggleFollow={this.props.toggleFollow}
                   changeCurrentPage={this.changeCurrentPage}/>
            {this.props.isFetching && <Preloader />}
        </>
    }
}


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalCount: state.usersPage.totalCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         toggleFollow: (id) => {
//             dispatch(toggleFollowAC(id));
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users));
//         },
//         setTotalCount: (totalCount) => {
//             dispatch(setTotalCountAC(totalCount));
//         },
//         changeCurrentPage: (currentPage) => {
//             dispatch(changeCurrentPageAC(currentPage));
//         },
//         toggleFetching: (isFetching) => {
//             dispatch(toggleFetchingAC(isFetching));
//         }
//     }
// }

export default connect(mapStateToProps,
    {toggleFollow, setUsers, setTotalCount, changeCurrentPage, toggleFetching}
    )(UsersContainer);