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

export type InsertCarrinhoRequest = Pick<Carrinho, 'codigoProduto' | 'quantidade'>;

export type InsertCarrinhoResponse = ApiResponse<MessageResponse>;
