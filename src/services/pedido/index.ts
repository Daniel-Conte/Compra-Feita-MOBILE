import axios from '../config';
import pedidoEndpoints from './endpoints';
import type {
  CancelarPedidoResponse,
  ConfirmarPedidoResponse,
  FinalizarPedidoResponse,
  GetPedidoListResponse,
  GetPedidoResponse,
  IniciarPedidoResponse,
  InsertPedidoRequest,
  InsertPedidoResponse,
  NegarPedidoResponse,
} from './types';

const pedidoApi = {
  async getAllList() {
    const res: GetPedidoListResponse = await axios.get(pedidoEndpoints.pedido);

    return res;
  },
  async getUserList() {
    const res: GetPedidoListResponse = await axios.get(pedidoEndpoints.pedidoUsuario);

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
  async cancelar(codigo: number, justificativa: string) {
    const res: CancelarPedidoResponse = await axios.put(`${pedidoEndpoints.cancelar}/${codigo}`, {
      justificativa,
    });

    return res;
  },
  async confirmar(codigo: number) {
    const res: ConfirmarPedidoResponse = await axios.put(`${pedidoEndpoints.confirmar}/${codigo}`);

    return res;
  },
  async finalizar(codigo: number) {
    const res: FinalizarPedidoResponse = await axios.put(`${pedidoEndpoints.finalizar}/${codigo}`);

    return res;
  },
  async iniciar(codigo: number) {
    const res: IniciarPedidoResponse = await axios.put(`${pedidoEndpoints.iniciar}/${codigo}`);

    return res;
  },
  async negar(codigo: number, justificativa: string) {
    const res: NegarPedidoResponse = await axios.put(`${pedidoEndpoints.negar}/${codigo}`, {
      justificativa,
    });

    return res;
  },
};

export default pedidoApi;
