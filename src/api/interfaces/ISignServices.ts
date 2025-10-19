export interface IRegisterRequest {
    fullName: string
    email: string
    password: string
}
export interface IRegisterResponse {
    success: boolean,
    message: string,
    data: {
        id: string,
        fullName: string,
        email: string
    }
}

export interface ILoginRequest {
    email: string
    password: string
}

export interface ILoginResponse {
    success: boolean,
    message: string,
    data: {
        user: {
            id: string,
            fullName: string,
            email: string,
            role: string,
            isActive: boolean,
            lastLoginAt: string,
            lastLoginIP: string,
            createdAt: string,
            updatedAt: string
        },
        accessToken: string
    }
}

export interface IRefreshToken {
    accessToken: string
}

export interface IProfile {
    id: string,
    fullName: string,
    email: string,
    role: string,
    isActive: boolean,
    lastLoginAt: string,
    lastLoginIP: string,
    createdAt: string,
    updatedAt: string
}


