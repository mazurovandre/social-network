import axios from "axios";

// Users API: https://social-network.samuraijs.com/
// API Doc: https://social-network.samuraijs.com/docs#users_get

export const getUsers = (currentPage = 1, pageSize = 10) => {
    return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`, {
        withCredentials: true
    }).then(response => response.data)
}

export const getUser = (userId = 21586) => {
    return axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
        .then(response => response.data)
}

export const followUser = (id) => {
    return axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`,{}, {
        headers: {
            'API-KEY': '0072b21d-6ff2-4cd3-a354-531913888109'
        },
        withCredentials: true
    }).then(response => response.data)
}

export const unfollowUser = (id) => {
    return axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {
        headers: {
            'api-key': '0072b21d-6ff2-4cd3-a354-531913888109'
        },
        withCredentials: true
    }).then(response => response.data)
}

export const authMe = () => {
    return axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true
    }).then(response => response.data)
}


