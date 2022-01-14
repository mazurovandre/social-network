import React from "react";
import {connect} from "react-redux";
import {getUsersThunk} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import withAuthRedirectComponent from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getUsersTotalCount,
    getUsers,
    getUsersPageSize,
    getUsersCurrentPage,
    getUsersIsFetching
} from "../../redux/usersSelectors";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize);
    }

    changeCurrentPage = (currentPage) => {
        this.props.getUsersThunk(currentPage, this.props.pageSize);
    }

    render() {
        return <>
            <Users totalCount={this.props.totalCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   toggleFollow={this.props.toggleFollow}
                   changeCurrentPage={this.changeCurrentPage} />
            {this.props.isFetching && <Preloader />}
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        totalCount: getUsersTotalCount(state),
        pageSize: getUsersPageSize(state),
        currentPage: getUsersCurrentPage(state),
        isFetching: getUsersIsFetching(state)
    }
}

export default compose(connect(mapStateToProps, {getUsersThunk}), withAuthRedirectComponent)(UsersContainer)

