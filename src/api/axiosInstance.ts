import axios from "axios";
import { refreshToken } from "./services/authServices";

const axiosInstance = axios.create({
    baseURL: "https://case.nodelabs.dev/api",
    headers: { "Content-Type": "application/json" },
    withCredentials: true
});

axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        if (
            error.response &&
            error.response.status === 401 &&
            !originalRequest._retry
        ) {
            originalRequest._retry = true;

            try {
                const storedRefresh = localStorage.getItem("refreshToken");
                if (!storedRefresh) throw new Error("No refresh token found");

                const responseRefresh = await refreshToken();
                localStorage.setItem("accessToken", responseRefresh.accessToken);
                axiosInstance.defaults.headers.common[
                    "Authorization"
                ] = `Bearer ${responseRefresh.accessToken}`;
                originalRequest.headers.Authorization = `Bearer ${responseRefresh.accessToken}`;

                return axiosInstance(originalRequest);
            } catch (refreshError) {
                console.error("Refresh token failed:", refreshError);
                localStorage.removeItem("accessToken");
                window.location.href = "/sign-in";
            }
        }

        return Promise.reject(error);
    }
);

export default axiosInstance;
