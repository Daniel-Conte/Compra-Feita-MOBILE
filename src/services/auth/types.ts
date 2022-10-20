import { ApiResponse } from '../types';

export type LoginRequest = {
  email: string;
  senha: string;
};

export type LoginResponse = ApiResponse<string>;
