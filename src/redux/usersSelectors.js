import {createSelector} from "reselect";

const getUsersReselect = state => state.usersPage.users;
const getUsersTotalCountReselect = state => state.usersPage.totalCount;
const getUsersPageSizeReselect = state => state.usersPage.pageSize;
const getUsersCurrentPageReselect = state => state.usersPage.currentPage;
const getUsersIsFetchingReselect = state => state.usersPage.isFetching;

// Reselect lib:

export const getUsers = createSelector(getUsersReselect,
    (users) => users.filter(user => true)) // фейковая фильтрация

export const getUsersTotalCount = createSelector(getUsersTotalCountReselect,
    (totalCount) => totalCount)

export const getUsersPageSize = createSelector(getUsersPageSizeReselect,
    (pageSize) => pageSize)

export const getUsersCurrentPage = createSelector(getUsersCurrentPageReselect,
    (currentPage) => currentPage)

export const getUsersIsFetching = createSelector(getUsersIsFetchingReselect,
    (isFetching) => isFetching)