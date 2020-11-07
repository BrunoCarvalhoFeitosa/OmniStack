import axios from 'axios';

//Base URL of API
const api = axios.create({
    baseURL: 'http://localhost:3333',
});

export default api;