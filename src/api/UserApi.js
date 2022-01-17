import axiosClient from "./axiosClient"

export const UserApi = {
    get: (_id) => {
        const url = `/user/${_id}`;
        return axiosClient.get(url);
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

