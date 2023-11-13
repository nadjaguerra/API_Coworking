import { Reserva } from "./reserva";

export class Historico {
  clienteID: string;
  historico: Reserva[];

  constructor(clienteID: string) {
    this.clienteID = clienteID;
    this.historico = [];
  }

  adicionarReserva(reserva: Reserva): void {
    this.historico.push(reserva);
  }

  lerHistorico(): Reserva[] {
    return this.historico;
  }
}

