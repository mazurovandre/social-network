import {createSelector} from "reselect";

const getUsersReselect = (state: any) => state.usersPage.users;
const getUsersTotalCountReselect = (state: any) => state.usersPage.totalCount;
const getUsersPageSizeReselect = (state: any) => state.usersPage.pageSize;
const getUsersCurrentPageReselect = (state: any) => state.usersPage.currentPage;
const getUsersIsFetchingReselect = (state: any) => state.usersPage.isFetching;

// Reselect lib:

export const getUsers = createSelector(getUsersReselect,
    (users) => users.filter(() => true)) // фейковая фильтрация

export const getUsersTotalCount = createSelector(getUsersTotalCountReselect,
    (totalCount) => totalCount)

export const getUsersPageSize = createSelector(getUsersPageSizeReselect,
    (pageSize) => pageSize)

export const getUsersCurrentPage = createSelector(getUsersCurrentPageReselect,
    (currentPage) => currentPage)

export const getUsersIsFetching = createSelector(getUsersIsFetchingReselect,
    (isFetching) => isFetching)