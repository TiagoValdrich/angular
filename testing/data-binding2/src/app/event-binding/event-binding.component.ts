import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  valorAtual: string = "";
  valorSalvo: string = "";

  isMouseOver: boolean = false;

  constructor() { }

  botaoClicado(){
    alert("Oi!");
  }

  onKeyUp(evento: KeyboardEvent){
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(evento){
    this.valorSalvo = evento;
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  ngOnInit() {
  }

}
