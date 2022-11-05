import axios from '../config';
import pedidoEndpoints from './endpoints';
import type {
  GetPedidoListResponse,
  GetPedidoResponse,
  InsertPedidoRequest,
  InsertPedidoResponse,
} from './types';

const pedidoApi = {
  async getAllList() {
    const res: GetPedidoListResponse = await axios.get(pedidoEndpoints.pedido);

    return res;
  },
  async get(codigo: number) {
    const res: GetPedidoResponse = await axios.get(`${pedidoEndpoints.pedido}/${codigo}`);

    return res;
  },
  async insert(payload: InsertPedidoRequest) {
    const res: InsertPedidoResponse = await axios.post(pedidoEndpoints.pedido, payload);

    return res;
  },
};

export default pedidoApi;
