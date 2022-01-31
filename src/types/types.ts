export type DialogType = {
    id: number
    name: string
}

export type MessageType = {
    id: number
    text: string
    isOutcome: boolean
}

export type UserType = { // for UsersReducers
    id: number
    name: string
    status: string | null
    photos: {large: null | string, small: null | string}
    followed: boolean
}

export type UserInfoType = {
    aboutMe: string | null
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    photos: {large: null | string, small: null | string}
    userId: number
}

export type ProfilePropsType = {
    profile: UserInfoType
    status: string
}

export enum ResultCodes {
    Success = 0,
    Fail = 1,
    CaptchaRequired = 10
}