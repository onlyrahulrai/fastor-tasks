import axios from 'axios'


const baseURL = 'http://staging.fastor.in'

let token = localStorage.getItem('token');

const axiosClient = axios.create({
    baseURL,
    headers:{Authorization: `Bearer ${token}`}
});

export default axiosClient;