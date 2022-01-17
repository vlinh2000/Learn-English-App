import axiosClient from "./axiosClient"

export const LessonApi = {
    getAll: () => {
        const url = "/lesson";
        return axiosClient.get(url);
    },
    get: (_id) => {
        const url = `/lesson/${_id}`;
        return axiosClient.get(url);
    },
    add: (data) => {
        const url = "/lesson";
        return axiosClient.post(url, data);
    },
    patch: (_id, data) => {
        const url = `/lesson/${_id}`;
        return axiosClient.patch(url, data);
    },
    delete: (_id) => {
        const url = `/lesson/${_id}`;
        return axiosClient.delete(url);
    },
}

