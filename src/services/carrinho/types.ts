import type { ApiResponse, MessageResponse } from '@services/types';

export type Carrinho = {
  codigo: number;
  quantidade: number;
  nomeProduto: string;
  precoUnitario: number;
  criadoEm: Date;
  atualizadoEm: Date;
  codigoProduto: number;
  codigoPessoa: number;
  codigoPedido: number | null;
};

export type CarrinhoListItem = Pick<
  Carrinho,
  'codigo' | 'nomeProduto' | 'precoUnitario' | 'quantidade'
>;

export type GetCarrinhoListResponse = ApiResponse<CarrinhoListItem[]>;

export type InsertCarrinhoRequest = Pick<Carrinho, 'codigoProduto' | 'quantidade'>;

export type InsertCarrinhoResponse = ApiResponse<MessageResponse>;

export type UpdateQuantidadeCarrinhoItemRequest = Pick<Carrinho, 'codigo' | 'quantidade'>;

export type UpdateQuantidadeCarrinhoItemResponse = ApiResponse<MessageResponse>;

export type DeleteCarrinhoItemResponse = ApiResponse<MessageResponse>;
