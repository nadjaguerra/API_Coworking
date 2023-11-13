import { v4 as uuid } from 'uuid';
import { Reserva } from "./reserva";

export class Sala {
  salaID: string;
  nome: string;
  capacidade: number;
  valorDiario: number;
  reservada: boolean;
  reservas: Reserva[];

  constructor({ nome, capacidade, valorDiario }: { nome: string; capacidade: number; valorDiario: number }) {
    this.salaID = uuid();
    this.nome = nome;
    this.capacidade = capacidade;
    this.valorDiario = valorDiario;
    this.reservada = false;
    this.reservas = [];
  }

  validarSala(): boolean {
    return !this.reservada;  // Retorna verdadeiro se a sala não estiver reservada
  }

  reservarSala(reserva: Reserva): void {
    if (this.reservada) {
      console.log(`A sala ${this.nome} já está reservada.`);
      return; // Early return
    }
  
    this.reservada = true;
    this.reservas.push(reserva);
    console.log(`Sala ${this.nome} reservada com sucesso para a reserva ${reserva.reservaID}!`);
  }
  
  liberarSala(): void {
    if (!this.reservada) {
      console.log(`A sala ${this.nome} já está liberada.`);
      return; // Early return
    }
  
    this.reservada = false;
    console.log(`Sala ${this.nome} liberada.`);
  }
}  

