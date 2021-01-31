import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api-drive-on.herokuapp.com/',
});

export default api;
