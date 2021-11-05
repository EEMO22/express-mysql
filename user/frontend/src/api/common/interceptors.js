// import store from '../../store/index';

// /* eslint prefer-arrow-callback: 0 */

// export default function setInterceptors(axiosService) {
//     axiosService.interceptor.request.use(
//         function (config) {
//             config.header.Authorization = store.state.token;
//             return config;
//         },
//         function (error) {
//             return Promise.reject(error);
//         },
//     );

//     axiosService.interceptor.response.use(
//         function (response) {
//             return response;
//         },
//         function (error) {
//             return Promise.reject(error);
//         },
//     );
//         return axiosService;
// }
