import axiosClient from "./axiosClient"

export const UserApi = {
    get: (_id) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                try {
                    const url = `/user/${_id}`;
                    const response = axiosClient.get(url);
                    resolve(response);
                } catch (error) {
                    reject(error);
                }
            }, 2000)

        })
    },
    patch: (_id, data) => {
        const url = `/user/${_id}`;
        return axiosClient.patch(url, data);
    },
    delete: (_id) => {
        const url = `/user/${_id}`;
        return axiosClient.delete(url);
    },
}

