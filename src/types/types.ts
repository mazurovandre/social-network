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