export interface UserStore extends User {
  setUser: (user: User) => void;
}

export type User = {
  codigo: number;
  nome: string;
  email: string;
  telefone: string;
  admin: number;
  criadoEm: Date | null;
  atualizadoEm: Date | null;
  iat: number;
  exp: number;
};
