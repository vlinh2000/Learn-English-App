import axiosClient from "./axiosClient"

export const WordApi = {
    getAll: () => {
        const url = "/word";
        return axiosClient.get(url);
    },
    getAllByLesson: (params) => {
        const url = `/word`;
        return axiosClient.get(url, { params });
    },
    get: (_id) => {
        const url = `/word/${_id}`;
        return axiosClient.get(url);
    },
    add: (data) => {
        const url = "/word";
        return axiosClient.post(url, data);
    },
    patch: (_id, data) => {
        const url = `/word/${_id}`;
        return axiosClient.patch(url, data);
    },
    delete: (_id) => {
        const url = `/word/${_id}`;
        return axiosClient.delete(url);
    },
}

