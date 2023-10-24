export type KeyValuePair ={
  key: string,
  value: string
}
export enum NaturezaLancamento {
  Debito = 1,
  Credito = 2,
}

export enum TipoConta {
  Corrente = 1,
  Poupanca = 2,
}

export enum TipoPessoa {
  Fisica = 1,
  Juridica = 2,
}

export enum TipoUsuario {
  Administrador = 1,
  Usuario = 2,
  Convidado = 3,
}

export enum StatusLancamento {
  Pendente = 1,
  Pago = 2,
  Cancelado = 3,
}

export enum PlanoDeContas {
  Agua = 1,
  Luz = 2,
  Telefone = 3,
  Internet = 4,
  Aluguel = 5,
  Salario = 6,
  Celular = 7,
  Mercado = 8,
  Farmacia = 9,
  Petshop = 10,
  Restaurante = 11,
  Lazer = 12,
  Outros = 13,
}

export const EnumToObject = (enumObject: any): KeyValuePair[] => {
  let itens= [{ key: "", value: "" }];

  // let result = Object.keys(enumObject).forEach((k, i) => {
  //   let obj = { key: `${k}`, value: `${i}` };
  //   itens.push(obj);
  // });
  let values=Object.keys(enumObject).filter(key => !isNaN(Number(enumObject[key])));
  
    values.forEach((key, i) => {  
    let item = { key: `${key}`, value: `${enumObject[key]}` };
    itens.push(item);
    
  });
 
  console.log(itens)
  return itens
};

