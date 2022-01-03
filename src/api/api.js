import axios from "axios";

// Users API: https://social-network.samuraijs.com/
// API Doc: https://social-network.samuraijs.com/docs#users_get

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '0072b21d-6ff2-4cd3-a354-531913888109'
    },
    withCredentials: true
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    getUser(userId = 21586) {
        return instance.get(`profile/${userId}`).then(response => response.data)
    },
    followUser(id) {
        return instance.post(`follow/${id}`).then(response => response.data)
    },
    unfollowUser(id) {
        return instance.delete(`follow/${id}`).then(response => response.data)
    },
    authMe() {
        return instance.get(`https://social-network.samuraijs.com/api/1.0/auth/me`).then(response => response.data)
    }
}

// export const getUsers = (currentPage = 1, pageSize = 10) => {
//     return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
// }
//
// export const getUser = (userId = 21586) => {
//     return instance.get(`profile/${userId}`).then(response => response.data)
// }
//
// export const followAPI = {
//     followUser(id) {
//         return instance.post(`follow/${id}`).then(response => response.data)
//     },
//     unfollowUser(id) {
//         return instance.delete(`follow/${id}`).then(response => response.data)
//     }
// }
//
// // export const followUser = (id) => {
// //     return instance.post(`follow/${id}`).then(response => response.data)
// // }
// //
// // export const unfollowUser = (id) => {
// //     return instance.delete(`follow/${id}`).then(response => response.data)
// // }
//
// export const authAPI = {
//     authMe() {
//         return instance.get(`https://social-network.samuraijs.com/api/1.0/auth/me`).then(response => response.data)
//     }
// }
//
// // export const authMe = () => {
// //     return instance.get(`https://social-network.samuraijs.com/api/1.0/auth/me`).then(response => response.data)
// // }
//

