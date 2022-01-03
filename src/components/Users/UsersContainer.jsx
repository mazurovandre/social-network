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
import Preloader from "../common/Preloader/Preloader";
import {getUsers} from "../../api/api";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleFetching(true);
        getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleFetching(false);
            this.props.setUsers(data.items);
            this.props.setTotalCount(data.totalCount);
        })
    }

    changeCurrentPage = (currentPage) => {
        this.props.changeCurrentPage(currentPage);
        this.props.toggleFetching(true);
        getUsers(currentPage, this.props.pageSize).then(data => {
            this.props.toggleFetching(false);
            this.props.setUsers(data.items);
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

export default connect(mapStateToProps,
    {toggleFollow, setUsers, setTotalCount, changeCurrentPage, toggleFetching}
    )(UsersContainer);