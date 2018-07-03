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
  public resposta: string

  public rodada: number = 0
  public rodadaFrase: Frase

  public progresso: number = 0

  constructor() { 
    this.rodadaFrase = this.frases[this.rodada]
   }

  ngOnInit() {
  }
                                //OU Event
  public atualizaResposta(resposta: string): void {
    //console.log(resposta)
    //OU console.log((<HTMLInputElement>resposta.target).value)
    this.resposta = resposta
    //console.log(this.resposta)
  }

  public verificarResposta(): void {
    
    if(this.rodadaFrase.frasePtBr == this.resposta){
      this.rodada++
      this.progresso += (100/this.frases.length)
      this.rodadaFrase = this.frases[this.rodada]
    }else{
      alert("Resposta errada !")
    }
  }

}
