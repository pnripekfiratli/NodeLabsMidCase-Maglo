import { useMutation, useQuery } from "@tanstack/react-query";
import type { ILoginRequest, ILoginResponse, IProfile, IRefreshToken, IRegisterRequest, IRegisterResponse } from "../api/interfaces/ISignServices";
import { logout, profile, refreshToken, signIn, signUp } from "../api/services/authServices";
import toast from "react-hot-toast";
import { handleApiError } from "../utils/handleApiError";

export function useSignIn() {
    return useMutation<ILoginResponse, Error, ILoginRequest>({
        mutationFn: signIn,
        onSuccess: async (data) => {
            toast.success(`Welcome back, ${data.data.user.fullName}!`);
            localStorage.setItem("accessToken", data.data.accessToken);
        },
        onError: handleApiError,
    })
}

export function useSignUp() {
    return useMutation<IRegisterResponse, Error, IRegisterRequest>({
        mutationFn: signUp,
        onSuccess: (data) => {
            toast.success(data.message || "Account created");
        },
        onError: handleApiError,
    })
}

export function useLogout() {
    return useMutation<{ message: string }, Error>({
        mutationFn: logout,
        onSuccess: (data) => {
            toast.success(data.message || "Logged out 👋");
            localStorage.removeItem("accessToken");
        },
        onError: handleApiError,
    })
}

export function useRefreshToken() {
    return useMutation<IRefreshToken, Error>({
        mutationFn: refreshToken,
        onSuccess: (data) => {
            localStorage.setItem("accessToken", data.accessToken);
        },
        onError: handleApiError,
    })
}

export function useProfile() {
    return useQuery<IProfile, Error>({
        queryKey: ["profile"],
        queryFn: profile,
        enabled: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        retry: false,
    })
}