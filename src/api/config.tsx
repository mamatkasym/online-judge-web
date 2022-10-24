import axios from "axios"

const apiClient = axios.create({
    baseURL: process.env.REACYT_APP_API_URL
})

export default apiClient;
