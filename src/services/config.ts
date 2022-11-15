import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

import { apiUrl } from '@config/index';
import { AUTH_TOKEN_KEY } from '@constants/index';
import useUserStore from '@store/User';

const instance = axios.create({
  baseURL: apiUrl,
  headers: { 'Content-type': 'application/json' },
});

instance.interceptors.request.use(async config => {
  const token = await SecureStore.getItemAsync(AUTH_TOKEN_KEY);

  if (token && config?.headers && !config.headers['Authorization'])
    config.headers['Authorization'] = `Bearer ${token}`;

  return config;
});

instance.interceptors.response.use(
  resp => {
    if (resp.data?.data) resp.data = resp.data.data;

    return resp;
  },
  errorResp => {
    if (errorResp?.response?.status === 401) {
      useUserStore.getState().setUser(null);
      SecureStore.deleteItemAsync(AUTH_TOKEN_KEY);
    }

    if (typeof errorResp?.response?.data === 'string') {
      throw {
        message: errorResp.response.data,
        status: errorResp.response.status,
      };
    } else if (errorResp?.response?.data?.error) {
      throw {
        message: errorResp.response.data.error,
        status: errorResp.response.status,
      };
    }

    throw errorResp;
  },
  { synchronous: true },
);

export default instance;
