import type { CarrinhoListItem } from '@services/carrinho/types';
import type { Endereco } from '@services/endereco/types';
import type { Usuario } from '@services/usuarios/types';
import type { ApiResponse, MessageResponse } from '../types';

export type Pedido = {
  codigo: number;
  metodoPagamento: PedidoMetodoPagamento;
  pagamentoDinheiro?: number;
  data: string;
  status: PedidoStatus;
  justificativaCancelamento?: string;
  valorTotal: number;
  atualizadoEm: Date;
  pessoa: Pick<Usuario, 'codigo' | 'nome' | 'email' | 'telefone'>;
  endereco: Pick<Endereco, 'rua' | 'numero' | 'bairro' | 'cidade' | 'complemento'>;
  itensPedido: CarrinhoListItem[];
};

// 0 -> Realizado;
// 1 -> Confirmado;
// 2 -> Negado
// 3 -> Cancelado
// 4 -> Iniciado
// 5 -> Finalizado
export type PedidoStatus = 0 | 1 | 2 | 3 | 4 | 5;

// 1 -> Cartão
// 2 -> Dinheiro
export type PedidoMetodoPagamento = 1 | 2;

export type PedidosListItem = Pick<Pedido, 'codigo' | 'status' | 'data' | 'valorTotal'>;

export type GetPedidoListResponse = ApiResponse<PedidosListItem[]>;

export type GetPedidoResponse = ApiResponse<Pedido>;

export type InsertPedidoRequest = Pick<Pedido, 'metodoPagamento' | 'pagamentoDinheiro'> & {
  enderecoCodigo: number;
  itens: number[];
};

export type InsertPedidoResponse = ApiResponse<MessageResponse>;
