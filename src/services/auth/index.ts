import axios from '../config';
import authEndpoints from './endpoints';
import type { LoginRequest, LoginResponse, RegisterRequest, RegisterResponse } from './types';

const authApi = {
  async login(payload: LoginRequest) {
    const res: LoginResponse = await axios.post(authEndpoints.login, payload);

    return res;
  },
  async register(payload: RegisterRequest) {
    const res: RegisterResponse = await axios.post(authEndpoints.registrar, payload);

    return res;
  },
  async validateToken(token: string) {
    await axios.get(authEndpoints.validateToken, {
      headers: { Authorization: `Bearer ${token}` },
    });
  },
};

export default authApi;
