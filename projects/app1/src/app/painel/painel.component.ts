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

  constructor() {  }

  ngOnInit() {
  }
                                //OU Event
  public atualizaResposta(resposta: string): void {
    //console.log(resposta)
    //OU console.log((<HTMLInputElement>resposta.target).value)
    this.resposta = resposta
    console.log(this.resposta)
  }

}
