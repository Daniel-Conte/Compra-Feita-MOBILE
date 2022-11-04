export interface CarrinhoStore {
  quantidade: number;

  getQuantidade: () => Promise<void>;
  setQuantidade: (quantidade: number) => void;
  increaseQuantidade: () => void;
  decreaseQuantidade: () => void;
}
