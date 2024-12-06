import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import Config from 'react-native-config';

// Create an axios instance
const apiDev = axios.create({
  baseURL: Config.BASE_URL_FOR_LOGIN,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

// Request interceptors
apiDev.interceptors.request.use(
  async config => {
    console.log('------------------------------------------------');
    console.log('------------apiDev-config-------------');
    console.log('------------------------------------------------');
    console.log('BaseUrl : ', config.baseURL);
    console.log('Url : ', config.url);
    console.log('Headers : ', config.headers);
    console.log('------------------------------------------------');
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

// Response interceptors
apiDev.interceptors.response.use(
  response => response,
  async error => {
    console.log('---------------Response---Error-------------------');
    console.log('Error : ', error?.message);
    const requestConfig = error?.config;
    console.log('Url : ', requestConfig.url);
    console.log('method : ', requestConfig.method);
    console.log('Headers : ', requestConfig.headers);
    console.log('Params : ', requestConfig.params);
    console.log('------------------------------------------------');
    if (!error.response) {
      console.error('No internet connection, please try again later.');
    }
    return Promise.reject(error);
  },
);

export default apiDev;
