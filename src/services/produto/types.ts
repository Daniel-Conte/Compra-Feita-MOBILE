import type { Categoria } from '../categoria/types';
import type { ApiResponse, MessageResponse } from '../types';

export type Produto = {
  codigo: number;
  nome: string;
  descricao: string;
  precoUnitario: number;
  estoque: number;
  categoria: Omit<Categoria, 'criadoEm' | 'atualizadoEm'>;
  imagens: {
    codigo?: number;
    imagem: string;
  }[];
  altura?: number;
  comprimento?: number;
  largura?: number;
  marca?: string;
  modelo?: string;
  criadoEm: Date;
  atualizadoEm: Date;
};

export type ProdutoListItem = Pick<Produto, 'codigo' | 'nome' | 'precoUnitario'> & {
  imagem: string;
};

export type GetProdutoListResponse = ApiResponse<ProdutoListItem[]>;

export type GetProdutoResponse = ApiResponse<Produto>;

export type InsertProdutoRequest = Omit<
  Produto,
  'codigo' | 'criadoEm' | 'atualizadoEm' | 'categoria' | 'imagens'
> & {
  codigoCategoria: number;
  imagens?: {
    codigo?: number;
    imagem: string;
  }[];
};

export type InsertProdutoResponse = ApiResponse<MessageResponse>;

export type UpdateProdutoRequest = Omit<
  Produto,
  'criadoEm' | 'atualizadoEm' | 'categoria' | 'imagens'
> & {
  codigoCategoria: number;
  imagens?: {
    codigo?: number;
    imagem: string;
  }[];
};

export type UpdateProdutoResponse = ApiResponse<MessageResponse>;

export type DeleteProdutoResponse = ApiResponse<MessageResponse>;
