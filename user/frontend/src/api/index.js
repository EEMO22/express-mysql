import axios from 'axios';
import setInterceptors from './common/interceptors';

function createAxiosService() {
    const axiosService = axios.create({
        baseURL: process.env.VUE_APP_API_URL,
    });
    return setInterceptors(axiosService);
}

const axiosService = createAxiosService();

function signUp(user) {
    const url = 'http://localhost:3000/api/user/signup';
    return axiosService.post('signup', user);
}

export default { signUp };
