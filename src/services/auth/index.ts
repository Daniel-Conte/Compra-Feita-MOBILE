import axios from '../config';
import authEndpoints from './endpoints';
import type { LoginRequest, LoginResponse } from './types';

const authApi = {
  async login(payload: LoginRequest) {
    const res: LoginResponse = await axios.post(authEndpoints.login, payload);

    return res;
  },
};

export default authApi;
