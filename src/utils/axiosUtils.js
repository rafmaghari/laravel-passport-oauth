import axios from 'axios';
import JsCookie from "js-cookie";

const baseURL = `http://localhost/api`;

const axiosUtils = axios.create({
    baseURL
});

axiosUtils.interceptors.request.use(
    config => {
        const token = JsCookie.get('AUTH_TOKEN');

        config.headers['Authorization'] = `Bearer ${token}`;

        return config;
    },
    error => {
        if (401 === error.response.status || 419 === error.response.status) {
            console.log(error)
        } else {
            return Promise.reject(error)
        }
    }
)

axiosUtils.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    if (401 === error.response.status || 419 === error.response.status) {
        console.log(error)
    } else {
        return Promise.reject(error)
    }
});

export default axiosUtils;
