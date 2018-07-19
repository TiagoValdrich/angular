import { Component, OnInit } from '@angular/core';
import { OrdemCompraService } from '../ordem-compra.service';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [ OrdemCompraService ]
})
export class OrdemCompraComponent implements OnInit {

  public endereco: string = ''
  public numero: string = '' 
  public complemento: string = ''
  public formaPagamento: string = ''

  // controles de validação dos campos

  public enderecoValido: boolean
  public numeroValido: boolean
  public complementoValido: boolean
  public formaPagamentoValido: boolean

  public enderecoPristine: boolean = true
  public numeroPristine: boolean = true
  public complementoPristine: boolean = true
  public formaPagamentoPristine: boolean = true

  public formEstado: string = 'disabled'

  constructor(
    private ordemCompraService: OrdemCompraService
  ) { }

  ngOnInit() {

    //this.ordemCompraService.efetivarCompra();

  }

  public atualizaEndereco(endereco: string): void {
    this.endereco = endereco

    this.enderecoPristine = false

    if(this.endereco.length > 3) {
      this.enderecoValido = true
    } else {
      this.enderecoValido = false
    }

    this.habilitaForm()
  }

  public atualizaNumero(numero: string): void {
    this.numero = numero

    this.numeroPristine = false

    if(this.numero.length > 0) {
      this.numeroValido = true
    } else {
      this.numeroValido = false
    }

    this.habilitaForm()
  }

  public atualizaComplemento(complemento: string): void {
    this.complemento = complemento

    this.complementoPristine = false

    if(this.complemento.length > 0) {
      this.complementoValido = true
    }

    this.habilitaForm()
  }

  public atualizaFormaPagamento(formaPagamento: string): void {
    this.formaPagamento = formaPagamento

    this.formaPagamentoPristine = false

    if(this.formaPagamento != '') {
      this.formaPagamentoValido = true
    } else {
      this.formaPagamentoValido = false
    }

    this.habilitaForm()
  }

  public habilitaForm(): void {
    if(this.enderecoValido === true && this.enderecoValido === true && this.formaPagamentoValido === true){
      this.formEstado = ''
    }else{
      this.formEstado = 'disabled'
    }
  }

}
