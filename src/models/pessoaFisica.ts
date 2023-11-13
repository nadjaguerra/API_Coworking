import { ICliente } from "./ICliente";
import { Cliente } from "./cliente";

export class PessoaFisica extends Cliente implements ICliente {
  cpf: string;
  
  constructor({ nome, email, telefone, cpf }: { nome: string; email: string; telefone: string; cpf: string; }) {
    super(nome, email, telefone);
    this.cpf = cpf;

  }
  getcpf() {
    return this.cpf;
  }

  setcpf (): string {
    return this.cpf;
  }

  
   /* getGenericCliente(property: keyof Cliente): 
    }*/

}