import axiosInstance from "../axiosInstance";
import type { ILoginRequest, ILoginResponse, IProfile, IRefreshToken, IRegisterRequest, IRegisterResponse } from "../interfaces/ISignServices";

export const signIn = async (data: ILoginRequest): Promise<ILoginResponse> => {
    const response = await axiosInstance.post("/users/login", data)
    return response.data
}

export const signUp = async (data: IRegisterRequest): Promise<IRegisterResponse> => {
    const response = await axiosInstance.post("/users/register", data)
    return response.data
}

export const logout = async (): Promise<{ message: string }> => {
    const response = await axiosInstance.post("/users/logout")
    return response.data
}

export const refreshToken = async (): Promise<IRefreshToken> => {
    const response = await axiosInstance.post("/users/refresh-token")
    return response.data
}

export const profile = async (): Promise<IProfile> => {
    const response = await axiosInstance.get("/users/profile")
    return response.data
}