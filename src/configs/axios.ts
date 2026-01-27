import axios from "axios"

const apiCall = axios.create({
    baseURL: process.env.NEXT_PUBLIC_DEV_BASE_URL
})

export default apiCall