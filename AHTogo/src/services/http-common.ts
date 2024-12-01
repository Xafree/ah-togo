import axios from "axios";
import config from "../media/configue.prod.json";


const REACT_APP_BACKEND_BASE_API = config.apiUrl;

export const axiosInstance= axios.create({
    baseURL: REACT_APP_BACKEND_BASE_API+"wordpress/wp-json/ah-togo",
    withCredentials: true,
    headers: {
        "Content-type": "application/json"
    }
});

export default axiosInstance;