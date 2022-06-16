import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const axiosApiIntances = axios.create({
  baseURL: 'https://kinokarte.herokuapp.com/',
});

// Add a request interceptor
axios.interceptors.request.use(
  async function (config) {
    // Do something before request is sent

    const token = await AsyncStorage.getItem('token');

    config.headers = {
      Authorization: `Bearer ${token}`,
    };

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  async function (error) {
    if (error.response.status === 403) {
      if (error.response.data.msg !== 'jwt expired') {
        await AsyncStorage.multiRemove(['token', 'refreshToken', 'id']);
      } else {
        const refreshToken = await AsyncStorage.getItem('refreshToken');
        axiosApiIntances
          .post('auth/refresh', {refreshToken})
          .then(async res => {
            await AsyncStorage.setItem('token', res.data.data.token);
            await AsyncStorage.setItem(
              'refreshToken',
              res.data.data.refreshToken,
            );
          })
          .catch(async err => {
            await AsyncStorage.multiRemove(['token', 'refreshToken', 'id']);
            console.log('refresh error');
            console.log(err);
          });
      }
    }
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  },
);

export default axiosApiIntances;
