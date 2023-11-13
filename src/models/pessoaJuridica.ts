import { ICliente } from "./ICliente";
import { Cliente } from "./cliente";

export class PessoaJuridica extends Cliente implements ICliente {
  cnpj: string;
  
  constructor({ nome, email, telefone, cnpj }: { nome: string; email: string; telefone: string; cnpj: string; }) {
    super(nome, email, telefone);
    this.cnpj = cnpj;

  }
  getcnpj() {
    return this.cnpj;
  }

  setnpj (): string {
    return this.cnpj;
  }
}