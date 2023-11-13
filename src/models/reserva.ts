import { Cliente } from "./cliente";
import { Sala } from "./sala";
import { Pagamento } from './pagamento';
import { v4 as uuid } from 'uuid';

export class Reserva {
  reservaID: string;
  cliente: Cliente;
  sala: Sala;
  data: Date;
  horaInicio: Date;
  horaFim: Date;
  pagamento: Pagamento | null;
  taxaCancelamento: number;

  constructor({ cliente, sala, data,taxaCancelamento }: { cliente: Cliente; sala: Sala; data: Date; taxaCancelamento: number;
  }) {
    this.reservaID = uuid();
    this.cliente = cliente;
    this.sala = sala;
    this.data = data;
    this.horaInicio = new Date();
    this.horaFim = new Date();
    this.pagamento = null;
    this.taxaCancelamento = taxaCancelamento || 0;
  }

  realizarReserva(): boolean {
    try {
      if (!this.pagamento) {
        throw new Error("Pagamento não realizado!");
      }

      // Verifica se o pagamento é válido
      if (!this.pagamento.validarPagamento()) {
        throw new Error("Pagamento inválido.");
      }

      // Verifica se a sala é válida
      if (!this.sala.validarSala()) {
        throw new Error("Sala Reservada!");
      }

      console.log("Reserva realizada com sucesso!");
      return true;
    } catch (error) {
      console.error("Falha ao realizar a reserva:", error);
      return false;
    }
  }


  cancelarReserva(): void {
    try {
      const tempoCancelamento = 86400000; // 24 horas em milissegundos
    
      const agora = new Date().getTime();
      const inicioReserva = new Date(this.data + ' ' + this.horaInicio).getTime(); //concatenar a data e a hora
    
      if (agora >= inicioReserva - tempoCancelamento) {
        throw new Error("Não foi possível cancelar essa reserva. O cancelamento deve ser realizado até 24 horas antes do horário agendado.");
      }
  
      //VERIFICAR ESSA PARTE AINDA

      const valorCancelamento = this.taxaCancelamento > 0 ? this.taxaCancelamento : 0;
      console.log(`Reserva cancelada com sucesso!`);
    } catch (error) {
      console.error("Falha ao cancelar a reserva:", error);
    }
  }
  


  
}

