import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5000/api',  // Adjust if using a different port or domain
});

export default instance;
