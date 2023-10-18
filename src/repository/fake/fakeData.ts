import { faker } from "@faker-js/faker/locale/pt_BR";
import type { User } from "../../models/userModel";
import type { Lancamento } from "../../models/lancamentoModel";

export const fakeUsers = async (): Promise<User[]> => {
  const users: User[] = [];
  for (let i = 0; i < 5; i++) {
    users.push({
      id: faker.string.uuid(),
      name: faker.person.fullName().toUpperCase(),
      email: faker.internet.email().toLowerCase(),
      password: faker.internet.password(),
      role: faker.helpers
        .arrayElement(["admin", "user", "guest"])
        .toUpperCase(),
      created_at: faker.date.past(),
      status: faker.helpers
        .arrayElement(["ativo", "inativo", "temporario"])
        .toUpperCase(),
    });
  }
  return users;
};

export const fakeLanctos = async (): Promise<Lancamento[]> => {
  const lancamentos: Lancamento[] = [];
  for (let i = 0; i < 5; i++) {
    lancamentos.push({
      id: faker.datatype.number(),
      descricao: faker.company.name(),
      data: faker.date.anytime(),
      tipo: faker.helpers.arrayElement(["D", "C"]),
      categoria: faker.lorem.words(2),
      pago: faker.datatype.boolean(),
      baixado: faker.datatype.boolean(),
      dataBaixa: faker.date.past(),
      usuario: faker.internet.userName(),
      created_at: faker.date.past(),
    });
  }
  return lancamentos;
};
