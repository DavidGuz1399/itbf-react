import axios from "axios";

const hotelApi = axios.create({
    baseURL: 'https://itbf-laravel-production.up.railway.app/'
})
export default hotelApi;