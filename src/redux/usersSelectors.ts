import {createSelector} from "reselect";
import {AppStateType} from "./redux-store";

const getUsersReselect = (state: AppStateType) => state.usersPage.users;
const getUsersTotalCountReselect = (state: AppStateType) => state.usersPage.totalCount;
const getUsersPageSizeReselect = (state: AppStateType) => state.usersPage.pageSize;
const getUsersCurrentPageReselect = (state: AppStateType) => state.usersPage.currentPage;
const getUsersIsFetchingReselect = (state: AppStateType) => state.usersPage.isFetching;

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