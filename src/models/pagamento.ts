import { Cliente } from "./cliente";
import { v4 as uuid } from 'uuid';

enum TipoPagamento {
  Boleto = 'Boleto',
  Cartao = 'Cartão',
  Pix = 'Pix',
  Paypal = 'Paypal',
}

export class Pagamento {
  cliente: Cliente;  
  pagID: string;
  valor: number;
  tipo: TipoPagamento;

  constructor({ cliente, valor, tipo }: { cliente: Cliente; valor: number; tipo: TipoPagamento }) {
    this.pagID = uuid();
    this.cliente = cliente;
    this.valor = valor;
    this.tipo = tipo;
  }

  validarPagamento(): boolean {
    return this.valor > 0 && Object.values(TipoPagamento).includes(this.tipo);
  }
}

class PagamentoBoleto extends Pagamento {
  constructor({ cliente, valor }: { cliente: Cliente; valor: number }) {
    super({ cliente, valor, tipo: TipoPagamento.Boleto });
  }
}

class PagamentoCartao extends Pagamento {
  numeroCartao: string;
  dataValidade: string;
  cvv: string;

  constructor({ cliente, valor, numeroCartao, dataValidade, cvv }: { cliente: Cliente; valor: number; numeroCartao: string; dataValidade: string; cvv: string }) {
    super({ cliente, valor, tipo: TipoPagamento.Cartao });
    this.numeroCartao = numeroCartao;
    this.dataValidade = dataValidade;
    this.cvv = cvv;
  }
}

class PagamentoPix extends Pagamento {
  chavePix: string;

  constructor({ cliente, valor, chavePix }: { cliente: Cliente; valor: number; chavePix: string }) {
    super({ cliente, valor, tipo: TipoPagamento.Pix });
    this.chavePix = chavePix;
  }
}

class PagamentoPaypal extends Pagamento {
  email: string;
  senha: string;

  constructor({ cliente, valor, email, senha }: { cliente: Cliente; valor: number; email: string; senha: string }) {
    super({ cliente, valor, tipo: TipoPagamento.Paypal });
    this.email = email;
    this.senha = senha;
  }
}




/*
const pagamentoBoleto = new PagamentoBoleto({ valor: 100 });
const pagamentoCartao = new PagamentoCartao({ valor: 50, numeroCartao: '1234-5678-9012-3456', dataValidade: '12/23', cvv: '123' });
const pagamentoPix = new PagamentoPix({ valor: 200, chavePix: 'chavepix@exemplo.com' });
const pagamentoPaypal = new PagamentoPaypal({ valor: 80, email: 'usuario@exemplo.com', senha: 'senhadopaypal' });

// Testando os pagamentos
console.log("Pagamento boleto válido?", pagamentoBoleto.validarPagamento());  // Saída esperada: true
console.log("Pagamento cartão válido?", pagamentoCartao.validarPagamento());  // Saída esperada: true
console.log("Pagamento Pix válido?", pagamentoPix.validarPagamento());  // Saída esperada: true
console.log("Pagamento Paypal válido?", pagamentoPaypal.validarPagamento());  // Saída esperada: true

// Testando um pagamento inválido (tipo de pagamento não reconhecido)
const pagamentoInvalido = new Pagamento({ valor: 50, tipo: TipoPagamento.Cheque });  // Tipo de pagamento inválido
console.log("Pagamento inválido?", pagamentoInvalido.validarPagamento());  // Saída esperada: false


*/