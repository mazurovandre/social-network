import axios from "axios";
import { UserType } from "types/types";

// Users API: https://social-network.samuraijs.com/
// API Doc: https://social-network.samuraijs.com/docs#users_get

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '0072b21d-6ff2-4cd3-a354-531913888109'
    },
    withCredentials: true
})

type UsersAPIType = {
    items: Array<UserType>
    totalCount: number
    error: string | null
}
type AuthMeAPIType = {
    data: {
        id: number
        email: string
        login: string
    }
    resultCode: number
    messages: Array<string>
}
type ResponseAPIType = {
    resultCode: number
    messages: Array<string>
    data: {}
}
type GetUserAPIType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
    photos: {
        small: string
        large: string
    }
}

export const usersAPI = {
    requestUsers(currentPage = 1, pageSize = 10) {
        return instance.get<UsersAPIType>(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    }
}

export const authAPI = {
    authMe() {
        return instance.get<AuthMeAPIType>(`auth/me`).then(response => response.data)
    },
    login(email: string, password: string, rememberMe = false) {
        return instance.post<ResponseAPIType>(`auth/login`, {email, password, rememberMe}).then(response => response.data)
    },
    logout() {
        return instance.delete<ResponseAPIType>(`auth/login`).then(response => response.data)
    }
}

export const followAPI = {
    followUser(id: number) {
        return instance.post<ResponseAPIType>(`follow/${id}`).then(response => response.data)
    },
    unfollowUser(id: number) {
        return instance.delete<ResponseAPIType>(`follow/${id}`).then(response => response.data)
    }
}

export const profileAPI = {
    getUser(userId: number) {
        return instance.get<GetUserAPIType>(`profile/${userId}`).then(response => response.data)
    },
    getStatus(userId: number) {
        return instance.get<string>(`profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.put<ResponseAPIType>(`profile/status/`, {status: status})
    },
}