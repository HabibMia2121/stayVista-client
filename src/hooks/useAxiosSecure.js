import axios from "axios";
import { clearCookie } from "../api/auth";

const axiosSecure = axios.create({
     baseURL: 'http://localhost:5000',
     withCredentials: true,
})

const useAxiosSecure = () => {

    // intercept response and unauthorized error message
    axiosSecure.interceptors.response.use(response => {
        return response;
    }, async (error) => {
        if (error.response && (error.response.status === 401 || error.response.status === 403)) {
            await clearCookie();
            window.location.replace('/')
        }
        return Promise.reject(error);
    });

    return axiosSecure;
}


export default useAxiosSecure;