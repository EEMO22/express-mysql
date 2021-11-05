import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000/',
});

function signUp(userData) {
    return axiosInstance.post('api/users/signup', userData);
}

export default { signUp };
