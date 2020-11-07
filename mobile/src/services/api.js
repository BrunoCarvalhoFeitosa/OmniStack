import axios from 'axios';

//Base URL of API
const api = axios.create({
    baseURL: 'http://192.168.0.9:3333'
});

export default api;