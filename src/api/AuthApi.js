import axiosClient from "./axiosClient"

export const AuthApi = {
    login: (data) => {
        const url = "/login";
        return axiosClient.post(url, data);
    }
}

