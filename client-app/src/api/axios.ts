import axios from 'axios';

export default axios.create({
    baseURL: "http://localhost:80",
    headers: {
        'Accept':'application.json',
        'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials: true,
})

export const csrf = () => {
    // const csrftoken = getCookie('XSRF-TOKEN');
    // const laravelSession = getCookie('laravel_session');
    // if(!csrftoken || !laravelSession) {
    //     axios.get('/sanctum/csrf-cookie')
    // }
}

const getCookie = (name: string) => {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
