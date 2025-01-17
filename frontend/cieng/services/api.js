import axios from "axios"

const api = axios.create({
    baseURL: "http://192.168.99.161:6969"
})

export default api;