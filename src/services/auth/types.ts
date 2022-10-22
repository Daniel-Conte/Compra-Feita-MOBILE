import { ApiResponse } from '../types';

export type LoginRequest = {
  email: string;
  senha: string;
};

export type LoginResponse = ApiResponse<string>;

export type RegisterRequest = {
  senha: string;
  nome: string;
  email: string;
  telefone: string;
};

export type RegisterResponse = ApiResponse<string>;
