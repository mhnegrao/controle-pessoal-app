import { faker } from '@faker-js/faker/locale/pt_BR';
import type { User } from "../../models/userModel";
import moment from "moment";

export const fakeUsers = async (): Promise<User[]> => {
  const users: User[] = [];
  for (let i = 0; i < 5; i++) {
    users.push({
      id: faker.string.uuid(),
      name: faker.person.fullName().toUpperCase(),
      email: faker.internet.email().toLowerCase(),
      password: faker.internet.password(),
      role: faker.helpers.arrayElement(["admin", "user","guest"]).toUpperCase(),
      created_at: faker.date.past(),
      status:faker.helpers.arrayElement(["ativo", "inativo","temporario"]).toUpperCase(),});
  }
  return users;
};
