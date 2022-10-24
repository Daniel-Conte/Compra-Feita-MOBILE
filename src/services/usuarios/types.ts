import { ApiResponse, MessageTokenResponse } from '../types';

export type UpdateUsuarioRequest = {
  codigo: number;
  nome: string;
  email: string;
  telefone: string;
  admin?: number;
};

export type UpdateUsuarioResponse = ApiResponse<MessageTokenResponse>;
