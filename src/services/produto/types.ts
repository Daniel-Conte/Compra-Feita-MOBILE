import type { ApiResponse } from '../types';

export type Produto = {
  codigo: number;
  nome: string;
  descricao: string;
  precoUnitario: number;
  estoque: number;
  categoria: {
    codigo: number;
    nome: string;
    descricao: string | null;
    codigoCategoriaPai: number | null;
  };
  imagens: string[];
  altura: number | null;
  comprimento: number | null;
  largura: number | null;
  marca: string | null;
  modelo: string | null;
  criadoEm: Date;
  atualizadoEm: Date;
};

export type ProdutoListItem = Pick<Produto, 'codigo' | 'nome' | 'precoUnitario'> & {
  imagem: string;
};

export type GetProdutoListResponse = ApiResponse<ProdutoListItem[]>;

export type GetProdutoResponse = ApiResponse<Produto>;
