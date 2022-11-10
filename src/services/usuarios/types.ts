import { ApiResponse, MessageTokenResponse } from '../types';

export type Usuario = {
  codigo: number;
  nome: string;
  email: string;
  senha: string;
  telefone: string;
  admin: number;
  criadoEm: Date;
  atualizadoEm: Date;
};

export type UpdateUsuarioRequest = Pick<Usuario, 'codigo' | 'nome' | 'email' | 'telefone'> & {
  admin?: number;
};

export type UpdateUsuarioResponse = ApiResponse<MessageTokenResponse>;
