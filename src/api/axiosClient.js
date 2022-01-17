import axios from 'axios'
import queryString from 'query-string';

const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_URL_API,
    headers: {
        "content-type": "application/json"
    },
    paramsSerializer: params => queryString.stringify(params)
})

axiosClient.interceptors.request.use(async config => {
    //handle token
    // const token = "dsadadsadsad";
    // config.headers.Authorization = `Bear ${token}`;

    return config;
})

axiosClient.interceptors.response.use(response => {

    if (response && response.data) {
        return response.data;
    }
    return response;
}, (err) => {
    if (err) throw err;

})

export default axiosClient;