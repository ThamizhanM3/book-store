import axios from "axios";

const API_URL = window.__env__?.VITE_APP_API_URL || 'http://localhost:5555'

const API = axios.create({
    // baseURL: import.meta.env.VITE_APP_API_URL,
    baseURL: API_URL,
});

export default API;