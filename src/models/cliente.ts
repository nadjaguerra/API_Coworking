import { ICliente } from "./ICliente";

export abstract class Cliente implements ICliente{
  
    private nome : string;
    private email : string;
    private telefone : string;
  
    constructor(nome : string, email :string, telefone :string){
      this.nome = nome;
      this.email = email;
      this.telefone = telefone;
    }
  
    getNome (): string {
      return this.nome;
    }
    setNome () {
      return this.nome;
    }
    getEmail () {
      return this.email;
    }
    setEmail (): string {
      return this.email;

    }
    getTelefone (): string{
    return this.telefone;
    }
    setTelefone () {
    return this.telefone;
   }
    

    getGenericCliente(property: keyof Cliente){
      return this[property];
    }
  
  }