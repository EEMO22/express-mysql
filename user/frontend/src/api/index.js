import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000/',
});

const header = {
    'Content-type': 'application/json; charset=UTF-8',
};

axios.defaults.headers.post = null;

function signUp(userData) {
    return axiosInstance.post('api/users/signup', userData, { header });
}

export default { signUp };
