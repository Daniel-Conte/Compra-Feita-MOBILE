import type { Carrinho } from '@services/carrinho/types';
import type { ApiResponse, MessageResponse } from '../types';

export type Pedido = {
  codigo: number;
  metodoPagamento: number; // 1 -> Cartão; 2 -> Dinheiro
  pagamentoDinheiro?: number;
  data: Date;
  status: number; // 0 -> Realizado; 1 -> Confirmado; 2 -> Negado; 3 -> Cancelado; 4 -> Iniciado; 5 -> Finalizado
  justificativaCancelamento?: string;
  atualizadoEm: Date;
  pessoaCodigo: number;
  enderecoCodigo: number;
};

export type PedidoFull = Pedido & {
  itensPedido: Carrinho[];
};

export type GetPedidoListResponse = ApiResponse<Pedido[]>;

export type GetPedidoResponse = ApiResponse<PedidoFull>;

export type InsertPedidoRequest = Pick<
  Pedido,
  'enderecoCodigo' | 'metodoPagamento' | 'pagamentoDinheiro'
> & {
  itens: number[];
};

export type InsertPedidoResponse = ApiResponse<MessageResponse>;
