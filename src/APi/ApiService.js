import apiDev from './apiDev';
import {USER_LOGIN} from './endpoints';

export const userLogin = async data => {
  try {
    const response = await apiDev.post(USER_LOGIN, data);
    console.log('response :', response.data);
    const newData = {...response.data, status: response.status};
    return newData;
  } catch (error) {
    if (error.response) {
      console.log('UserLogin: error response data:', error.response.data);
      throw error.response.data;
    }
  }
};
