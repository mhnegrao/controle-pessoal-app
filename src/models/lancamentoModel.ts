

export interface ILancamento {
    add(lancamento: Lancamento): Promise<Lancamento>;   
    update(lancamento: Lancamento): Promise<Lancamento>;
    delete(id: number): Promise<Lancamento>;
    get(id: number): Promise<Lancamento>;
    getAll(): Promise<Lancamento[]>;
    getAllByUser(usuario: string): Promise<Lancamento[]>;
}

export type Lancamento = {
  id?: number;
  descricao?: string;
  valor?: number;
  data?: Date;
  tipo?: string;
  categoria?: string;
  pago?: boolean;
  baixado?: boolean;
  dataBaixa?: Date;
  usuario?: string;
  created_at?: Date;
  updated_at?: Date;
};
