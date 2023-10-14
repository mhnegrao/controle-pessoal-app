export type Tarefa = {
  id?: number;
  titulo?: string;
  descricao?: string;
  status?: string;
  dataCriacao?: Date;
  dataAtualizacao?: Date;
  dataConclusao?: Date;
};
export type ListItem = { title?: string; description?: string };
export interface ITarefa {
  incluirTatrefa(tarefa: Tarefa): Promise<Tarefa>;
  excluiTarefa(id: number): Promise<void>;
  atualizaTarefa(tarefa: Tarefa): Promise<Tarefa>;
  concluiTarefa(id: number): Promise<boolean>;
}
