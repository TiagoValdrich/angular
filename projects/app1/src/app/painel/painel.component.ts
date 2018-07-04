import { Component, OnInit } from '@angular/core';

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

  constructor() { 
    this.atualizaRodada(this.rodada);
   }

  ngOnInit() {
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
      this.atualizaRodada(this.rodada);
    } else {
      this.tentativas--

      if(this.tentativas === -1){
        alert("Você perdeu todas as tentativas");
      }
    }
  }

  public atualizaRodada(rodada: number): void {
    this.rodadaFrase = this.frases[rodada]
    this.resposta = ''
  }

}
