import axios from 'axios';

import { REACT_APP_BASE_URL } from '@env';

const instance = axios.create({
  baseURL: REACT_APP_BASE_URL,
  headers: { 'Content-type': 'application/json' },
});

/* instance.interceptors.request.use(config => {
    

    return config
}, undefined, {synchronous: true }) */

instance.interceptors.response.use(
  resp => {
    if (resp.data?.data) resp.data = resp.data.data;
    else if (resp.data?.message) resp.data = resp.data.message;

    return resp;
  },
  errorResp => {
    if (errorResp?.response?.data?.error) {
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
