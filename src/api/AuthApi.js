import axiosClient from "./axiosClient"

export const AuthApi = {
    login: (data) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                try {
                    const url = "/word";
                    const response = axiosClient.post(url, data);
                    resolve(response);
                } catch (error) {
                    reject(error);
                }
            }, 2000)

        })
    }
}

