import axios from '../config';
import authEndpoints from './endpoints';

import type { LoginRequest } from './types';

const authApi = {
  async login(payload: LoginRequest) {
    try {
      const res = await axios.post(authEndpoints.login, payload);

      console.log(res);
    } catch (error) {
      console.log(error);
    }
  },
};

export default authApi;
