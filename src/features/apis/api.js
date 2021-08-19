import axios from "axios"

const api = axios.create({
    // baseURL: 'https://611cd5a77d273a0017e2f47c.mockapi.io/'
    baseURL: 'http://localhost:8090/'
})


export default api;

