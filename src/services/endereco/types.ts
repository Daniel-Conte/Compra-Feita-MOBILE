import type { ApiResponse, MessageResponse } from '@services/types';

export type Endereco = {
  codigo: number;
  nome: string;
  cep: string;
  cidade: string;
  uf: string;
  bairro: string;
  rua: string;
  numero: string;
  complemento?: string;
  criadoEm: Date;
  atualizadoEm: Date;
  codigoPessoa: number;
};

export type GetEnderecosResponse = ApiResponse<Endereco[]>;

export type GetEnderecoResponse = ApiResponse<Endereco>;

export type InsertEnderecoRequest = {
  nome: string;
  cep: string;
  cidade: string;
  uf: string;
  bairro: string;
  rua: string;
  numero: string;
  complemento?: string;
};

export type InsertEnderecoResponse = ApiResponse<MessageResponse>;

export type UpdateEnderecoRequest = InsertEnderecoRequest & {
  codigo: number;
};

export type UpdateEnderecoResponse = ApiResponse<MessageResponse>;

export type DeleteEnderecoResponse = ApiResponse<MessageResponse>;
