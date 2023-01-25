import axios from 'axios';

export default axios.create({
    baseURL: "http://localhost:80",
    withCredentials: true,
})

export const csrf = () => {
    axios.get('/sanctum/csrf-cookie')
}
