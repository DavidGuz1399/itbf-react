import axios from "axios";

const hotelApi = axios.create({
    baseURL: 'http://127.0.0.1:8000',
    // baseURL: 'https://itbf-laravel-production.up.railway.app/'
})
export default hotelApi;