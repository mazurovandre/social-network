import React from "react";
import {connect} from "react-redux";
import {changeCurrentPage, getUsersThunk} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize);
    }

    changeCurrentPage = (currentPage) => {
        this.props.changeCurrentPage(currentPage);
        this.props.getUsersThunk(currentPage, this.props.pageSize);
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

export default connect(mapStateToProps, {changeCurrentPage, getUsersThunk})(UsersContainer);