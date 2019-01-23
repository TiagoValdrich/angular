import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';

import { Frase } from '../shared/frase.model';
import { FRASES } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases: Frase[] = FRASES
  public instrucao: string = "Traduza a frase:"
  public resposta: string = ''

  public rodada: number = 0
  public rodadaFrase: Frase

  public progresso: number = 0

  public tentativas: number = 3

  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter()

  constructor() { 
    this.atualizaRodada(this.rodada);
   }

  ngOnInit() {
  }

  ngOnDestroy() {
    
  }
                                //OU Event
  public atualizaResposta(resposta: string): void {
    //OU console.log((<HTMLInputElement>resposta.target).value)
    this.resposta = resposta
  }

  public verificarResposta(): void {
    
    if(this.rodadaFrase.frasePtBr == this.resposta){

      this.rodada++
      this.progresso += (100/this.frases.length)
      if(this.rodada != this.frases.length){
        this.atualizaRodada(this.rodada);
      } else {
        this.encerrarJogo.emit('vitoria')
      }

    } else {
      this.tentativas--

      if(this.tentativas === -1){
        this.encerrarJogo.emit('derrota')
      }
    }
  }

  public atualizaRodada(rodada: number): void {
    this.rodadaFrase = this.frases[rodada]
    this.resposta = ''
  }

}
